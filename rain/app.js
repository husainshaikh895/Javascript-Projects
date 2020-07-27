let drops = [];
let song;
let w = window.innerWidth;
let h = window.innerHeight;

function preload() {
  song = loadSound("audio/rain.mp3");
}

function setup() {
  song.setVolume(0.1);
  song.loop(true);
  song.play();
  createCanvas(w, h);
  for (let i = 0; i < w / 2; i++) {
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
function touchStarted() {
  if (getAudioContext().state !== "running") {
    getAudioContext().resume();
  }
}
