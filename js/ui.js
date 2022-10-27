import { random } from './random.js';
import { run, score } from './event.js';
import { displayScoresByUser } from './score.js';

const $btnRun = document.getElementById('run');
const $btnScore = document.getElementById('scores');
const $btnReset = document.getElementById('reset');
const $btnScoreBy = document.getElementById('score-by');
const $table = document.getElementById('table');
const $run = document.getElementById('runDiv');

export function init() {

    $btnRun.addEventListener('click', (e) => {
        $table.classList.add('none');
        $run.classList.remove('none');
        run(random());
    });

    $btnScore.addEventListener('click', (e) => {
        score();
    });

    $btnScoreBy.addEventListener('click', (e) => {
        let $inputSearch = document.getElementById('inputSearch');
        $inputSearch.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                displayScoresByUser(inputSearch.value.trim());
            }
        })
    });

    $btnReset.addEventListener('click', (e) => {
        run(random());
    });
}