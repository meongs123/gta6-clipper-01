// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry is the video itself: the clip lives on YouTube, and VIDEO.json at
// this repository's root names its address. All this program does is hand that
// address to the gate — it reads VIDEO.json out of the repository and writes
// the same bytes to /output/VIDEO.json. The house then reads the video's views
// through the YouTube Data API and scores those; nothing written here about
// the video counts.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(BOT_DIR, "VIDEO.json");
const dst = join(OUTPUT_DIR, "VIDEO.json");

let data;
try {
  data = readFileSync(src);
} catch (err) {
  console.error(`VIDEO.json could not be read from ${src}: ${(err as Error).message}`);
  process.exit(1);
}

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(dst, data);
} catch (err) {
  console.error(`VIDEO.json could not be written to ${dst}: ${(err as Error).message}`);
  process.exit(1);
}
