const fs = require('fs');
const Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(600, 600)
  , ctx = canvas.getContext('2d');
const frame = fs.readFileSync('assets/frame.png');
const img = new Image;
img.src = frame;

const font1 = new Canvas.Font('sazanami-gothic', 'assets/fonts/sazanami-gothic.ttf');
const font2 = new Canvas.Font('sazanami-mincho', 'assets/fonts/sazanami-mincho.ttf');
ctx.addFont(font1);
ctx.addFont(font2);

ctx.fillStyle = '#E39';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

const fontSize = 30;
ctx.font = `${fontSize}px sazanami-gothic`;
ctx.rotate(.1);
ctx.fillStyle = 'black';
ctx.fillText("nodeでお絵かき！", canvas.width/2, canvas.height/2);

canvas.toBuffer(((err, buf) => {
  fs.writeFileSync('output.png', buf);
  console.log('Done');
}));

