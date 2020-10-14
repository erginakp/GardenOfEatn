const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
// eslint-disable-next-line arrow-parens
  .forEach(image => {
    sharp(`${target}/${image}`)
    .resize(1000)
  .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
    .slice(0, -1)
    .join('.')}_large.jpg`));

    sharp(`${target}/${image}`)
    .resize(480)
  .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
    .slice(0, -1)
    .join('.')}_small.jpg`));
  });
