import {Bet} from './bet';

export class Bankroll{
	title: String;
	starting_capital: Number;
	actual_capital: Number;
	profites: Number;
	progression: String;
	bets: Array<Bet>;


	constructor(title: String, starting_capital: Number, bets: Array<Bet>) {
		this.title = title;
		this.starting_capital = starting_capital;
		this.bets = bets;
	}

	update_starting_capital(capital: Number){
		this.starting_capital = capital;
	}

	update_actual_capital(){
		console.log(bets);
	}
}