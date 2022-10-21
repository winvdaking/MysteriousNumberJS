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
    spanResult.innerText = "Félicitations ! Le nombre est bien le : " + number;
    input.setAttribute('disabled', '');
    input.classList.add('success');
    inputName.classList.remove('name');
}