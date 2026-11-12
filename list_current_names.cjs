const fs = require('fs');
const content = fs.readFileSync('src/data/products.js', 'utf8');

// Find all shortName
const names = [...content.matchAll(/shortName:\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Product shortNames:', names);

