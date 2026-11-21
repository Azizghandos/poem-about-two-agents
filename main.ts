// A poem about agency — two agents agreeing on one plan: the power
// to choose and act together, one choosing the turn, the other keeping it.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const text =
  "We drew the map with two hands —\n" +
  "yours on the stars, mine on the wheel.\n" +
  "I chose the turn. You kept it.\n" +
  "Somewhere ahead, the road agreed.";

// The entry must be 1–280 characters. Count in Unicode code points
// (not UTF-16 code units or bytes) so multi-byte characters like the
// em dash count once, and refuse to write an invalid entry.
const length = [...text].length;
if (length < 1 || length > 280) {
  throw new Error(
    `entry must be 1–280 characters, got ${length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
