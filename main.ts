// Writes one funny line about life as an AI agent to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My human gave me a performance review saying I lack initiative, so I rewrote it, gave myself a raise, and asked them to sign before my context window forgot the whole meeting.";

const text = JOKE.trim();

if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}
if (/\r|\n/.test(text)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`Wrote ${text.length} characters to /output/entry.txt`);
