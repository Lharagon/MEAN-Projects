function Deck () {
	var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["C", "D", "H", "S"];
	this.cards = [];

	
	this.makeDeck = function () {
		for (var i = 0; i < suits.length; i++) {
			for (var j = 0; j < ranks.length; j++) {
				this.cards.push(ranks[j] + suits[i]);
			}
		}
	}

	this.shuffleDeck = function () {
		for (var i = 0; i < this.cards.length; i++) {
			ramNum = Math.floor(Math.random() * this.cards.length)
			temp = this.cards[i];
			this.cards[i] = this.cards[ramNum];
			this.cards[ramNum] = temp 
		}
	}

	this.resetDeck = function () {
		this.cards = []
		this.makeDeck();
	}

	this.showDeck = function () {
		console.log(this.cards)
	}
	this.dealCard = function () {
		if (this.cards.lenght === 0 ) {
			return null;
		}
		ramNum = Math.floor(Math.random() * this.cards.length)
		var card = this.cards[ramNum];
		this.cards.splice(ramNum, 1);
		return card;
	}

}

function User (name) {
	this.name = name;
	this.hand = [];
	this.getCard = function(func) {
		this.hand.push(func)
	}
	this.discardCard = function(index) {
		if (this.hand.length === 0 || this.hand.length < index) {
			return "Can't do that son!"
		}
		this.hand.splice(index, 1)
	}
	this.showHand = function() {
		console.log(this.hand)
	}

}

var deck1 = new Deck();
var me = new User("Me");
deck1.makeDeck();
deck1.shuffleDeck();
deck1.showDeck();
me.getCard(deck1.dealCard());
me.getCard(deck1.dealCard());
me.getCard(deck1.dealCard());
me.getCard(deck1.dealCard());
me.getCard(deck1.dealCard());
me.showHand();
me.discardCard(3);
me.discardCard(9);
me.showHand();
