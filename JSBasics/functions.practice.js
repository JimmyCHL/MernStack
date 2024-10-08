//1. Named function
function namedProduct() {
  console.log('Car')
}

namedProduct()

//2. Function Expression
var functionExpression = function () {
  console.log('normal function Expression')
}

functionExpression()

//3. Arrow Function Expression
var arrowExpression = () => {
  console.log('Arrow function Expression')
}

arrowExpression()

//4. IIFE - Immediately invocable Function Expression
;(function arithmetic(a, b, c) {
  console.log('Sum is - ', a + b + c)
})(Math.random(), Math.random(), Math.random())

//5.Constructor Function

function Car(brand, color, model) {
  this.brand = brand
  this.color = color
  this.model = model

  this.getCarDetails = () => {
    console.log('Car is -', this.brand, this.color, this.model)
  }
}

var carObj = new Car('Hyundai', 'Black', 'Cona')

carObj.getCarDetails()

carObj.year = 2020

// overriding the existing definition
carObj.getCarDetails = function () {
  console.log('User information Entered is -', this.brand, this.color, this.model, this.year)
}

carObj.getCarDetails()

//6. nested functions

var value = Math.random()

function Multiplier(a, isRounded) {
  return function Multiplier2(b) {
    return function Multiplier3(c) {
      return function Multiplier4(d) {
        if (isRounded) {
          return Math.round(a * b * c * d * value)
        }
        return a * b * c * d * value
      }
    }
  }
}

// result is rounded
console.log(Multiplier(5, true)(6)(7)(8))

// result is not rounded
console.log(Multiplier(5, false)(6)(7)(8))
