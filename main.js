let countDownTime = new Date("Mar 10, 2024 00:00:00").getTime();
  setInterval(function(){
  let nowTime = new Date().getTime();
  let calculatedRamadanTime = countDownTime - nowTime;

  let days = Math.floor(calculatedRamadanTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor(calculatedRamadanTime % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor(calculatedRamadanTime % ((1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor(calculatedRamadanTime % ((1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

}, 1000);

// Arrow function

// setInterval(() => {
//   let now = new Date().getTime();
//   let distance = countDownDate - now;

//   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor(distance % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor(distance % ((1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor(distance % ((1000 * 60)) / 1000);

//   document.getElementById("days").innerHTML = days;
//   document.getElementById("hours").innerHTML = hours;
//   document.getElementById("minutes").innerHTML = minutes;
//   document.getElementById("seconds").innerHTML = seconds;

// }, 1000);