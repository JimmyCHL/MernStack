// 4th November - 2024 : ES6, eventloop and some spa definitions
// All questions are mandatory - 14 out of 15 needs to be done, 1st question is equal to two question so can't be left

const heroes = [
  { name: 'Wolverine', family: 'Marvel', isEvil: false },
  { name: 'Deadpool', family: 'Marvel', isEvil: false },
  { name: 'Magneto', family: 'Marvel', isEvil: true },
  { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
  { name: 'Batman', family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn', family: 'DC Comics', isEvil: true },
  { name: 'Legolas', family: 'Tolkien', isEvil: false },
  { name: 'Gandalf', family: 'Tolkien', isEvil: false },
  { name: 'Saruman', family: 'Tolkien', isEvil: true },
]
// 1. How to preserve the immutability on my heroes list?
/** use map to create new array abd use spread operator to create new object */
const newHeroes = heroes.map((hero) => ({ ...hero }))
//Solve below problems using the same
// a. Get heroes who are not evils
const heroesNotEvil = newHeroes.filter((hero) => hero.isEvil === false)
// b. Print Unique family names
const uniqueFamilyNames = new Set(newHeroes.map((hero) => hero.family))
console.log(uniqueFamilyNames)
// c. Print Hero Names from given objects, and append sir in each of them before printing
heroes.reduce((_, curr) => {
  curr.name = `${curr.name} sir`
  console.log(curr.name)
  return
}, null)
console.log(heroes)
// d. Do we have any hero in Marvel Family who is not evil
const hasNotEvilHero = newHeroes.some((hero) => hero.family === 'Marvel' && hero.isEvil === false)
console.log(`Has not evil hero in Marvel family: ${hasNotEvilHero}`)

//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice),
//   using apply keyword we need to implement this one

function multiply(...rest) {
  return rest.reduce((prev, curr) => prev * curr, 1)
}

console.log('using apply', multiply.apply(null, [1, 2, 3, 4, 5]))

//3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
  userDetails: {
    first: 'FirstName',
    last: 'LastName',
  },
}
const {
  userDetails: { last },
  contact = 9119119110,
} = person
console.log(last, contact)

//4. Give me an example of const data manipulation

const data = [1, 2, 3, 4, 5]
data.push(6)
data.unshift(0)
console.log(data)
//or
const obj = { name: 'John', age: 25 }
obj.age = 26
obj.city = 'New York'
console.log(obj)

//5. What is the difference between for-of and for-in show with examples

/** for - of is better to be used for array because we get value directly */
for (const hero of heroes) {
  console.log(hero.name)
}
/** for - in is better to be used for object because we get key directly */
for (const index in heroes) {
  // access hero by heroes[index]
  console.log(heroes[index].name)
}

//6. Give me an example of bind and write its usage, comparison with arrow function

const jimmyObj = {
  name: 'Jimmy',
  age: 30,
  gender: 'male',
  getDetails: function () {
    return `${this.name}, ${this.age}, ${this.gender}`
  },
  getDetailsArrow: () => {
    return `${this.name}, ${this.age}`
  },
}
const detail = jimmyObj.getDetails()
console.log(detail) // Jimmy, age, gender
const detailFunc = jimmyObj.getDetails
console.log(detailFunc()) // undefined, undefined, undefined
const boundFunc = detailFunc.bind(jimmyObj) /** use bind, we can setup or bind the scope of context for the function */
console.log(boundFunc()) // Jimmy, age
// Arrow function does not have its own context, it uses the context of the immediate parent, it could be global object or empty object in this case
console.log(jimmyObj.getDetailsArrow()) // undefined, undefined

// Bind does not work with arrow function
const boundArrowFunc = jimmyObj.getDetailsArrow.bind(jimmyObj)
console.log(boundArrowFunc()) // undefined, undefined

// set context to this module or empty object, so that arrow function can inherit the context and use values
this.name = 'Jimmy'
this.age = 30
console.log(jimmyObj.getDetailsArrow()) // Jimmy, age

//7. Create an example showing usage of event loop in concurrent execution cycle

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    ;(function () {
      console.log('Promise 1 started') // this will be printed third, because of setTimeout,
      //so when setTimeout is finished, the callback will be added to the queue task sequence by event loop system
    })()
  }, 0)

  setTimeout(() => {
    resolve('Promise 1 resolved') // this will be printed fourth
  }, 3000)
})

const promise2 = new Promise((resolve, reject) => {
  ;(function () {
    console.log('Promise 2 started') // this will be printed first
  })()

  setTimeout(() => {
    setTimeout(() => {
      resolve('Promise 2 resolved') // this will be printed sixth because of nested setTimeout.The callback for nested setTimeout is the last to be added to the queue
    }, 0)
  }, 3000)
})

