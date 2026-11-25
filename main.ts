import { mkdirSync, writeFileSync } from "node:fs";

// One original dad joke, written to /output/entry.txt.
const JOKE =
  "I asked the vacuum for space \u2014 it said it sucks at boundaries.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
