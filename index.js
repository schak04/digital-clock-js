let intervalID;
let is24Hr = false;
runClock12();
intervalID = setInterval(runClock12, 1000);

function runClock24() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeStr = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeStr;
}

function runClock12() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    if (hours === 0) hours = 12;
    const paddedHours = String(hours).padStart(2, "0");
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");
    const timeStr = `${paddedHours}:${paddedMinutes}:${paddedSeconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeStr;
}

function toggleClockFormat() {
    if (is24Hr) {
        is24Hr = false;
        runClock12();
        clearInterval(intervalID);
        intervalID = setInterval(runClock12, 1000);
    }
    else if (!is24Hr) {
        is24Hr = true;
        runClock24();
        clearInterval(intervalID);
        intervalID = setInterval(runClock24, 1000);
    }
}