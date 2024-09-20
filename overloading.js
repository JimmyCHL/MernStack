//Same name method but have different signatures, and number of parameters
//No overloading concept in JS, but we have over-writing
//Whatever function defined in last will be working all others will be replaced

/**
 * Below cases also illustrate the the concept of hoisting in Js.
 */

Sum(1, 2) // NaN

function Sum() {
  console.log('Nothing to Sum')
}

Sum() // NaN

function Sum(a) {
  console.log('Sum of a ', a)
}

Sum(1) //NaN

function Sum(a, b) {
  console.log('Sum of a and b ', a + b)
}

Sum(1, 2) //NaN

function Sum(a, b, c) {
  console.log('Sum of a, b and c', a + b + c)
}

Sum(1, 2, 3) //6
Sum(1, 2, 3, 4) //6

/** This will overwrite defined Sum function until this expression reach */
var Sum = function (a, b, c, d) {
  console.log('Sum of a, b and c, d', a + b + c + d)
}

Sum(1, 2, 3, 4) //10
