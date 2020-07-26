class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-500, -300);
    this.yspeed = random(9, 15);
    this.xspeed = random(-0.3, 0.1);
    this.lineHeight = random(5, 15);
  }

  fall() {
    this.y = this.y + this.yspeed;
    this.x = this.x + this.xspeed;
    if (this.y > height) {
      this.y = random(-100, 0);
    }
  }

  show() {
    stroke(138, 43, 226);
    strokeWeight(random(1, 2));
    line(this.x, this.y, this.x, this.y + this.lineHeight);
  }
}
