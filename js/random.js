export function random(start = 1, end = 99){
	return Math.floor(Math.random() * end) + start;
}