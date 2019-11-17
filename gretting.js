const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  gretting = document.querySelector(".js-grettings");

const USER_LS = "currentUser",
  SHOWING = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGrettings(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING);
  form.addEventListener("submit", handleSubmit);
}

function paintGrettings(text) {
  form.classList.remove(SHOWING);
  gretting.classList.add(SHOWING);
  gretting.innerText = `Bye ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGrettings(currentUser);
  }
}

function init() {
  loadName();
}
init();
