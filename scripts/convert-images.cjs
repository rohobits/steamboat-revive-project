// scripts/convert-images.cjs

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Directory containing your source images (relative to project root)
const IMAGES_DIR = path.join(process.cwd(), 'public/images');
// File extensions to convert
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

for (const file of fs.readdirSync(IMAGES_DIR)) {
  const ext = path.extname(file).toLowerCase();
  if (!EXTENSIONS.includes(ext)) continue;

  const inputPath = path.join(IMAGES_DIR, file);
  const outputName = file.replace(ext, '.webp');
  const outputPath = path.join(IMAGES_DIR, outputName);

  sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => console.log(`Converted ${file} → ${outputName}`))
    .catch((err) => console.error(`Error converting ${file}:`, err));
}
