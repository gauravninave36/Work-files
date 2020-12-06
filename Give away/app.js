const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
//month and weekdays are of the zero index 
let futureDate = new Date(2021, 0, 22, 11, 30, 0);
console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekDay = weekdays[futureDate.getDay()];
giveaway.textContent = `this giveaway ends on ${weekDay} ${year} ${hours}:${minutes}am`;
//future time in ms
const futureTime = futureDate.getTime();

function getRemainingtime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  //1s=1000ms
  //1m=60s
  //1hr=60min
  //1d=24hr

  //values in ms 
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  //calculate all values 
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor(((t % oneHour) / oneMinute));
  let secs = Math.floor((t % oneMinute) / 1000);
  //SET VALUES ARRAY
  const values = [days, hours, minutes, secs];

  items.forEach(function (item, index) {
    item.textContent = values[index];
  })
  if (t < 0) {
    clearInterval(countdown);
    deadline.textContent = `<h4>This giveaway is already over.</h4>`;
  }

}
//countdown
let countdown = setInterval(getRemainingtime, 800)
getRemainingtime()
