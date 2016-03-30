import {Component} from 'angular2/core';
import {BetListComponent} from './bet-list.component';
import {BankrollComponent} from './bankroll.component';
import {Account} from '../classes/account';


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    directives: [BetListComponent, BankrollComponent]

})
export class AppComponent { }