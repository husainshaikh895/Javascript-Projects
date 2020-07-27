class Snake {
  constructor() {
    this.x = 40;
    this.y = 40;
    this.xspeed = 1;
    this.yspeed = 0;
    this.score = 0;
    this.total = 0;
    this.tail = [];

    this.dir = function (x, y) {
      this.xspeed = x;
      this.yspeed = y;
    };

    this.death = function () {
      if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) {
        this.total = 0;
        this.tail = [];
        this.x = 40;
        this.y = 40;
        this.xspeed = 1;
        this.yspeed = 0;
        this.score = 0;
        goMusic.play();
      }
    };

    this.update = function () {
      // increasing length
      if (this.total == this.tail.length) {
        for (let i = 0; i < this.tail.length; i++) {
          this.tail[i] = this.tail[i + 1];
        }
        this.death();
      }

      this.tail[this.total - 1] = createVector(this.x, this.y);

      // moving snake
      this.x = this.x + this.xspeed * scl;
      this.y = this.y + this.yspeed * scl;
      //constraining within boundaries
      // this.x = constrain(this.x, 0, width - scl);
      // this.y = constrain(this.y, 0, height - scl);
      // console.log(this.tail);
    };

    this.eat = function (pos) {
      if (dist(this.x, this.y, pos.x, pos.y) < 1) {
        this.score++;
        this.total++;
        song.play();
        return true;
      }
      return false;
    };
    this.show = function () {
      for (let i = 0; i < this.tail.length; i++) {
        fill(255);
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
      }
      fill(255);
      rect(this.x, this.y, scl, scl);
    };
  }
}
