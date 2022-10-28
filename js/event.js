import { lower, greater, win } from './status.js';
import { displayScores, displayPositionByUser, saveScore } from './score.js';
import { reset } from './storage.js';

const input = document.getElementById('inputNumber');
const inputName = document.getElementById('inputName');
const spanResult = document.getElementById('result');

export function run(number) {
    
    let score = 0;

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
            spanResult.innerText = displayPositionByUser(inputName.value.trim());
        }
    });
}

export function score(){
    return displayScores();
}

export function resetScore(){
    reset();
}