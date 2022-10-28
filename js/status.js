import { $spanResult, $input, $inputName, $lblNumber } from './config.js';

export function lower(score) {
    $spanResult.innerText = `Le nombre mystérieux est plus petit ! | Nombre d'essai${score > 1 ? 's' : ''}: ${score}\n`;
    $input.select();
}

export function greater(score) {
    $spanResult.innerText = `Le nombre mystérieux est plus grand ! | Nombre d'essai${score > 1 ? 's' : ''}: ${score}\n`;
    $input.select();
}

export function win() {
    $spanResult.innerText = "Félicitations, vous avez gagné !";
    $input.setAttribute('disabled', '');
    $input.classList.add('success');
    $inputName.classList.remove('name');
    $inputName.focus();
    $lblNumber.classList.add('success');
}

export function perdu(nb){
    $spanResult.innerText = "Dommage...\nVous avez perdu !\nLe nombre était : " + nb;
    $lblNumber.classList.add('none');
    $input.classList.add('none');
    $input.setAttribute('disabled', '');
}