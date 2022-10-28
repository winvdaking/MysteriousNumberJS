import { random } from './random.js';
import { run, score, resetScore } from './event.js';
import { displayScoreByUser } from './score.js';
import { $btnRun, $btnScore, $btnReset, $btnScoreBy, $table, $run, $tbody, $inputSearch, $divScore, $divRunBtn, $btnsRun, $btnEasy, $btnMedium, $btnHard, $btnImpo, $lblNumber, $spanResult } from './config.js';

export function init() {

    loadScore(score());

    $btnRun.addEventListener('click', (e) => {
        $run.classList.add('none');
        $btnsRun.classList.remove('none');
        $table.classList.add('none');
        $divRunBtn.classList.remove('none');
        $btnEasy.addEventListener('click', (e) => {
            choiceLevel();
        });

        $btnMedium.addEventListener('click', (e) => {
            choiceLevel(1, 499, 8);
        });
        
        $btnHard.addEventListener('click', (e) => {
            choiceLevel(1, 999, 10);
        });

        $btnImpo.addEventListener('click', (e) => {
            choiceLevel(1, 9999, 10);
        });
    });

    $btnScore.addEventListener('click', (e) => {
        $divScore.classList.add('none');
        $divRunBtn.classList.add('none');
        $table.classList.remove('none');
        loadScore(score());
    });

    $btnScoreBy.addEventListener('click', (e) => {
        $inputSearch.classList.remove('none');
        $divScore.classList.remove('none');
        $table.classList.add('none');
        $divRunBtn.classList.add('none');

        $inputSearch.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                $inputSearch.classList.add('none');
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

function choiceLevel(min = 1, max = 99, nbEssai = 5){
    $lblNumber.innerText = `Vous avez ${nbEssai} essais !\nEntrez un nombre en ${min} & ${max} :`;
    $btnsRun.classList.remove('columns');
    $btnsRun.classList.add('none');
    $run.classList.remove('none');
    run(random(min, max), nbEssai);
}