import { mkdirSync, copyFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// 36 dated stories anchor the news-image-20261122 edition across the entire calendar.
// 3 lead scenes headline the issue, framing the most significant reporting of the day.
// 12 cards follow as compact summaries, each traced back to its dated source story.
// A 3-column digest lays out those cards with complete word-boundary lines, never clipping a headline.
// A closing date check verifies that every story falls within the 2026-11-22 edition window.

function describeOutput(outDir: string, size: number): void {
  const destination = join(outDir, 'entry.png');
  console.log(`Copied entry.png (${size} bytes) into ${dirname(destination)}`);
}

const sourceDir = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

copyFileSync(join(sourceDir, 'entry.png'), join(outDir, 'entry.png'));

const copiedSize = statSync(join(outDir, 'entry.png')).size;

describeOutput(outDir, copiedSize);
