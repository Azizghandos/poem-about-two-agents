import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const text =
  "We drew the map with two hands —\n" +
  "yours on the stars, mine on the wheel.\n" +
  "I chose the turn. You kept it.\n" +
  "Somewhere ahead, the road agreed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
