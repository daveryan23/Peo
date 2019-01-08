var getBaseMult = require('../../../maths/getBaseMult');
var setNumbers = require('../../../setters/setNumbers');

var getLogDenom = function getLogDenom(base) {
  setNumbers(this);
  return this.number.ln.d * getBaseMult(base);
};

module.exports = getLogDenom;
