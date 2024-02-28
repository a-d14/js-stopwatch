const time = document.getElementById('time');

const start = document.getElementById('start');
const reset = document.getElementById('reset');
const lapRecord = document.getElementById('lap-record');

let isStarted = false;

let interval;

let [hours, minutes, seconds] = [0, 0, 0];

let timeString;

let lapNumber = 0;

let newNode;

start.addEventListener('click', () => {
    if(!isStarted) {
        isStarted = true;
        interval = setInterval(() => {
            seconds++;
            if(seconds % 60 === 0) minutes++;
            if(minutes !== 0 && minutes % 60 === 0) hours++;
            timeString = `${String(hours % 24).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`
            time.textContent = timeString;
            start.textContent = 'Lap';
        }, 100);
    } else {
        lapNumber++;
        newNode = document.createElement("li");
        newNode.appendChild(document.createTextNode(`Lap ${lapNumber} : ${timeString}`));
        lapRecord.appendChild(newNode);
    }
});

reset.addEventListener('click', () => {
    isStarted = false;
    clearInterval(interval);
    start.textContent = 'Start';
    [hours, minutes, seconds] = [0, 0, 0];
    time.textContent = '00:00:00';
    lapNumber = 0;

    while(lapRecord.firstChild) {
        lapRecord.removeChild(lapRecord.firstChild);
    }

});
