//Spread Operator -
//create a list of vaccines and print
let vaccineList = ['Covid-19', 'Flu', 'Polio', 'Hepatitis']
console.log(...vaccineList)
//create doctor object and print his qualifications and other details using spread
let doctor = {
  name: 'Dr. John Doe',
  qualifications: ['MBBS', 'MD'],
  experience: '10 years',
  specialization: 'General Physician',
}
const { qualifications, ...rest } = doctor
console.log(...qualifications)
console.log(rest)

//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread
let vaccine = {
  name: 'Covid-19',
  doses: 2,
  price: '$100',
}

const doctorVaccine = { ...doctor, ...vaccine }
console.log(doctorVaccine)

//Rest Parameter -
//create a function which accepts start and end of number and generates a array of that size, [100....150]
function generateArr(startNum, endNum) {
  if (endNum <= startNum) return [startNum]
  else return [startNum, ...generateArr(startNum + 1, endNum)]
}
console.log(generateArr(100, 150))
console.log(generateArr(1, 10))

function generateArr2(startNum, endNum) {
  let numArr = []
  if (endNum <= startNum) return numArr.push(startNum)
  else {
    for (let i = startNum; i <= endNum; i++) {
      numArr.push(i)
    }
  }
  return numArr
}
console.log(generateArr2(100, 150))
console.log(generateArr2(1, 10))

//then use this array to pass as spread operator into a function named largeSum
//in largeSum we should accept the array in rest parameter (...arrayOfNumbers), and then add the numbers

function largeSum(...arrayOfNumbers) {
  return arrayOfNumbers.reduce((prevNum, currNum) => prevNum + currNum, 0)
}

console.log(largeSum(...generateArr(100, 150)))
console.log(largeSum(...generateArr2(100, 150)))

console.log(largeSum(...generateArr(1, 10)))
console.log(largeSum(...generateArr2(1, 10)))
