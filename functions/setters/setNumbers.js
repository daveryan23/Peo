var setNumbers = function(peo) {

  // Exit if already set
  if (peo.number) return

  // Calculate and store the natural logs of numerator, denominator, whole Peo
  var resultPeo = 0
  var resultNum = 0
  var resultDenom = 0
  var primeExpObj = peo.getPrimeExps()
  var keys = Object.keys(primeExpObj)
  for (var i=0; i<keys.length; i++) {
    var key = keys[i]                    // key is a string
    var value = primeExpObj[key]
    var prime = Number.parseInt(key)
    var exponent = Number.parseInt(value)
    var logFactor = exponent * Math.log(prime)
    if (prime) {
      resultPeo += logFactor
      if (logFactor>0) resultNum += logFactor
      if (logFactor<0) resultDenom -= logFactor
    }

  }

  // Store results
  peo.number = {}
  peo.number.val = Math.exp(resultPeo)
  peo.number.n = Math.round(Math.exp(resultNum))
  peo.number.d = Math.round(Math.exp(resultDenom))
  peo.number.ln = {}
  peo.number.ln.val = resultPeo
  peo.number.ln.n = resultNum
  peo.number.ln.d = resultDenom

}

module.exports = setNumbers