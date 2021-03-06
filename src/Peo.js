var initialise = require('./initialisers/initialise');

// Peo class constructor
function Peo() {
  this.p = {};     // Immutable, is identity of this Peo. All other variables are just cached information.
  initialise(this, arguments);
}

// Static or Class methods
Peo.fact = require('./api/class/fact');
Peo.perm = require('./api/class/perm');
Peo.multSeq = require('./api/class/multSeq');
Peo.binom = require('./api/class/binom');
Peo.prim = require('./api/class/prim');
Peo.multPrimes = require('./api/class/multPrimes');

// Instance Methods
// Access to prime exponents
Peo.prototype.checkPrimeExps = require('./api/exps/checkPrimeExps');
Peo.prototype.getPrimeExp = require('./api/exps/getPrimeExp');
Peo.prototype.getPrimeExps = require('./api/exps/getPrimeExps');

// Array
Peo.prototype.reduce = require('./api/array/reduce');

// General
Peo.prototype.compress = require('./api/general/compress');
Peo.prototype.construct = require('./api/general/construct');
Peo.prototype.copy = require('./api/general/copy');
Peo.prototype.toString = require('./api/general/toString');

// Maths operations
Peo.prototype.get1 = require('./api/maths/get1');
Peo.prototype.mult = require('./api/maths/mult');
Peo.prototype.pow = require('./api/maths/pow');
Peo.prototype.split = require('./api/maths/split');

// Maths - unary comparison
Peo.prototype.is1 = require('./api/maths/comparisonUnary/is1');
Peo.prototype.isNot1 = require('./api/maths/comparisonUnary/isNot1');
Peo.prototype.lessThan1 = require('./api/maths/comparisonUnary/lessThan1');
Peo.prototype.lessThanOrEqualTo1 = require('./api/maths/comparisonUnary/lessThanOrEqualTo1');
Peo.prototype.greaterThan1 = require('./api/maths/comparisonUnary/greaterThan1');
Peo.prototype.greaterThanOrEqualTo1 = require('./api/maths/comparisonUnary/greaterThanOrEqualTo1');

// Maths - binary comparison
Peo.prototype.equals = require('./api/maths/comparisonBinary/equals');
Peo.prototype.notEquals = require('./api/maths/comparisonBinary/notEquals');
Peo.prototype.lessThan = require('./api/maths/comparisonBinary/lessThan');
Peo.prototype.lessThanOrEqualTo = require('./api/maths/comparisonBinary/lessThanOrEqualTo');
Peo.prototype.greaterThan = require('./api/maths/comparisonBinary/greaterThan');
Peo.prototype.greaterThanOrEqualTo = require('./api/maths/comparisonBinary/greaterThanOrEqualTo');

// Logarithmic numeric values
Peo.prototype.getLog = require('./api/number/ln/getLog');
Peo.prototype.getLogDenom = require('./api/number/ln/getLogDenom');
Peo.prototype.getLogNum = require('./api/number/ln/getLogNum');

// Numeric stats
Peo.prototype.countUniquePrimeFactors = require('./api/number/stats/countUniquePrimeFactors');
Peo.prototype.countPrimeFactors = require('./api/number/stats/countPrimeFactors');
Peo.prototype.countFactors = require('./api/number/stats/countFactors');
Peo.prototype.getHighestAbsExp = require('./api/number/stats/getHighestAbsExp');
Peo.prototype.getHighestExp = require('./api/number/stats/getHighestExp');
Peo.prototype.getHighestPrime = require('./api/number/stats/getHighestPrime');
Peo.prototype.getLiouville = require('./api/number/stats/getLiouville');
Peo.prototype.getLowestExp = require('./api/number/stats/getLowestExp');
Peo.prototype.getLowestPrime = require('./api/number/stats/getLowestPrime');
Peo.prototype.getMobius = require('./api/number/stats/getMobius');
Peo.prototype.getBenedettiHeight = require('./api/number/stats/getBenedettiHeight');

// Numeric values
Peo.prototype.getAsDecimal = require('./api/number/getAsDecimal');
Peo.prototype.getAsFractionText = require('./api/number/getAsFractionText');
Peo.prototype.getAsResultText = require('./api/number/getAsResultText');
Peo.prototype.getDenom = require('./api/number/getDenom');
Peo.prototype.getNum = require('./api/number/getNum');

module.exports = Peo;
