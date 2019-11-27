const body = document.querySelector("body");
const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const backImage = new Image();
  backImage.src = `images/${imgNumber}.jpg`;
  backImage.classList.add("bgImage");
  body.appendChild(backImage);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER + 1);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
