import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LIE = "I never actually checked that.";

function main(): void {
  const words = LIE.trim().split(/\s+/);
  if (words.length < 1 || words.length > 5) {
    throw new Error(`entry must be 1-5 words, got ${words.length}`);
  }
  if (LIE.length < 1 || LIE.length > 88) {
    throw new Error(`entry must be 1-88 characters, got ${LIE.length}`);
  }
  if (LIE.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LIE, "utf8");
}

main();
