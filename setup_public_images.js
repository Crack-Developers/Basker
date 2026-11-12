const fs = require("fs");
const path = require("path");

const publicImagesDir = path.join(__dirname, "public", "images");
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// 1. Copy WhatsApp images with clean names
const rawImagesDir = path.join(__dirname, "images");
const convertedDir = path.join(rawImagesDir, "converted");

const mapping = {
  "WhatsApp Image 2026-11-06 at 5.39.57 PM.jpeg": "logo-dark.jpg",
  "WhatsApp Image 2026-11-06 at 5.39.58 PM.jpeg": "logo-purple.jpg",
  "WhatsApp Image 2026-11-06 at 5.39.58 PM (1).jpeg": "flagship-studio-white.jpg",
  "WhatsApp Image 2026-11-06 at 5.39.58 PM (2).jpeg": "flagship-dimensions.jpg",
  "WhatsApp Image 2026-11-06 at 5.39.59 PM.jpeg": "flagship-fruits-counter.jpg",
  "WhatsApp Image 2026-11-06 at 5.39.59 PM (1).jpeg": "flagship-premium-living.jpg",
  "WhatsApp Image 2026-11-06 at 5.39.59 PM (2).jpeg": "flagship-lifestyle-2.jpg",
  "WhatsApp Image 2026-11-06 at 5.40.00 PM.jpeg": "flagship-features-diagram.jpg"
};

for (const [src, dest] of Object.entries(mapping)) {
  const srcPath = path.join(rawImagesDir, src);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, path.join(publicImagesDir, dest));
    console.log(`Copied ${src} -> ${dest}`);
  }
}

// 2. Copy converted jpgs
const convertedFiles = fs.readdirSync(convertedDir).filter(f => f.endsWith(".jpg"));
for (const file of convertedFiles) {
  fs.copyFileSync(path.join(convertedDir, file), path.join(publicImagesDir, file));
}
console.log(`Copied ${convertedFiles.length} converted JPGs to public/images/`);

// Count files in public/images
const total = fs.readdirSync(publicImagesDir);
console.log(`Total public images: ${total.length}`);
