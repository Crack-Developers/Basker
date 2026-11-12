const fs = require('fs');

let code = fs.readFileSync('src/data/products.js', 'utf8');

const priceMap = {
  'hm-01': [1299, 3299],
  'hm-02': [1499, 3499],
  'hm-03': [1199, 2899],
  'hm-04': [1099, 2499],
  'hm-05': [1699, 3899],
  'hm-06': [1399, 3199],
  'hm-07': [1249, 2799],
  'hm-08': [1899, 4299],
  'hm-09': [999, 2199],
  'hm-10': [1349, 2999],
  'hm-11': [1599, 3599],
  'hm-12': [1149, 2599],
  'hm-13': [1399, 3199],
  'hm-14': [1049, 2399],
  'hm-15': [1249, 2799],
  'hm-16': [1449, 3299]
};

for (const [id, [p, op]] of Object.entries(priceMap)) {
  const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?price:\\s*)\\d+([\\s\\S]*?originalPrice:\\s*)\\d+`);
  code = code.replace(regex, `$1${p}$2${op}`);
}

fs.writeFileSync('src/data/products.js', code, 'utf8');
console.log('Successfully updated prices in src/data/products.js');

