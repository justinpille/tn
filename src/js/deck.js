var card = function(i) {
	var suit, value, card;
	switch(i % 4) {
		case 0:
			suit = 'spades';
			break;
		case 1:
			suit = 'clubs';
			break;
		case 2:
			suit = 'hearts';
			break;
		case 1:
			suit = 'diamonds';
			break;
		default:
			// oops
	}
	value = i % 13;
	card = {
		index: i,
		suit: suit,
		value: value
	};
	return card;
}

var deck = [];

for (var i = 0; i < 50; i++) {
	deck[i] = getCard(i);
}

console.log(deck);
