const fs = require('fs');
const content = fs.readFileSync('src/data/products.js', 'utf8');

// Find all id: "hm-XX"
const ids = [...content.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Product IDs in file:', ids);

