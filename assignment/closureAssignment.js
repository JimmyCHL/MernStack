// Create your own example of closure and share with me on your git hub link

function paymentProcessor(type) {
  const data = {
    creditCard: {
      type: 'credit',
      pin: '1234',
      limit: 40000,
      availableCredit: 40000,
      pay: function (amount) {
        this.availableCredit -= amount
      },
    },
    ebt: {
      type: 'ebt',
      pin: '2345',
      balance: 3000,
      pay: function (amount) {
        this.balance -= amount
      },
    },
    debitCard: {
      type: 'debitCard',
      pin: '3456',
      balance: 50000,
      withdraw: function (amount) {
        this.balance -= amount
      },
    },
  }

  if (!data[type]) return 'Invalid payment type'

  var accessLayer = function (pin) {
    if (pin == data[type].pin) {
      if (type == 'creditCard' || type == 'ebt') {
        return {
          limit: data[type].limit,
          availableCredit: type === 'creditCard' ? data[type].availableCredit : null,
          pay: data[type].pay,
          balance: type === 'ebt' ? data[type].balance : null,
        }
      }
      return {
        balance: data[type].balance,
        withdraw: data[type].withdraw,
      }
    } else {
      return 'Pin is incorrect!!'
    }
  }

  return accessLayer
}

var nonObj = paymentProcessor('none')
// String to show error message
console.log(nonObj)

var creditCard = paymentProcessor('creditCard')

// pin is incorrect
console.log(creditCard('1111'))

var creditCardAction = creditCard('1234')

console.log('original availableCredit: ' + creditCardAction.availableCredit)

console.log('pay 1000')

creditCardAction.pay(1000)

console.log('availableCredit: ' + creditCardAction.availableCredit)

var ebt = paymentProcessor('ebt')

var ebtAction = ebt('2345')

console.log('original balance :' + ebtAction.balance)

console.log('pay 1000')

ebtAction.pay(1000)

console.log('balance :' + ebtAction.balance)

var debitCard = paymentProcessor('debitCard')

var debitCardAction = debitCard('3456')

console.log('original balance :' + debitCardAction.balance)

console.log('withdraw 1000')

debitCardAction.withdraw(1000)

console.log('balance :' + debitCardAction.balance)
