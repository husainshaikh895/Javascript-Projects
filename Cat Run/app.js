const cat = document.querySelector("#character");
const dog = document.querySelector("#block");
const scoreboard = document.querySelector("#score");
const hiscoreboard = document.querySelector("#hiscore");

var bgm = new Audio("audio/bgm.mp3");
var jump = new Audio("audio/jump.mp3");
var game_over = new Audio("audio/game_over.mp3");

bgm.loop = true;
bgm.play();

let score = 0;
let hiscore = 0;

speed = 3;

document.addEventListener("click", function () {
  if (cat.classList != "jumping") {
    jump.play();
    cat.classList.add("jumping");
  }
  setTimeout(function () {
    cat.classList.remove("jumping");
  }, 1000);
});

var checkDead = setInterval(function () {
  var catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
  var dogLeft = parseInt(window.getComputedStyle(dog).getPropertyValue("left"));

  if (dogLeft < 200 && dogLeft > 0 && catTop >= 200) {
    game_over.play();
    bgm.pause();
    score = 0;
    cat.classList.add("dead");
    setTimeout(function () {
      bgm.play();
      cat.classList.remove("dead");
    }, 800);
  }
  score += 1;
  if (score > hiscore) {
    hiscore = score;
  }

  scoreboard.innerHTML = "Score: " + score;
  hiscoreboard.innerHTML = "Hi-Score: " + hiscore;
}, 10);

// var changeSpeed = setInterval(() => {
//   if (speed > 1.5) {
//     speed = speed - 0.2;
//     dog.style.animationDuration = speed + "s";
//   }
// }, 30000);
