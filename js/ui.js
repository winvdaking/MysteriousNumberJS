import { random } from './random.js';

export function init(){
    eventKey(random());
}

function eventKey(number){
    console.log(number);
    const spanResult = document.getElementById('result');
    const input = document.getElementById('inputNumber');
    input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            if (input.value > number) {
                spanResult.innerText = "Le nombre mystérieux est plus petit !";
            }else if (input.value < number){
                spanResult.innerText = "Le nombre mystérieux est plus grand !";
            }else{
                spanResult.innerText = "Félicitations ! Le nombre est bien le : " + number;
                input.setAttribute('disabled', '');
            }
        }
    });
}