//create a promise to print user info like - name, address, account number after 3 seconds, using aync and await
// also check when it rejects after 2 second
// analyse how await works as blocking execution

function printUserInfoPromiseSuccess() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                "name": "John Doe",
                "address": "123, Main Street",
                "accountNumber": "1234567890"
            })
        }, 3000);

    })
}

function printUserInfoPromiseFailure() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({
                "status": 500,
                "msg": "API Crashed!!"
            })
        }, 2000);
    })
}

async function print_1 () {
    console.log("no await - no blocking thread starts") // 1
    printUserInfoPromiseSuccess()
        .then((data) => console.log(data)) //3
    console.log("No await - thread executes one by one") //2

    console.log("no await - no blocking thread starts") // 1
    await printUserInfoPromiseSuccess()
        .then((data) => console.log(data)) //2
    console.log("No await - thread executes one by one") //3
}
print_1()

async function print_2() {
    console.log("Before await - blocking thread starts") // 1
    await printUserInfoPromiseFailure()
        .catch((err) => console.log(err)) //2 =>
    console.log("After await - thread executes one by one") // 3
    console.log("Before second await - blocking thread starts") // 4
}

print_2()

// create one set of map using different types of keys and at leas show the usage of 5 functions (.get, .clear)
let map = new Map()
map.set("name", "John Doe")
map.set(1, "123, Main Street")
map.set(true, "1234567890")
map.set({}, "random")
map.set([], "random")
map.set(undefined, "random")
console.log(map.get("name"))
console.log(map.get(1))
map.set(true, '9876543210')
console.log(map.get(true))
console.log(map.get({})) // undefined
console.log(map.get([])) // undefined
console.log(map.get(undefined)) // 'random'
console.log(map.has("name")) // true
console.log(map.has(1)) // true
console.log(map.has(true)) // true
console.log(map.has({})) // false
console.log(map.has([])) // false
console.log(map.has(undefined)) // true
map.forEach((value, key) => console.log(typeof key, value)) // the type for undefined is undefined
map.clear()
console.log(map.size) //0
let test = {}
test[undefined] = "random"
Object.keys(test).forEach((key) => console.log(typeof key)) // type for undefined is string

// create a list using set and show the usage of 5 functions (.add, .clear)
let newSet = new Set()
newSet.add("John Doe")
newSet.add("123, Main Street")
newSet.add("1234567890")
newSet.add("random")
let testArray = []
newSet.add({})
newSet.add(testArray)
newSet.add(undefined)
newSet.add(false)
console.log(newSet.size) // 8
console.log(newSet.has("John Doe")) // true
console.log(newSet.has({})) // false
console.log(newSet.has(testArray)) // true
console.log(newSet.has(undefined)) // true
console.log(newSet.has(false)) // true
newSet.add([])
newSet.add([])
console.log(newSet.size) // 10
console.log(newSet)
console.log(newSet.keys().next().value) // John Doe - first element
console.log(newSet.values().next().value) // John Doe - first element
console.log(newSet.entries().next().value) // ["John Doe", "John Doe"] - first element
newSet.clear()
console.log(newSet.size) // 0

// create and example of arithmatic operations (addition, substraction, multiply, division), using generator function

function *multiplyInfinitely(anyNum) {
    let number = 1
    while (true) {
        yield anyNum ** number++

    }
}

let mu = multiplyInfinitely(8)
console.log(mu.next().value) // 8
console.log(mu.next().value) // 16
console.log(mu.next().value) // 32
console.log(mu.next().value) // 64

function *additionByOneInfinitely(anyNum) {
    let number = 1
    while (true) {
        yield anyNum + number++
    }
}

let ad = additionByOneInfinitely(8)
console.log(ad.next().value) // 9
console.log(ad.next().value) // 10
console.log(ad.next().value) // 11

function *substractByOneInfinitely(anyNum) {
    let number = 1
    while (true) {
        yield anyNum - number++
    }
}

let sb = substractByOneInfinitely(8)
console.log(sb.next().value) // 7
console.log(sb.next().value) // 6
console.log(sb.next().value) // 5


function *divideInfinitely(anyNum) {
    let number = 1
    while (true) {
        yield anyNum / (anyNum ** number++)
    }
}

let dv = divideInfinitely(8)
console.log(dv.next().value) // 1
console.log(dv.next().value) // 0.125
console.log(dv.next().value) // 0.015625