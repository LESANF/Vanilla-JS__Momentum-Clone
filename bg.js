const body = document.querySelector("body");
const IMG_NUMBER = 5;

function paintImage(imgNumber) {}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
