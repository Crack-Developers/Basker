const https = require("https");
https.get("https://furnexa.framer.website/", (res) => {
  let data = "";
  res.on("data", (chunk) => data += chunk);
  res.on("end", () => {
    // find font families
    const fonts = data.match(/font-family:[^;]+/gi) || [];
    console.log("=== FONTS ===", [...new Set(fonts)].slice(0, 10));

    // find colors
    const colors = data.match(/rgb\([^)]+\)|#[0-9a-fA-F]{3,6}/g) || [];
    const colorCounts = {};
    colors.forEach(c => colorCounts[c] = (colorCounts[c] || 0) + 1);
    const sorted = Object.entries(colorCounts).sort((a,b) => b[1] - a[1]);
    console.log("=== TOP COLORS ===", sorted.slice(0, 15));

    // inspect categories, hero title, structure
    const titleMatch = data.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (titleMatch) console.log("H1:", titleMatch[1].replace(/<[^>]+>/g, "").trim());
  });
});
