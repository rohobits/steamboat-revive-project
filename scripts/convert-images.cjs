// scripts/convert-images.cjs

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directory containing your source images (relative to project root)
const IMAGES_DIR = path.join(process.cwd(), 'public/images');
// File extensions to convert
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

// Read all files in the images directory and convert matching extensions to .webp
fs.readdirSync(IMAGES_DIR).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  if (!EXTENSIONS.includes(ext)) return;

  const inputPath = path.join(IMAGES_DIR, file);
  const outputName = file.replace(ext, '.webp');
  const outputPath = path.join(IMAGES_DIR, outputName);

  sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => console.log(`Converted ${file} → ${outputName}`))
    .catch((err) => console.error(`Error converting ${file}:`, err));
});
