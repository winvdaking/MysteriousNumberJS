import { random } from './random.js';
import { greater, lower, win } from './status.js';
import { displayScores, displayScoresByUser, saveScore } from './score.js';

export function init() {
    eventKey(random());
}

const input = document.getElementById('inputNumber');
const inputName = document.getElementById('inputName');
const spanResult = document.getElementById('result');
const btnRun = document.getElementById('run');
const btnScore = document.getElementById('score');
const btnReset = document.getElementById('reset');
const btnScoreBy = document.getElementById('score-by');

let score = 0;

function eventKey(number) {

    btnRun.addEventListener('click', (e) => {
        console.log(number);
        input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                score++;
                if (input.value > number) {
                    lower(score);
                } else if (input.value < number) {
                    greater(score);
                } else {
                    win();
                }
            }
        });

        inputName.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                inputName.setAttribute('disabled', '');
                saveScore(inputName.value.trim(), score);
                spanResult.innerText = displayScoresByUser(inputName.value.trim());
            }
        });
    })
}

