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

export function displayPositionByUser(username){
    let scoreboard = displayScores();
    let position = scoreboard.findIndex(u => u.username === username)+1;
    return `Vous êtes ${position}${position == 1 ? 'er' : 'ème'} !`;
}

export function displayScores(){
    return scores.sort((a,b) => a.score - b.score);
}

export function displayScoreByUser(username){
    let scoreboard = displayScores();
    let position = scoreboard.findIndex(u => u.username === username)+1;
    return { username: username, score: position };
}