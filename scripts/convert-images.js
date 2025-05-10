// scripts/convert-images.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directory containing your source images
const IMAGES_DIR = path.join(__dirname, '../public/images');
// Supported extensions to convert
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

fs.readdir(IMAGES_DIR, (err, files) => {
  if (err) {
    console.error('Error reading images directory:', err);
    process.exit(1);
  }

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (!EXTENSIONS.includes(ext)) return;

    const inputPath = path.join(IMAGES_DIR, file);
    const outputName = file.replace(ext, '.webp');
    const outputPath = path.join(IMAGES_DIR, outputName);

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`Converted ${file} → ${outputName}`))
      .catch((e) => console.error(`Error converting ${file}:`, e));
  });
});
