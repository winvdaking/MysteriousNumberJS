import { random } from './random.js';
import { run, score } from './event.js';

export function init() {
    eventKey(random());
}

const btnRun = document.getElementById('run');
const btnScore = document.getElementById('score');
const btnReset = document.getElementById('reset');
const btnScoreBy = document.getElementById('score-by');

function eventKey(number) {

    btnRun.addEventListener('click', (e) => {
        run(number);
    });

    btnScore.addEventListener('click', (e) => {
        score();
    });
}

