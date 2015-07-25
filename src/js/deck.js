function getName(i) {
  return {
    0: ['Ace', 'a'],
    1: ['Two', '2'],
    2: ['Three', '3'],
		3: ['Four', '4'],
    4: ['Five', '5'],
    5: ['Six', '6'],
		6: ['Seven', '7'],
    7: ['Eight', '8'],
    8: ['Nine', '9'],
		9: ['Ten', '10'],
    10: ['Jack', 'j'],
    11: ['Queen', 'q'],
		12: ['King', 'k']
  }[i % 13];
}

function getSuit(i) {
  return {
    0: ['Spades', 's'],
    1: ['Clubs', 'c'],
    2: ['Hearts', 'h'],
		3: ['Diamonds', 'd']
	}[i % 4];
}

var getCard = function(i) {
	var card = {
		index: i,
		value: i % 13,
		suit: getSuit(i)[0],
		name: getName(i)[0],
		abrv: getName(i)[1] + getSuit(i)[1]
	};
	return card;
}

var deck = [];

for (var i = 0; i < 50; i++) {
	deck[i] = getCard(i);
}

module.exports = deck;
