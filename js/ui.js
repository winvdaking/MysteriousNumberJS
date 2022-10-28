import { random } from './random.js';
import { run, score, resetScore } from './event.js';
import { displayScoreByUser } from './score.js';

const $btnRun = document.getElementById('run');
const $btnScore = document.getElementById('scores');
const $btnReset = document.getElementById('reset');
const $btnScoreBy = document.getElementById('score-by');
const $table = document.getElementById('table');
const $run = document.getElementById('runDiv');
const $tbody = document.getElementById('tbody');
const $inputSearch = document.getElementById('inputSearch');
const $divScore = document.getElementById('scoreBy');
const $divRunBtn = document.getElementById('runDivBtn');
const $btnsRun = document.getElementById('btnsRun');
const $btnEasy = document.getElementById('easy');
const $btnMedium = document.getElementById('medium');
const $btnHard = document.getElementById('hard');
const $btnImpo = document.getElementById('impossible');
const $lblNumber = document.getElementById('lblNumber');

export function init() {

    loadScore(score());

    $btnRun.addEventListener('click', (e) => {
        $table.classList.add('none');
        $divRunBtn.classList.remove('none');
        $btnEasy.addEventListener('click', (e) => {
            choiceLevel();
        });

        $btnMedium.addEventListener('click', (e) => {
            choiceLevel(1, 499);
        });
        
        $btnHard.addEventListener('click', (e) => {
            choiceLevel(1, 999);
        });

        $btnImpo.addEventListener('click', (e) => {
            choiceLevel(1, 9999);
        });
    });

    $btnScore.addEventListener('click', (e) => {
        $divRunBtn.classList.add('none');
        $table.classList.remove('none');
        loadScore(score());
    });

    $btnScoreBy.addEventListener('click', (e) => {
        $divScore.classList.remove('none');
        $table.classList.add('none');
        
        $inputSearch.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                const data = displayScoreByUser(inputSearch.value.trim());
                if (data.score == 0) return;
                $table.classList.remove('none');
                loadScore(data);
            }
        })
    });

    $btnReset.addEventListener('click', (e) => {
        $tbody.classList.add('none');
        resetScore();
    });
}

function loadScore(tabScores = []){
    $tbody.replaceChildren();
    tabScores.forEach(usr => {
        let $tr = document.createElement('tr');
        let $td1 = document.createElement('td');
        let $td2 = document.createElement('td');
        $td1.innerText = usr.username;
        $td2.innerText = usr.score;
        $tr.append($td1, $td2);
        $tbody.appendChild($tr);
    });
}

function choiceLevel(min = 1, max = 99){
    $lblNumber.innerText = `Entrez un nombre en ${min} & ${max} :`;
    $btnsRun.classList.remove('columns');
    $btnsRun.classList.add('none');
    $run.classList.remove('none');
    run(random(min, max));
}