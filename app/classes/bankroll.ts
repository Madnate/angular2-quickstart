import {Bet} from './bet';

export class Bankroll{
	title: String;
	starting_capital: Number;
	actual_capital: Number;
	profites: Number;
	progression: String;
	livebet: Number;
	bets: Array<Bet>;

	constructor(title: String, starting_capital: Number, bets: Array<Bet>) {
		this.title = title;
		this.starting_capital = starting_capital;
		this.bets = bets;

	}

	update_starting_capital(capital: Number){
		this.starting_capital = capital;
	}

	update_actual_capital(bets: Array<Bet>){
		// à chaque fois que l'array bet est modifié, calcul du capital actuel

	}

	updateProfites(bets: Array<Bet>){
		// for each bets
	}

	getTitle(){
		return this.title;
	}

	getLiveBet(){
		this.bets.forEach(

		)
	}
}