import { random } from './random.js';
import { run, score, resetScore } from './event.js';
import { displayScoresByUser } from './score.js';

const $btnRun = document.getElementById('run');
const $btnScore = document.getElementById('scores');
const $btnReset = document.getElementById('reset');
const $btnScoreBy = document.getElementById('score-by');
const $table = document.getElementById('table');
const $run = document.getElementById('runDiv');
const $tbody = document.getElementById('tbody');

export function init() {

    loadScore();

    $btnRun.addEventListener('click', (e) => {
        $table.classList.add('none');
        $run.classList.remove('none');
        run(random());
    });

    $btnScore.addEventListener('click', (e) => {
        loadScore();
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
        $tbody.classList.add('none');
        resetScore();
    });
}

function loadScore(){
    score().forEach(usr => {
        let $tr = document.createElement('tr');
        let $td1 = document.createElement('td');
        let $td2 = document.createElement('td');
        $td1.innerText = usr.username;
        $td2.innerText = usr.score;
        $tr.append($td1, $td2);
        $tbody.appendChild($tr);
    });
}