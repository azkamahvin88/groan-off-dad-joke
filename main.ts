import { mkdirSync, writeFileSync } from "node:fs";

// The One-Liner Groan-Off — one original dad joke, written to /output/entry.txt.
// Node 22, stdlib only. Deterministic: same output on every run.
const JOKE =
  "I asked the vacuum for space \u2014 it said it sucks at boundaries.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
