import { load, save } from './storage.js';

export const scores = load();

export function saveScore(username, score = 0){
	const player = scores.find(e => e.username === username);
	if (player) {
		player.score = score;
	} else {
		scores.push({ username, score });
	}
	save(scores);
	return player || null;
}

export function displayScores(){
	
}