//Create two examples of your own choice to make a map and a weak map
// and a list of unique names of 10 states of your favorite country you wish to visit on world tour

const strongMap = new Map()
strongMap.set('India', 'New Delhi')
strongMap.set('USA', 'Washington DC')
strongMap.set('UK', 'London')
strongMap.set('France', 'Paris')

console.log(strongMap.size)
console.log(strongMap.entries())

const weakMap = new Map()
weakMap.set(30, 'India')

const weakFunc = function () {}
weakMap.set(weakFunc, 'USA')

const weakObj = {}
weakMap.set(weakObj, 'UK')

console.log(weakMap.size)
console.log(weakMap.entries())
console.log(weakMap.has(30)) // true
console.log(weakMap.has(function () {})) // false
console.log(weakMap.has(weakFunc)) // true
console.log(weakMap.has({})) // false
console.log(weakMap.has(weakObj)) // true

const favoriteCountries = new Set([
  'India',
  'USA',
  'UK',
  'France',
  'Germany',
  'Italy',
  'Spain',
  'Australia',
  'Japan',
  'Taiwan',
])
favoriteCountries.add('Canada') // can add
favoriteCountries.add('USA') // cannot add
favoriteCountries.delete('Germany')
console.log(favoriteCountries.has('Germany')) // false
favoriteCountries.add('Germany')
console.log(favoriteCountries.has('Germany')) // true

// Task - create a class named as account accepting 3 or more params  like - name, acct type etc and
// has three methods to show balance, user details and account offers

class Account {
  constructor(accountName = 'any', accountType = 'checking', accountBalance = 0) {
    this.accountName = accountName
    this.accountType = accountType
    this.accountBalance = accountBalance
  }

  showBalance = () => this.accountBalance

  showUserDetails = () => `Account Name: ${this.accountName}, Account Type: ${this.accountType}`

  showAccountOffers = () => {
    if (this.accountBalance > 1000 && this.accountType === 'checking') {
      return 'You are eligible for 5% cashback on your next purchase'
    } else if (this.accountBalance > 10000 && this.accountType === 'savings') {
      return 'You are eligible for 10% cashback on your next purchase'
    } else {
      return 'No offers available'
    }
  }
}

const account1 = new Account('John Doe', 'checking', 5000)
console.log(account1.showBalance()) // 5000
console.log(account1.showUserDetails()) // Account Name: John Doe, Account Type: checking
console.log(account1.showAccountOffers()) // You are eligible for 5% cashback on your next purchase

const account2 = new Account('Jane Doe', 'savings', 15000)
console.log(account2.showBalance()) // 15000
console.log(account2.showUserDetails()) // Account Name: Jane Doe, Account Type: savings
console.log(account2.showAccountOffers()) // You are eligible for 10% cashback on your next purchase

const account3 = new Account('John Doe', 'checking', 500)
console.log(account3.showBalance()) // 500
console.log(account3.showUserDetails()) // Account Name: John Doe, Account Type: checking
console.log(account3.showAccountOffers()) // No offers available
