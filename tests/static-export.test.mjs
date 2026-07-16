import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exports the portfolio under the repository base path", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /QA Engineer Portfolio/);
  assert.match(html, /\/portfolio\/_next\//);
  assert.match(html, /\/portfolio\/pabi-service-demo\.mp4/);
  assert.match(html, /Email:<\/span> tnsduq1324@naver\.com/);
  assert.match(html, /NEXT STORY/);
  assert.match(html, /맥데이타/);
  assert.match(html, /큐아이엠/);
  assert.match(html, /약 4,000건/);
});

test("keeps the revised contact palette and removes the experience divider", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.experience \+ \.skills \{ border-top: 0; \}/);
  assert.match(css, /\.contact \{ background: #ebe6dc;/);
});
