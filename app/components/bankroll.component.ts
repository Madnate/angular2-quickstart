import {Component} from 'angular2/core';
import {Bankroll} from '../services/bankroll.services';
import {Account} from '../classes/account';


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    directives: [Bankroll]

})
export class BankrollComponent {



}