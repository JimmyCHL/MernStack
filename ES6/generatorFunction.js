// Generator - functions are special type of functions which can be invoked once and would yield the value
// for as many times as we need
// for as many times as we need
// return -marks the end of execution
// yield = is used to get the data on each function.next() call

function *NameFnc(params) {
    yield 'First Name';
    yield 'Second Name';
    yield 'Third Name';

    return "End of the function";

    yield 'Fourth Name'; // this line will not be executed as return is already executed

}

const name = NameFnc('params'); // first invocation needs to be done to initialize the data present in generator function.

console.log(name.next()); // { value: 'First Name', done: false }
console.log(name.next()); // { value: 'Second Name', done: false }
console.log(name.next()); // { value: 'Third Name', done: false }
console.log(name.next()); // { value: 'End of the function', done: true } - function returns the value and done is true
console.log(name.next()); // { value: undefined, done: true } - function returns the value and done is true

function getIncrements(incrementedValue = 0) {
    return incrementedValue+1
}

function *ShowpopupaltionIncremnt(baseValue) {
    var incrementedValue = getIncrements()

    console.log(baseValue + incrementedValue)

    yield {count : baseValue + incrementedValue} //when we call for first yield

    incrementedValue = getIncrements(incrementedValue)

    yield {count : baseValue + incrementedValue} //when we call for first yield

    incrementedValue = getIncrements(incrementedValue)
    yield {count : baseValue + incrementedValue} //when we call for first yield

    //return means end of invocation
    return baseValue + incrementedValue
}

let populationPointer = ShowpopupaltionIncremnt(80000) //initializing with data

console.log(populationPointer.next()) //first yeild
console.log(populationPointer.next()) //second yeild
console.log(populationPointer.next()) //third yeild
//
console.log(populationPointer.next()) //returns from execution
//
console.log(populationPointer.next()) //no further yeild is done



//arithmaticCalculator using - generator function - (a,b),
//add, subtract, multiply, divide - all this we need to yield

//Arithmatic Calculator
function *arithmetic(num1, num2){

    yield console.log("Addition : " + (num1+num2));
    yield console.log("Subtraction : " + (num1-num2));
    yield console.log("Multiply : " + (num1*num2));
    yield console.log("Division : " + (num1/num2));

    return "Done";
}

let calObj = arithmetic(6,2);

calObj.next()
calObj.next()
calObj.next()
calObj.next()
console.log(calObj.next())
console.log(calObj.next())