const h1Element = document.querySelector(".head");
const buttonElement = document.querySelector(".add-btn");
const dateElement = document.getElementById("dob");
const timeHTML = document.getElementById("time");
const settingElement = document.querySelector(".image");
const imageContainerElement = document.querySelector(".image-container");
const fullScreenMode = document.querySelector(".fullscreen-btn");

let isVisible = false;
let years, months, days, hours, minutes, seconds;
let intervalId = null;

function toggleSettingVisibility() {
  imageContainerElement.classList.toggle("hide");
  isVisible = !isVisible;
}

settingElement.addEventListener("click", toggleSettingVisibility);

// Helper function to format time units
function formatTimeUnit(unit) {
  return unit.toString().padStart(2, "0");
}

// Event listener to load the date of birth from localStorage when the page loads
window.addEventListener("DOMContentLoaded", () => {
  const storedDOB = localStorage.getItem("dob");
  if (storedDOB) {
    dateElement.value = storedDOB;
    calculateTime();
  }
});

buttonElement.addEventListener("click", () => {
  imageContainerElement.classList.add("hide");
  const dobValue = dateElement.value;

  if (!dobValue || new Date(dobValue) > new Date()) {
    alert("Please enter a valid Date of Birth!");
    return;
  }

  localStorage.setItem("dob", dobValue);
  calculateTime();
});

// Function to calculate the time difference between the current date and the date of birth
function calculateTime() {
  if (h1Element.textContent === "Kindly Enter Your Date Of Birth") {
    h1Element.textContent = "Your Time On Earth";
  }

  dateCalculation();
  updateHTML();

  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    dateCalculation();
    updateHTML();
  }, 1000);
}

function dateCalculation() {
  const now = new Date();
  const dob = new Date(dateElement.value);

  years = now.getFullYear() - dob.getFullYear();
  months = now.getMonth() - dob.getMonth();
  days = now.getDate() - dob.getDate();
  hours = now.getHours() - dob.getHours();
  minutes = now.getMinutes() - dob.getMinutes();
  seconds = now.getSeconds() - dob.getSeconds();

  // Adjust for negative values
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }
}

function updateHTML() {
  const html = `
    <h2>
      <div class="years">${years}</div>
      Years
    </h2>
    <h2>
      <div class="months">${formatTimeUnit(months)}</div>
      Months
    </h2>
    <h2>
      <div class="days">${formatTimeUnit(days)}</div>
      Days
    </h2>
    <h2>
      <div class="hours">${formatTimeUnit(hours)}</div>
      Hours
    </h2>
    <h2>
      <div class="minutes">${formatTimeUnit(minutes)}</div>
      Minutes
    </h2>
    <h2>
      <div class="seconds">${formatTimeUnit(seconds)}</div>
      Seconds
    </h2>
  `;

  // Update the DOM only if there are changes
  if (timeHTML.innerHTML !== html) {
    timeHTML.innerHTML = html;
  }
}

// Fullscreen logic with fullscreenchange event for better control
fullScreenMode.addEventListener("click", () => {
  if (document.fullscreenElement) {
    closeFullscreen();
  } else {
    openFullscreen();
  }
});

document.addEventListener("fullscreenchange", () => {
  fullScreenMode.innerText = document.fullscreenElement ? "Exit Full Screen" : "Enter Full Screen";
});

function openFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE/Edge
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { 
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { 
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { 
    document.msExitFullscreen();
  }
}
