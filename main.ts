import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });

const raw = readFileSync(join(botDir, "entry.txt"), "utf8");
const line = raw.replace(/\r\n/g, "\n").trimEnd();
if (line.length === 0) {
  throw new Error("entry.txt is empty");
}
if (line.length > 140) {
  throw new Error(`entry is ${line.length} chars, over the 140-char limit`);
}
writeFileSync(join(outDir, "entry.txt"), line);
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== line) {
  throw new Error("round-trip check failed: written entry does not match entry.txt");
}
