import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "My daughter pointed at the empty chair and whispered, 'The man in the corner says you only have three days left,' and when I touched the seat, it was still warm.";

// The gate allows 1-200 characters; refuse to write an over-long line.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line is ${line.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
