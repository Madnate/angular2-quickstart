import {Component} from 'angular2/core';
import {Bet} from '../classes/bet';
import {BetsService} from '../services/bets.service';
import {BetItemComponent} from './bet-item.component';


@Component({
    selector: 'bet-list',
    templateUrl: 'app/templates/bet-list.html',
    directives: [BetItemComponent],
    providers : [BetsService]
})


export class BetListComponent {

	bets : Array<Bet>;

	constructor(private _betsService : BetsService) {
		// code...

	}

	ngOnInit() {
		console.log(this.bets);
		this.bets = this._betsService.getBets();
	}

	addBet(title, odd, stake, status) {
		this._betsService.addBet(title, odd, stake, status);
	}

}