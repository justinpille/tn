var deal = function(deck, numOfCards, res) {
  var result = res || [];
  if (!numOfCards) {
    return result;
  } else {
    result.push(deck.shift());
    deal(deck, numOfCards - 1, result)
  }
  return result;
};

module.exports = deal;
