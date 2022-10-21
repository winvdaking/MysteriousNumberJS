export function load(){
	return ('scores' in localStorage) ? JSON.parse(localStorage.getItem('scores')) : [];
}

export function save(data){
	localStorage.setItem('scores', JSON.stringify(data));
}