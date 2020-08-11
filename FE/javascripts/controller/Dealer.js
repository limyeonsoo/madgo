import Deck from './Deck.js'

export default class Dealer {
    get broker() {
        return this._broker;
    }

    set broker(value) {
        this._broker = value;
    }

    get userA() {
        return this._userA;
    }

    set userA(value) {
        this._userA = value;
    }

    get userB() {
        return this._userB;
    }

    set userB(value) {
        this._userB = value;
    }     // generated by Game

    // 1. 패 52장 만든다.
    // 2. 셔플한다.
    // 3. 나눠준다.
    constructor(broker, userA, userB) {
        //Todo : Deck(class) => 각각의 패에 대한 정보 가지고 있느다.
        // deck.shuffle();
        // deck.pop(n);
        this._deck = new Deck();
        this._broker = broker;
        this._userA = userA;
        this._userB = userB;

        console.log(this._deck)
    }

    render(ctx) {
        this._deck.render(ctx)
    }

    shuffle() {
        this._deck.shuffle();
    }

    hand_out(destination, n) {
        destination.hand(this._deck.shift(n));
    }
}
