var ibn = require('is-bounded-number')
var isString = require('is-string');

var incrementFromObjectPower = require('../setters/incrementFromObjectPower')
var initialiseFromNumAndDenom = require('./initialiseFromNumAndDenom')

var digits = 15
var cutOff = Math.pow(10, digits)
var searchForDigits = "[0-9]{1," + digits + "}"
var regexIntegerString = new RegExp("^" + searchForDigits + "$")
var regexFractionString = new RegExp("^" + searchForDigits + "\\/" + searchForDigits + "$")


var initialise = function(peo, args) {

  // Get the first few arguments given to Peo constructor
  var arg0 = args[0]
  var arg1 = args[1]
  var arg2 = args[2]

  // Check for 'Peo' case
  // Have to use peo.constructor, rather than Peo
  if (arg0 instanceof peo.constructor) {
    // arg0.p is an object, from which we can increment peo
    incrementFromObjectPower(peo, arg0.p, arg1)
    return
  }

  // Then check for numeric case
  if (ibn(arg0, cutOff)) {
    // Treat as case where arg0, arg1, arg2 are in order:
    // numerator, denominator, power
    // Only numerator is mandatory, denominator and power are optional
    initialiseFromNumAndDenom(peo, arg0, arg1, arg2)
    return
  }

  // Case arg0 is string "NNN" or "MMM/NNN"
  // and arg1 is an optional power
  // Note: .search is 0 if match (at start), -1 if no match
  if (isString(arg0)) {
    if (arg0.search(regexIntegerString)===0) {
      // Case arg0="NNN"
      var theNum = Number.parseInt(arg0)
      initialiseFromNumAndDenom(peo, theNum, 1, arg1)
      return
    } else if (arg0.search(regexFractionString)===0) {
      // Case arg0="MMM/NNN"
      var splitArray = arg0.split(/\//)
      var theNum = Number.parseInt(splitArray[0])
      var theDenom = Number.parseInt(splitArray[1])
      initialiseFromNumAndDenom(peo, theNum, theDenom, arg1)
      return
    }
  }

  // Another case needed here for arrays entered as arguments in the Peo constructor

  // Need to do this check last, since its 'object', the most general!
  if (typeof(arg0)==='object') {
    incrementFromObjectPower(peo, arg0, arg1)
    return
  }

}

module.exports = initialise
