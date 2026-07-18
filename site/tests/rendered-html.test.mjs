import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the independent product shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Build Week Product — OpenAI Build Week<\/title>/i);
  assert.match(html, /One product\./);
  assert.match(html, /Run the included case\./);
  assert.match(html, /Product-specific input/);
  assert.match(html, /Built with Codex and GPT-5\.6/);
});

test("does not expose a portfolio index", async () => {
  const response = await render();
  const html = await response.text();
  assert.doesNotMatch(html, /all products|portfolio|other demos/i);
});
