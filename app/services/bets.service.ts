import {Bet} from '../classes/bet';

export class BetsService{
	bets: Array<Bet> = [
		new Bet('Titre', 25, 250),
		new Bet('Titre', 2, 30),
		new Bet('Titre', 1.5, 10)
	];

	addBet(title: String, odd: Number, stake: Number, status: String = 'En cours') {
		this.bets.push(new Bet(title, odd, stake, status));
	}

	getBets() {
		return this.bets;
	}
}
