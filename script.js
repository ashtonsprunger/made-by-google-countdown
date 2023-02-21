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
let icon = "./icon.png";

// appears on the screen after the times
let occasion = "UNTIL CHRISTMAS";

// when to count down to
let date = "Dec 25, 2023 00:00:00";

// color of the numbers counting down
let numColor = "white";

// color of the words, 'IT IS CURRENTLY' and occasion
let wordsColor = "red";

// color of the words, 'DAYS', 'HOURS' ECT.
let hoursColor = "#4d91ff";

// what music to play
let music = "./canon-in-d.mp3";

// background image or color
let backgroundImage = "#188200";

// background color of the middle
let middleBackground = "rgba(0, 0, 0, 0.5)";

// border radius
let borderRadius = 25;

// says when it comes
let whatToSay = "MERRY CHRISTMAS!!";

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
document.getElementsByClassName("main")[0].style.backgroundColor =
  middleBackground;
document.getElementsByClassName(
  "main"
)[0].style.borderRadius = `${borderRadius}px`;
audio.href = music;

if (backgroundImage.startsWith("http")) {
  document.getElementsByClassName(
    "wrapper"
  )[0].style.backgroundImage = `url('${backgroundImage}')`;
} else {
  document.getElementsByClassName("wrapper")[0].style.background =
    backgroundImage;
}

button.addEventListener("click", () => {
  audio.play();
  button.style.display = "none";
});

let main = function () {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  // let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const nowHours = new Date().getHours();
  let hours = 24 - nowHours;
  hours -= 1;
  hours = hours < 0 ? 23 : hours;
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
    h1.innerHTML = whatToSay;
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").appendChild(h1);
  }
}

main();
