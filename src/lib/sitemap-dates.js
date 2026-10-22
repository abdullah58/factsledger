/** Read profile dates between complete YAML delimiter lines, never inside a URL. */
export function extractLastmod(text) {
  const head = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1] ?? '';
  const date = head.match(/^lastUpdated:[ \t]*["']?(\d{4}-\d{2}-\d{2})/m)
    ?? head.match(/^published:[ \t]*["']?(\d{4}-\d{2}-\d{2})/m);
  return date?.[1];
}
