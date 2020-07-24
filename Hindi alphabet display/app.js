const alphabets = [
  "आ",
  "ई",
  "ऊ",
  "ऋ",
  "ॠ",
  "ऌ",
  "ॡ",
  "ऐ",
  "औ",
  "अं",
  "अँ",
  "क",
  "ख",
  "ग",
  "घ",
  "ङ",
  "च",
  "छ",
  "ज",
  "झ",
  "ञ",
  "ट",
  "ठ",
  "ड",
  "ढ",
  "ण",
  "त",
  "थ",
  "द",
  "ध",
  "न",
  "प",
  "फ",
  "ब",
  "भ",
  "य",
  "र",
  "व",
  "ळ",
  "श",
  "ष",
  "स",
  "ह",
  "०",
  "१",
  "२",
  "३",
  "४",
  "५",
  "६",
  "७",
  "८",
  "९",
];
var toChange = 15;
//number of elements to change at a time
var changeIndex = [];
// store random indexes
var showEl = 49;
// elements to show
const main = document.querySelector(".main");

function alphabetPicker() {
  return Math.floor(Math.random() * showEl);
}

function changeIndexFiller() {
  for (let i = 0; i < toChange; i++) {
    changeIndex[i] = alphabetPicker();
  }
}

// animation
function applyAnimation() {
  for (let i = 0; i < showEl; i++) {
    let id = `${i}`;
    let element = document.getElementById(id);
    element.style.animationName = "blink";
    let delay = Math.random() * 3;
    let duration = Math.random() * 3;
    if (duration < 0.5) {
      duration = 1;
    }
    element.style.animationDelay = `${delay}s`;
    element.style.animationDuration = `${duration}s`;
    element.style.animationTimingFunction = "ease";
    element.style.animationIterationCount = "infinite";
  }
}

const changeAlphabet = function () {
  changeIndexFiller();

  for (let i = 0; i < toChange; i++) {
    let id = changeIndex[i];
    let alpha = Math.floor(Math.random() * alphabets.length);
    let element = document.getElementById(`${id}`);
    element.innerHTML = alphabets[alpha];
  }
};

// initialise
for (let i = 0; i < showEl; i++) {
  let element = document.createElement("a");
  element.setAttribute("id", i);
  element.setAttribute("class", "grid-item");
  element.innerHTML = alphabets[i];
  main.appendChild(element);
}
// apply blinking animation
applyAnimation();

setInterval(changeAlphabet, 500);

var mq = window.matchMedia("(max-width: 600px)");
if (mq.matches) {
  // window width is at less than px
  main.style.fontSize = "1.5em";
} else {
  // window width is greater than px
  main.style.fontSize = "4em";
}
