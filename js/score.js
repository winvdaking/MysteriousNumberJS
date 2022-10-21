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

export function displayScores(username){
    let scoreboard = scores.sort((a,b) => a.score - b.score);
    let position = scoreboard.findIndex(u => u.username === username)+1;
    return `Vous êtes ${position}${position == 1 ? 'er' : 'ème'} !`;
}