const fs = require('fs');
const files = fs.readdirSync('public/images');
console.log('Total images:', files.length);
console.log('Images list:', files);

