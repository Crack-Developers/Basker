const fs = require("fs");
const path = require("path");
const convert = require("heic-convert");

async function run() {
  const inputDir = path.join(__dirname, "images");
  const outputDir = path.join(__dirname, "images", "converted");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const files = fs.readdirSync(inputDir).filter(f => f.toLowerCase().endsWith(".heic"));
  console.log(`Found ${files.length} HEIC files to convert.`);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const outName = file.replace(/\.heic$/i, ".jpg");
    const outPath = path.join(outputDir, outName);
    if (fs.existsSync(outPath)) {
      console.log(`[${i+1}/${files.length}] Already exists: ${outName}`);
      continue;
    }
    const inPath = path.join(inputDir, file);
    try {
      const inputBuffer = fs.readFileSync(inPath);
      const outputBuffer = await convert({
        buffer: inputBuffer,
        format: "JPEG",
        quality: 0.88
      });
      fs.writeFileSync(outPath, Buffer.from(outputBuffer));
      console.log(`[${i+1}/${files.length}] Converted: ${file} -> ${outName} (${(outputBuffer.length/1024).toFixed(0)} KB)`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err.message);
    }
  }
  console.log("All conversions complete!");
}

run();
