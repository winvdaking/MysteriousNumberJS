export function load(){
	return JSON.parse(localStorage.getItem('scores'));
}

export function save(data){
	localStorage.setItem('scores', JSON.stringify(data));
}