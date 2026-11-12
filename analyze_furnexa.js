const https = require("https");
https.get("https://furnexa.framer.website/", (res) => {
  let data = "";
  res.on("data", (chunk) => data += chunk);
  res.on("end", () => {
    const headings = data.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || [];
    console.log("=== HEADINGS ===");
    headings.forEach(h => console.log(h.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()));

    const ps = data.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
    console.log("=== PARAGRAPH EXCERPTS ===");
    const uniquePs = [...new Set(ps.map(p => p.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()))].filter(p => p.length > 15 && p.length < 200);
    uniquePs.slice(0, 35).forEach(p => console.log("- " + p));

    // Links & Nav
    const links = data.match(/<a[^>]*>([\s\S]*?)<\/a>/gi) || [];
    const linkTexts = [...new Set(links.map(l => l.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()))].filter(Boolean);
    console.log("=== NAV / BUTTONS ===");
    console.log(linkTexts.slice(0, 25).join(" | "));
  });
});
