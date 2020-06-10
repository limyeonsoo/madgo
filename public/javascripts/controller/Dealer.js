import Deck from 'Deck.js'

class Dealer{     // generated by Game

    // 1. 패 52장 만든다.
    // 2. 셔플한다.
    // 3. 나눠준다.
    constructor(broker, userA, userB){
        this.deck = new Deck;
        //Todo : Deck(class) => 각각의 패에 대한 정보 가지고 있느다.
        // deck.shuffle();
        // deck.pop(n);
        this.broker = broker;
        this.userA = userA;
        this.userB = userB;
    }

    shuffle(){
        this.deck.shuffle();
    }

    hand_out(destination, n){
        this.destination.setHand(deck.pop(n));
    }
}