import { random } from './random.js';
import { greater, lower, win } from './status.js';
import { saveScore } from './score.js';

export function init() {
    eventKey(random());
}

const input = document.getElementById('inputNumber');
const inputName = document.getElementById('inputName');

let score = 0;

function eventKey(number) {
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
            saveScore(inputName.value.trim(), score);
        }
    });
}
