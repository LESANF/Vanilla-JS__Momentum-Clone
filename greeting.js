const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING = "showing";

function paintGreetings(text) {
  form.classList.remove(SHOWING);
  greeting.classList.add(SHOWING);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
  } else {
    paintGreetings(currentUser);
  }
}

function init() {
  loadName();
}
init();
