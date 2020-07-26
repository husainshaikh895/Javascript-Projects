let drops = [];

function setup() {
  createCanvas(1450, 800);
  for (let i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  for (let drop of drops) {
    drop.fall();
    drop.show();
  }
}
