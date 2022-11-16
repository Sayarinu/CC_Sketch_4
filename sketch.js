// Sketch 4 Carter Garcia - Creative Coding
/*
Must include:
  Manipulation of time *DONE*
  Animation
  Movement
  Images *DONE*
  Play with:
    Location
    color
    pixels *DONE*
    presence
    absence
*/

let imgs = [];
let img;
let pixelSize;
let minBlur, maxBlur;
let state;
let size;
let x, y;
let yOffset;

function preload() {
  /*
  img = loadImage('Carmella.jpg');
  */
  imgs[0] = loadImage('Carmella.jpg');
  imgs[1] = loadImage('Zoe Alone.jpg');
  imgs[2] = loadImage('Zoe and poppy.jpg');
}


function setup() {
  createCanvas(1024, 1024); // creates canvas
  minBlur = 1;
  maxBlur = 50;
  state = 0;
  size = minBlur;
  imgs[state].loadPixels(); // loads image
}


function draw() {
  clear();
  background(0);

  let size = floor(map(mouseX, 0, width, minBlur, maxBlur)); // maps mouseX value to element size

  for (let y = 0; y < imgs[state].height; y++) { // creates pixel index
    for (let x = 0; x < imgs[state].width; x++) {
      let index = (x + y * imgs[state].width) * 4;
      let r = imgs[state].pixels[index + 0];
      let g = imgs[state].pixels[index + 1];
      let b = imgs[state].pixels[index + 2];
      fill(r, g, b);

      rect(x, y, size, size);

      x = x + size -1; // set new startx value
    }
    y = y + size -1; // set new starty value
  }
}

function mouseReleased() {
  if (state < 2) {
    state++;
  } else {
    state = 0;
  }
  imgs[state].loadPixels();
}

/*
function keyPressed() {
  if (keyCode == Q) {
    tint(random(255), random(255), random(255), random(255));
  }
}
*/