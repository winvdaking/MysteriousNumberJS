import { random } from './random.js';

const $inputNumber = document.getElementById('inputNumber');
const $result = document.getElementById('result');

const randomNumber = random();

$inputNumber.onkeyup = e => {
	if (e.key === 'Enter') {
		console.log($inputNumber.value)		
	}
};