const spanResult = document.getElementById('result');
const input = document.getElementById('inputNumber');
const inputName = document.getElementById('inputName');

export function lower(score) {
    spanResult.innerText = `Le nombre mystérieux est plus petit ! | Nombre d'essai${score > 1 ? 's' : ''}: ${score}`;
    input.select();
}

export function greater(score) {
    spanResult.innerText = `Le nombre mystérieux est plus grand ! | Nombre d'essai${score > 1 ? 's' : ''}: ${score}`;
    input.select();
}

export function win() {
    spanResult.innerText = "Félicitations, vous avez gagné !";
    input.setAttribute('disabled', '');
    input.classList.add('success');
    inputName.classList.remove('name');
    document.getElementById('lblNumber').classList.add('success');
}