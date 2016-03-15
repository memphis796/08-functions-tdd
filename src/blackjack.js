/**
 * Should return the basic numeric value of a card
 * @param  {String} cardName
 * @return {Number}
 */
function cardValue(cardName) {
  if (cardName === "ace") {
    return 11;
  }

  if (cardName === "5") {
    return 5;
  }
  if (cardName === "9"){
    return 9;
  }

  if ("jack" || "queen" || "king" || "10") {
      return 10;
    }
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

}

/**
 * Returns if a dealer should hit given two cards
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {Boolean}
 */
function shouldHit(cardOne, cardTwo) {

}

/**
 * Returns what the dealer should do
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {String}
 */
function selectAction(cardOne, cardTwo) {

}
