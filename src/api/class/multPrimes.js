var multiplyByPrimesInRange = require('../../setters/multiplyByPrimesInRange')

// Static method - 'this' is Peo
var multPrimes = function(i, j) {
  var newPeo = new this()
  multiplyByPrimesInRange(newPeo, i, j)
  return newPeo
}

module.exports = multPrimes
