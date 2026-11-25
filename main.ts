// One Line, Big Laugh — one hilarious line, written to /output/entry.txt.
//
// The line: a smart fridge that treats the leftovers as its children and
// its owner as a tenant. One turn (custody), then a second turn (rent).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart fridge filed for custody of my leftovers and now charges me rent to open the door.";

const MAX_CHARS = 200;

function main(): void {
  const line = LINE.trim();
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("entry must be exactly one line");
  }
  if (line !== LINE) {
    throw new Error("entry must have no leading or trailing whitespace");
  }
  if (line.includes("  ") || !line.endsWith(".")) {
    throw new Error("entry must be one tight sentence with no double spaces");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
}

main();
