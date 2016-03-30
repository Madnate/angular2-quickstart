import {Bet} from '../classes/bet';
import {Bankroll} from '../classes/bankroll';

export class BankrollService{

    bets = Array<Bet> = [
        new Bet('Titre', 1.66, 250),
        new Bet('Titre', 2, 30),
        new Bet('Titre', 1.5, 10)];

    bankroll = new Bankroll('bk1', 300, this.bets) ;
    console.log(bankroll);

    addBet(title: String, odd: Number, stake: Number, status: String = 'En cours') {
        this.bets.push(new Bet(title, odd, stake, status));
    }

    getBets() {
        return this.bets;
    }
}
