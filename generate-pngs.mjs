import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgPath = path.resolve('public/icon-512.svg');
const svgBuffer = fs.readFileSync(svgPath);

async function generatePngs() {
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.resolve('public/icon-512.png'));

  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.resolve('public/icon-192.png'));

  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.resolve('public/apple-touch-icon.png'));

  await sharp(svgBuffer)
    .resize(64, 64)
    .png()
    .toFile(path.resolve('public/favicon.png'));

  console.log('PNG icons created successfully!');
}

generatePngs();
