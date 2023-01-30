const resetBtn = document.querySelector('.reset');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');

const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const millisecondsElement = document.querySelector('.milliseconds');


// starting time
let milliseconds = 0;
let seconds = 0;
let minute = 0;
let hour = 0;

// Change to double number
function checkNumberIsSingle(number) {
    if (number < 10) {
        return `0${number}`;
    } else {
        return number;
    }
}

// Check if seconds or minutes has reached 60 and update
function checkSecondsAndMinutes() {
    if (milliseconds === 100) {
        seconds = seconds + 1;
        milliseconds = 0;
    }

    if (seconds === 60) {
        minute = minute + 1;
        seconds = 0;
    }

    if (minute === 60) {
        hour += 1;
        minute = 0;
    }
}

// Start stopwatch
function play() {
    milliseconds = milliseconds + 1;
    checkSecondsAndMinutes();
    hoursElement.innerText = checkNumberIsSingle(hour);
    minutesElement.innerText = checkNumberIsSingle(minute);
    secondsElement.innerText = checkNumberIsSingle(seconds);
    millisecondsElement.innerText = checkNumberIsSingle(milliseconds);
}

playBtn.addEventListener('click', e => {
    e.target.setAttribute('disabled', true)
    timeInterval = setInterval(play, 10);
})

pauseBtn.addEventListener('click', e => {
    playBtn.disabled = false;
    playBtn.classList.remove('disabled')
    clearInterval(timeInterval);
})

resetBtn.addEventListener('click', e => {
    if (timeInterval) {
        clearInterval(timeInterval)
    }
    milliseconds = 0;
    seconds = 0;
    minute = 0;
    hour = 0;
    playBtn.disabled = false;
    hoursElement.innerText = checkNumberIsSingle(hour);
    minutesElement.innerText = checkNumberIsSingle(minute);
    secondsElement.innerText = checkNumberIsSingle(seconds);
    millisecondsElement.innerText = checkNumberIsSingle(milliseconds);
})