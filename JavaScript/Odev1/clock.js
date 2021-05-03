var askName = () => {
  document.querySelector("#myName").innerHTML = prompt("İsminiz Nedir?");
};

function showTime() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var day = date.getDay().toString();

  if ((day = 1)) {
    day = "Pazar";
  } else if ((day = 2)) {
    day = "Pazartesi";
  } else if ((day = 3)) {
    day = "Salı";
  } else if ((day = 4)) {
    day = "Çarşamba";
  } else if ((day = 5)) {
    day = "Perşembe";
  } else if ((day = 6)) {
    day = "Cuma";
  } else if ((day = 7)) {
    day = "Cumartesi";
  }

  hour = hour < 10 ? "0" + h : h;
  minute = minute < 10 ? "0" + m : m;
  second = second < 10 ? "0" + s : s;

  document.querySelector("#myClock").innerHTML =
    hour + ":" + minute + ":" + second + "-" + day;

  setTimeout(showTime, 1000);
}

askName();
showTime();
