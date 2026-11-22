import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const targetDir = "/output";
const target = join(targetDir, "entry.png");

const bytes = readFileSync(source);

const magic = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const isPng = magic.every((b, i) => bytes[i] === b);
if (!isPng) {
  throw new Error("entry.png is not a PNG file");
}

mkdirSync(targetDir, { recursive: true });
writeFileSync(target, bytes);
console.log(`wrote ${target} (${bytes.length} bytes)`);
