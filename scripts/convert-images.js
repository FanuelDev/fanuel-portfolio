import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join, basename, extname } from 'path';

const inputDir = 'src/assets/images';

const files = readdirSync(inputDir).filter(f => /\.(jpg|jpeg|JPG|JPEG)$/.test(f));

for (const file of files) {
  const inputPath = join(inputDir, file);
  const outputName = basename(file, extname(file)) + '.webp';
  const outputPath = join(inputDir, outputName);

  await sharp(inputPath)
    .webp({ quality: 85, effort: 6 })
    .toFile(outputPath);

  console.log(`✓ ${file} → ${outputName}`);
}

console.log(`\nDone: ${files.length} images converted.`);
