import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');

async function optimizeImages() {
  try {
    const files = fs.readdirSync(PUBLIC_DIR);
    const jpegFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ext === '.jpeg' || ext === '.jpg';
    });

    console.log(`Found ${jpegFiles.length} JPEG files to optimize.`);
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;

    for (const file of jpegFiles) {
      const inputPath = path.join(PUBLIC_DIR, file);
      const outputName = path.basename(file, path.extname(file)) + '.webp';
      const outputPath = path.join(PUBLIC_DIR, outputName);

      const originalStats = fs.statSync(inputPath);
      totalOriginalSize += originalStats.size;

      // Convert to WebP with 80% quality (excellent quality vs size tradeoff)
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      const optimizedStats = fs.statSync(outputPath);
      totalOptimizedSize += optimizedStats.size;

      const reduction = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
      console.log(`Optimized ${file} -> ${outputName}: ${(originalStats.size / 1024).toFixed(1)} KB to ${(optimizedStats.size / 1024).toFixed(1)} KB (Reduced by ${reduction}%)`);
    }

    const totalReduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
    console.log('\n--- Optimization Summary ---');
    console.log(`Total Original Size: ${(totalOriginalSize / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Total Optimized Size: ${(totalOptimizedSize / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Overall Savings: ${totalReduction}%`);

  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
