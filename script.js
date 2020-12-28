let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");
let audio = document.getElementById("canon");
let button = document.getElementById("play");
var link = document.querySelector("link[rel~='icon']");
let occasionEl = document.getElementById("occasion");

//! VARIABLES TO CHANGE

// icon at the top of the page
let icon = "https://www.freeiconspng.com/uploads/red-fireworks-png-26.png";

// appears on the screen after the times
let occasion = "UNTIL 2021";

// when to count down to
let date = "Jan 1, 2021 00:00:00";

// color of the numbers counting down
let numColor = "blue";

// color of the words, 'IT IS CURRENTLY' and occasion
let wordsColor = "red";

// color of the words, 'DAYS', 'HOURS' ECT.
let hoursColor = "white";

// what music to play
let music = "./canon-in-d.mp3";

// background image
let backgroundImage =
  "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80";

// border radius
let borderRadius = 40;

//! END OF TO CHANGE

link.href = icon;
occasionEl.innerHTML = occasion;
occasionEl.style.color = wordsColor;
var countDownDate = new Date(date).getTime();
days.style.color = numColor;
hours.style.color = numColor;
minutes.style.color = numColor;
seconds.style.color = numColor;
document.getElementById("itis").style.color = wordsColor;
document.getElementsByClassName("main")[0].style.color = hoursColor;
document.getElementsByClassName(
  "main"
)[0].style.borderRadius = `${borderRadius}px`;
audio.href = music;
document.getElementsByClassName(
  "wrapper"
)[0].style.backgroundImage = `url('${backgroundImage}')`;

button.addEventListener("click", () => {
  audio.play();
  button.style.display = "none";
});

let main = function () {
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
};

let myfunc = setInterval(main, 1000);

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
    h1.innerHTML = "MERRY CHRISTMAS!!";
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").appendChild(h1);
  }
}

main();
