"""Regression cases for published-to-draft links, without external dependencies."""
import importlib.util
from pathlib import Path
import sys
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('interlinks', Path(__file__).with_name('check-interlinks.py'))
interlinks = importlib.util.module_from_spec(spec)
sys.modules[spec.name] = interlinks
spec.loader.exec_module(interlinks)


class PublishedTargets(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        self.content = self.root / 'src/content/organizations'
        self.content.mkdir(parents=True)

    def tearDown(self):
        self.tmp.cleanup()

    def write(self, slug, content):
        target = self.content / f'{slug}.md'
        target.write_text(content, encoding='utf8')
        return target

    def findings(self, source):
        return interlinks.inspect_file(self.root, source)[1]

    def test_published_link_to_draft_is_an_error(self):
        source = self.write('source', '---\ndraft: false\n---\n[Target](/organizations/target/)')
        self.write('target', '---\ndraft: true # research pending\n---\nUnpublished')
        self.assertEqual([f.kind for f in self.findings(source)], ['unpublished'])

    def test_published_target_is_allowed(self):
        source = self.write('source', '---\ndraft: false\n---\n[Target](/organizations/target/)')
        self.write('target', '---\ndraft: false\n---\nPublished')
        self.assertEqual(self.findings(source), [])

    def test_drafts_are_not_audited_as_published_sources(self):
        source = self.write('source', '---\ndraft: true\n---\n[Missing](/organizations/missing/)')
        self.assertEqual(self.findings(source), [])

    def test_templates_are_not_publishable_targets(self):
        source = self.write('source', '---\ndraft: false\n---\n[Template](/organizations/_TEMPLATE/)')
        self.write('_TEMPLATE', '---\ndraft: false\n---\nTemplate')
        self.assertEqual([f.kind for f in self.findings(source)], ['unpublished'])


if __name__ == '__main__':
    unittest.main()
