import {Component} from 'angular2/core';
import {BankrollService} from '../services/bankroll.service';
import {Account} from '../classes/account';

@Component({
    selector: 'bankroll-stat',
    templateUrl: 'app/templates/bankroll.html',
    providers: [BankrollService]
})
export class BankrollComponent {
    title: String;
    constructor(
        private _bankroll: BankrollService
    ) {}

    ngOnInit() {
        console.log('_bankroll', this._bankroll);
        this.title = this._bankroll.getTitle();
    }


}