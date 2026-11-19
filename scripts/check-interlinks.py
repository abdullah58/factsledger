#!/usr/bin/env python3
"""Audit FactsLedger contextual internal links.

The site-wide rule is one link to each canonical internal target per source
page, even when the entity name appears repeatedly. This checker scans Markdown
content and fails on duplicate, missing, unpublished or nested content targets. Legacy `related:`
blocks are reported as warnings; use --fail-on-related during migrations.
"""

from __future__ import annotations

import argparse
import re
import sys
from collections import Counter
from dataclasses import dataclass
from pathlib import Path
from urllib.parse import urldefrag, urlsplit

MARKDOWN_LINK_RE = re.compile(r"\]\((/[^)\s]+/?)\)")
YAML_HREF_RE = re.compile(r"^\s+href:\s*(/[^\s#]+/?)(?:\s+#.*)?$", re.MULTILINE)
RELATED_RE = re.compile(r"^related:\s*$", re.MULTILINE)
FRONTMATTER_RE = re.compile(r"^---\n.*?\n---\n", re.S)
CONTENT_PATH_RE = re.compile(r"^/(creative-works|events|organizations|people|places|schools|species|universities)/([^/]+)/?$")


@dataclass(frozen=True)
class Finding:
    kind: str
    source: str
    target: str
    detail: str


def canonical_path(raw: str) -> str:
    """Normalize a root-relative internal URL to a canonical trailing-slash path."""
    path = urlsplit(urldefrag(raw)[0]).path
    if not path.startswith("/"):
        path = "/" + path
    return path.rstrip("/") + "/"


def content_target(repo: Path, target: str) -> Path | None:
    match = CONTENT_PATH_RE.fullmatch(target)
    if not match:
        return None
    category, slug = match.groups()
    return repo / "src" / "content" / category / f"{slug}.md"


def source_files(repo: Path) -> list[Path]:
    return sorted(
        path
        for path in (repo / "src" / "content").glob("*/*.md")
        if not path.name.startswith("_")
    )


def is_draft(text: str) -> bool:
    frontmatter = FRONTMATTER_RE.match(text)
    return bool(frontmatter and re.search(r"^draft:\s*true\s*(?:#.*)?$", frontmatter[0], re.M | re.I))


def find_nested_links(body: str) -> list[str]:
    """Return snippets of links whose text contains a complete inner link.

    Catches applier corruptions like [[Meta](/organizations/meta/) Platforms](...)
    and [Bank of [England](/places/england/) ...](...). Bracketed non-link text
    ([^1^] footnotes, [sic], [BD Review] citation titles) is NOT flagged: a
    `[` only counts as a link open when its `]` is followed by `(`. The snippet
    runs from the outer `[` past the inner link's close, enough to identify it.
    """
    hits: list[str] = []
    i, n, stack = 0, len(body), []
    while i < n:
        c = body[i]
        if c == "\\":
            i += 2
            continue
        if c == "[":
            stack.append(i)
        elif c == "]":
            if i + 1 < n and body[i + 1] == "(":
                if len(stack) >= 2:
                    hits.append(body[stack[0]:i + 160])
                if stack:
                    stack.pop()
            elif stack:
                stack.pop()
        i += 1
    return hits


def inspect_file(repo: Path, path: Path) -> tuple[dict[str, int], list[Finding], bool]:
    text = path.read_text(encoding="utf-8")
    if path.name.startswith("_") or is_draft(text):
        return {}, [], False
    source = str(path.relative_to(repo))
    raw_links = MARKDOWN_LINK_RE.findall(text) + YAML_HREF_RE.findall(text)
    links = [canonical_path(link) for link in raw_links]
    counts = Counter(links)
    findings: list[Finding] = []

    for target, count in sorted(counts.items()):
        if count > 1:
            findings.append(Finding("duplicate", source, target, f"{count} occurrences"))

    for target in sorted(counts):
        destination = content_target(repo, target)
        if destination is not None and not destination.exists():
            findings.append(Finding("missing", source, target, str(destination.relative_to(repo))))
        elif destination is not None and (destination.name.startswith("_") or is_draft(destination.read_text(encoding="utf-8"))):
            findings.append(Finding("unpublished", source, target, "target is a draft or template and has no public route"))

    body = FRONTMATTER_RE.sub("", text, count=1)
    for snippet in find_nested_links(body):
        findings.append(Finding("nested", source, "",
                                snippet[:200].replace("\n", " ")))

    has_related = bool(RELATED_RE.search(text))
    return counts, findings, has_related


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument(
        "--fail-on-related",
        action="store_true",
        help="Treat legacy related: blocks as errors instead of warnings.",
    )
    args = parser.parse_args()
    repo = args.repo.resolve()

    findings: list[Finding] = []
    related_files: list[str] = []
    total_links = 0
    files = source_files(repo)

    for path in files:
        counts, file_findings, has_related = inspect_file(repo, path)
        total_links += sum(counts.values())
        findings.extend(file_findings)
        if has_related:
            related_files.append(str(path.relative_to(repo)))

    errors = [finding for finding in findings if finding.kind in {"duplicate", "missing", "nested", "unpublished"}]
    if args.fail_on_related:
        errors.extend(
            Finding("related", source, "", "legacy related: block found")
            for source in related_files
        )

    print("FactsLedger contextual interlink audit")
    print(f"content_files_scanned={len(files)}")
    print(f"internal_links_scanned={total_links}")
    print(f"duplicate_target_errors={sum(f.kind == 'duplicate' for f in findings)}")
    print(f"missing_target_errors={sum(f.kind == 'missing' for f in findings)}")
    print(f"unpublished_target_errors={sum(f.kind == 'unpublished' for f in findings)}")
    print(f"nested_link_errors={sum(f.kind == 'nested' for f in findings)}")
    print(f"legacy_related_blocks={len(related_files)}")

    if findings:
        print("\nFindings:")
        for finding in findings:
            label = finding.kind.upper()
            suffix = f" — {finding.detail}" if finding.detail else ""
            print(f"{label}\t{finding.source}\t{finding.target}{suffix}")

    if related_files:
        print("\nWarnings: legacy related: blocks are present in:")
        for source in related_files:
            print(f"  - {source}")
        if not args.fail_on_related:
            print("Use --fail-on-related to enforce the contextual-only migration rule.")

    if errors:
        print(f"\nFAILED: {len(errors)} policy violation(s) found.", file=sys.stderr)
        return 1

    print("\nPASSED: no duplicate, missing, unpublished, or nested internal content targets found.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
