export class Bet {
	title: String;
	date: String;
	odd: Number;
	stake: Number;
	status: String;

	constructor(title: String, odd: Number, stake: Number, status: String = 'En cours') {
		this.title = title;
		this.odd = odd;
		this.stake = stake;
		this.status = status;
	}

	updateTitle(newTitle: String) {
		this.title = newTitle;
	}
	updateStake(newStake: number) {
		this.stake = newStake;
	}
	updateOdd(newOdd: number) {
		this.odd = newOdd;
	}
	updateStatus(newStatus: String) {
		this.status = newStatus;
	}
}