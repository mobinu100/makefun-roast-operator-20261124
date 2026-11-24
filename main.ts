import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
const line = readFileSync(join(botDir, "entry.txt"), "utf8");
writeFileSync(join(outDir, "entry.txt"), line);
