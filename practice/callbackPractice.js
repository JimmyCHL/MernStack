//Question :
//1. create a callback function example for account
//2. PrintAccount details should accept this call back and the account information
//3. Upon executing PrintAccntDetails it should show the account details with a message
//4. Use the same call back to print multiple sessions planned for the day

function generateDetail(heading, data) {
  var detail = Object.keys(data)
    .map((key) => `${key} is ${data[key]} \n`)
    .join('')
  console.log(`${heading}${detail}`)
}

function printAccountDetails(callBackFunc, data) {
  callBackFunc('Your account details are : ', data)
}

var accountDetails = {
  name: 'Jimmy',
  email: 'test@gmail.com',
  gender: 'male',
  phone: '1234567890',
  address: '1234 Main St, CA',
}

printAccountDetails(generateDetail, accountDetails)

function printShoppingCartDetails(callBackFunc, data) {
  callBackFunc('The shopping price details are as : ', data)
}

var shoppingDetails = {
  product: 'Iphone 29',
  price: '$5000',
  available: 'Yes',
  quantity: 1,
}

printShoppingCartDetails(generateDetail, shoppingDetails)

function printGradeDetails(callBackFunc, data) {
  callBackFunc('The grade details are as : ', data)
}

var gradeDetails = {
  studentName: 'Jimmy',
  grade: 'A',
  subject: 'Math',
  score: 100,
}

printGradeDetails(generateDetail, gradeDetails)