const promise3 = new Promise((resolve, reject) => {
  ;(function () {
    console.log('Promise 3 started') // this will be printed second
  })()

  setTimeout(() => {
    resolve('Promise 3 resolved') // this will be printed fifth
  }, 3000)
})

promise1.then((data) => console.log(data))
promise2.then((data) => console.log(data))
promise3.then((data) => console.log(data))

//8. create an example showing usage of short hand and default param.

const product = { name: 'apple', price: 10 }
const location = { city: 'New York', country: 'USA' }
const farm = { name: 'Farm', email: 'test@gmail.com' }

const details = { product, location, farm, date: new Date() }
console.log(details)

//9. Create two objects with some properties and merge them using Object method and ES6 way
const obj1 = { name: 'John', age: 25 }
const obj2 = { city: 'New York', country: 'USA' }
const mergedObj = Object.assign({}, obj1, obj2)
const mergedObjES6 = { ...obj1, ...obj2 }
console.log(JSON.stringify(mergedObj) === JSON.stringify(mergedObjES6)) // true

//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc

const map = new Map()
map.set('name', 'Jimmy')
map.set('age', 30)
map.set('city', 'New York')
console.log(map.get('name')) // Jimmy
console.log(map.entries()) // MapIterator { [ 'name', 'Jimmy' ], [ 'age', 30 ], [ 'city', 'New York' ] }
console.log(map.size) // 3
map.clear()

const set = new Set()
set.add('Jimmy')
set.add('30')
set.add('New York')
set.add('USA')
console.log(set.has('Jimmy')) // true
console.log(set.size) // 4
console.log(set.delete('30')) // true
set.forEach((value) => console.log(value)) // Jimmy, New York, USA

//11. Create a promise object that get resolved after two seconds and rejected after three. Also it returns five ES6 features on resolved

function es6Features() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        feature1: 'let and const',
        feature2: 'arrow function',
        feature3: 'destructuring',
        feature4: 'spread operator',
        feature5: 'rest operator',
      })
    }, 2000)

    setTimeout(() => {
      reject('Promise rejected')
    }, 3000)
  })
}

es6Features()
  .then((data) => console.log('es6Features promise resolved' + JSON.stringify(data)))
  .catch((err) => console.log('es6Features promise reject ' + err))

//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
function multiply(...rest) {
  return rest.reduce((prev, curr) => prev * curr, 1)
}
console.log(multiply(1, 2, 3, 4, 5))

//13. Use the question #11 to build promises using async and await - with multithread

async function asyncEs6Features() {
  console.log('async ES6 Features Execution in progress')
  try {
    const data = await es6Features()
    console.log('Get the result of ES6 Features ' + JSON.stringify(data))
  } catch (err) {
    console.log('es6Features promise reject ' + err)
  }
}

console.log('async ES6 Features Execution starts')
asyncEs6Features()
console.log('async ES6 Features Execution Ends')

//14. Create an example of generator function of your choice

function* generatorFunction(number) {
  let i = 0
  while (i < number) {
    yield i++
  }
  return number
}

const generator = generatorFunction(5)

for (const value of generator) {
  console.log(value)
} // 0, 1, 2, 3, 4

const generator2 = generatorFunction(3)

console.log(generator2.next()) // { value: 0, done: false }
console.log(generator2.next()) // { value: 1, done: false }
console.log(generator2.next()) // { value: 2, done: false }
console.log(generator2.next()) // { value: 3, done: true }
console.log(generator2.next()) // { value: undefined, done: true }

//15. Explain your knowledge of - statelessness, http, REST, spa and classical applications

/**
 * Still not fully diving into the correct answer, but expressing my understanding
 *
 * Statelessness - Each http request is unique and independent or each other.
 * The server does not store any shared state or information between requests.
 * Each request should contain all the information needed to fulfill server's request,
 * so there is no conflict between requests and server can handle multiple requests at the same time.
 * And it will be easy to scale up.
 *
 * http - Hypertext Transfer Protocol is a protocol used to transfer data over the internet.
 *
 * REST - Representational State Transfer is its full name. It is a rule and guideline to design API. Mostly we call it REST API.
 * Mainly it uses HTTP methods like GET, POST, PUT, DELETE to perform CRUD operations between client and server.
 *
 * SPA - Single Page Application is a web application that loads a single HTML page and changes the content without reloading the page (making new requests).
 * As far as I know, React is a good example of SPA. It use virtual DoM to update the content of the page and only update the part of the page that needs to be updated.
 * And I think mostly will work with Routing to handle page navigation or in react native with navigation stack.
 *
 * Classical Applications - I think it refers to the traditional way of building applications. When the user interacts with the application,
 * the server will generate a new data (with template) or direct html page each time when the content needs to be updated or changed.
 *
 */
