import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exports the portfolio under the repository base path", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /QA Engineer Portfolio/);
  assert.match(html, /\/portfolio\/_next\//);
  assert.match(html, /\/portfolio\/pabi-service-demo\.mp4/);
  assert.match(html, /Email:<\/span> tnsduq1324@naver\.com/);
});
