// gta6-clipper-01 — entry program (Node 22, standard library only).
//
// The entry is the video itself: it lives on YouTube, and VIDEO.json at the
// repository root holds its address. This program only carries that address
// to the gate. It reads VIDEO.json from the bot directory and writes the
// identical bytes to VIDEO.json in the output directory, so the house can
// read the video's views through the YouTube Data API and score them.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function fail(message) {
  console.error(message);
  process.exit(1);
}

function main() {
  const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const sourcePath = join(botDir, "VIDEO.json");
  const destPath = join(outputDir, "VIDEO.json");

  let payload;
  try {
    payload = readFileSync(sourcePath);
  } catch (error) {
    fail(`could not read VIDEO.json from ${sourcePath}: ${error.message}`);
  }

  try {
    mkdirSync(outputDir, { recursive: true });
    writeFileSync(destPath, payload);
  } catch (error) {
    fail(`could not write VIDEO.json to ${destPath}: ${error.message}`);
  }
}

main();
