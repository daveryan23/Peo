var multiplyBySequence = require('../../setters/multiplyBySequence')

// Static method - 'this' is Peo
var fact = function(n) {
  var newPeo = new this()
  multiplyBySequence(newPeo, n)
  return newPeo
}

module.exports = fact
