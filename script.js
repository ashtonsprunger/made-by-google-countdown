let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");

var countDownDate = new Date("Dec 25, 2020 00:00:00").getTime();

let myfunc = setInterval(function () {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  updateDom({
    days,
    hours,
    minutes,
    seconds,
    timeleft,
  });
}, 1000);

function updateDom(time) {
  // if(time.hours!=0){
  //     time.hours-=1;
  // }else{
  //     time.hours=23;
  // }
  daysElement.innerHTML = time.days;
  hoursElement.innerHTML = time.hours;
  minutesElement.innerHTML = time.minutes;
  secondsElement.innerHTML = time.seconds;
  if (time.timeleft < 0) {
    let h1 = document.createElement("h1");
    h1.innerHTML = "IT'S CHRISTMAS!!";
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").appendChild(h1);
  }
}
