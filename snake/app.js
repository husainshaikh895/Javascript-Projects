var snake;
let song;
let goMusic;
var scl = 20;
var food;
var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
  song = loadSound("audio/jump.mp3");
  goMusic = loadSound("audio/game_over.mp3");
  song.setVolume(0.5);
  goMusic.setVolume(0.3);
  createCanvas(w, h);
  snake = new Snake();
  frameRate(10);
  pickLocation();
}

function draw() {
  background(20);
  // draw borders
  stroke(255);
  strokeWeight(5);
  line(0, 0, 0, w);
  line(0, 0, w, 0);
  line(0, h, w, h);
  line(w, h, w, 0);

  // draw food
  stroke(0);
  strokeWeight(1);
  fill(255, 0, 100);
  rect(food.x, food.y, 20, 20);
  // draw snake
  snake.update();
  snake.show();
  // random food location
  if (snake.eat(food)) {
    pickLocation();
  }
  // show score
  textSize(20);
  fill(255);
  let score = "Score: " + snake.score;
  text(score, w - 120, 50);
}

function pickLocation() {
  let cols = floor(w / scl);
  let rows = floor(h / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function keyPressed() {
  // The keyPressed() function is called once every time a key is pressed. The keyCode for the key that was pressed is stored in the keyCode variable.
  if (keyCode === UP_ARROW) {
    if (snake.xspeed == 0 && snake.yspeed == 1 && snake.total > 0) {
    } else {
      snake.dir(0, -1);
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (snake.xspeed == -1 && snake.yspeed == 0 && snake.total > 0) {
    } else {
      snake.dir(1, 0);
    }
  } else if (keyCode === LEFT_ARROW) {
    if (snake.xspeed == 1 && snake.yspeed == 0 && snake.total > 0) {
    } else {
      snake.dir(-1, 0);
    }
  } else if (keyCode === DOWN_ARROW) {
    if (snake.xspeed == 0 && snake.yspeed == -1 && snake.total > 0) {
    } else {
      snake.dir(0, 1);
    }
  }
}
