const spanResult = document.getElementById('result');
const input = document.getElementById('inputNumber');
const inputName = document.getElementById('inputName');

export function lower() {
    spanResult.innerText = "Le nombre mystérieux est plus petit !";
}

export function greater() {
    spanResult.innerText = "Le nombre mystérieux est plus grand !";
}

export function win() {
    spanResult.innerText = "Félicitations, vous avez gagné !";
    input.setAttribute('disabled', '');
    input.classList.add('success');
    inputName.classList.remove('name');
    document.getElementById('lblNumber').classList.add('success');
}