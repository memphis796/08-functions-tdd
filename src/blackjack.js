/**
 * Should return the basic numeric value of a card
 * @param  {String} cardName
 * @return {Number}
 */
function cardValue(cardName) {
  if (cardName === "ace") {
    return 11;
  }
  if (cardName === "jack" || cardName === "queen" || cardName === "king") {
    return 10;
  }

  return parseInt(cardName);
}

/**
 * Returns the numeric sum of two numbers
 * @param  {Number} a
 * @param  {Number} b
 * @return {Number}
 */
function sum(a, b) {
  return (a + b);
}

/**
 * Returns if a dealer should split doubles
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {Boolean}
 */
function shouldSplit(cardOne, cardTwo) {
  return cardOne === cardTwo;
}

/**
 * Returns if a dealer should hit given two cards
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {Boolean}
 */
function shouldHit(cardOne, cardTwo) {
  if (shouldSplit(cardOne, cardTwo)) {
    return false;
  }

  return cardValue(cardOne) + cardValue(cardTwo) < 17;
}

/**
 * Returns what the dealer should do
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {String}
 */
function selectAction(cardOne, cardTwo) {
  if (shouldHit(cardOne, cardTwo)) {
    return "hit";
  }

  if (shouldSplit(cardOne, cardTwo)) {
    return "split";
  }
    return "stay";
}
