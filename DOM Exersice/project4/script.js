// Variables for buttons
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');
const timerDisplay = document.getElementById('timer');

// Time Values
let seconds = 0;
let minutes = 0;
let hours = 0;

let timerInterval = null;
let timerStatus = 'stopped';

// Update time with leading zeros
function updateLeadingTime() {
  const leadingSeconds = seconds.toString().padStart(2, "0");
  const leadingMinutes = minutes.toString().padStart(2, "0");
  const leadingHours = hours.toString().padStart(2, "0");

  timerDisplay.innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

// Stopwatch function
function stopWatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  updateLeadingTime();
}

// Start/Stop Button
startStopBtn.addEventListener('click', function () {
  if (timerStatus === 'stopped') {
    timerInterval = window.setInterval(stopWatch, 1000);
    startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = 'stopped';
  }
});

// Reset Button
resetBtn.addEventListener('click', function () {
  window.clearInterval(timerInterval);
  timerInterval = null;
  seconds = 0;
  minutes = 0;
  hours = 0;

  timerDisplay.innerText = "00:00:00";
  startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
  timerStatus = 'stopped';
});
