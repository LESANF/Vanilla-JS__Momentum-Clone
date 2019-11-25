const COORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // 객체의 변수이름과 객체의 key의 이름을 같게 저장할때는
    // latitude = latitude는 아래와 같이 작성가능 (longitude)도 동일.
    latitude,
    longitude
  };
  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log("Cant access geolocation");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    //   getWeather
  }
}

function init() {
  loadCoords();
}

init();
