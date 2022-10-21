import { random } from './random.js';
import { greater, lower, win } from './status.js';

export function init(){
    eventKey(random());
}

function eventKey(number){
    console.log(number);
    const input = document.getElementById('inputNumber');
    input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            if (input.value > number) {
                lower();
            }else if (input.value < number){
                greater();
            }else{
                win();
            }
        }
    });
}