"use strict";

const { performance } = require("perf_hooks");
const { tokenize } = require("../dist/tokenizer");
const { defaultTokenAdapter } = require("../dist/token-adapter");

const MIN_RUNS = 5;
const MAX_RUNS = 100;
const TIME_BUDGET_MS = 2000;

function buildHtml(repeatCount) {
  const row = `
    <li class="item" data-id="{{id}}" data-active="true">
      <a href="/items/{{id}}" title="Item {{id}}">
        <span class="label">Item {{id}}</span>
      </a>
      <!-- comment for item {{id}} -->
      <input type="text" value="value-{{id}}" disabled />
    </li>`;

  const items = Array.from({ length: repeatCount }, (_, i) =>
    row.replace(/\{\{id\}\}/g, String(i))
  ).join("\n");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Benchmark</title>
    <style>
      .item { color: red; }
    </style>
  </head>
  <body>
    <ul id="list">
      ${items}
    </ul>
    <script>
      console.log("done");
    </script>
  </body>
</html>`;
}

const fixtures = [
  { name: "small (~1KB)", html: buildHtml(2) },
  { name: "medium (~10KB)", html: buildHtml(40) },
  { name: "large (~100KB)", html: buildHtml(120) },
];

function formatMs(ms) {
  return `${ms.toFixed(3)}ms`;
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)}KB`;
}

function runBenchmark({ name, html }) {
  const byteLength = Buffer.byteLength(html, "utf8");

  // Warm up until the JIT settles, capped so a pathologically slow run can't hang the script.
  const warmupDeadline = performance.now() + TIME_BUDGET_MS;
  for (let i = 0; i < MIN_RUNS && performance.now() < warmupDeadline; i++) {
    tokenize(html, defaultTokenAdapter);
  }

  const durations = [];
  const deadline = performance.now() + TIME_BUDGET_MS;
  while (
    durations.length < MAX_RUNS &&
    (durations.length < MIN_RUNS || performance.now() < deadline)
  ) {
    const start = performance.now();
    tokenize(html, defaultTokenAdapter);
    durations.push(performance.now() - start);
  }

  durations.sort((a, b) => a - b);
  const total = durations.reduce((sum, d) => sum + d, 0);
  const avg = total / durations.length;
  const min = durations[0];
  const max = durations[durations.length - 1];
  const p50 = durations[Math.floor(durations.length * 0.5)];
  const p95 = durations[Math.floor(durations.length * 0.95)];
  const throughputMBps = byteLength / 1024 / 1024 / (avg / 1000);

  console.log(
    `\n${name} — input size: ${formatBytes(byteLength)} (${
      durations.length
    } runs)`
  );
  console.log(
    `  avg: ${formatMs(avg)}  min: ${formatMs(min)}  max: ${formatMs(
      max
    )}  p50: ${formatMs(p50)}  p95: ${formatMs(p95)}`
  );
  console.log(`  throughput: ${throughputMBps.toFixed(2)} MB/s`);
}

console.log(
  `tokenize() benchmark — up to ${MAX_RUNS} runs per fixture (${TIME_BUDGET_MS}ms time budget each)`
);
fixtures.forEach(runBenchmark);
