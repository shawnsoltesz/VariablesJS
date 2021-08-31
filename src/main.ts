import './style.css'

const numberOfCupsOfCoffee = 2

const fullName = 'Shawn James Soltesz'

console.log(
  `${fullName} drinks ${numberOfCupsOfCoffee} cups of coffee per day.`
)

const aboutMe = {
  fullName,
  luckyNumber: 4,
  favoriteMovies: ['Thelma and Louise', ' Shrek', ' and BAPS'],
}

console.log(
  `Hello, my name is ${aboutMe.fullName}. My lucky number is ${aboutMe.luckyNumber} and three of my favorite movies are ${aboutMe.favoriteMovies}.`
)

let userName = prompt('What is your name?')

console.log(`Hi ${userName}, have a great day!`)

let firstNumber = prompt('Enter a number.') || '0'
let secondNumber = prompt('Enter a second number.') || '0'

let firstOperand = parseFloat(firstNumber)
let secondOperand = parseFloat(secondNumber)

let sum = firstOperand + secondOperand
let difference = firstOperand - secondOperand
let product = firstOperand * secondOperand
let quotient = firstOperand / secondOperand
let remainder = firstOperand % secondOperand

// Use console.log to present the user, in a meaningful way, each of the values for
// the sum, difference, quotient, product, and remainder variables. (e.g. perhaps one
// of your outputs is similar to If you add 4 and 5 you get 9 if 4 and 5 were the input)

console.log(`Recap: First number entered: ${firstNumber}. Second number entered: ${secondNumber}. 
Sum = ${sum}, Difference = ${difference}, Product = ${product}, Quotient = ${quotient}, Remainder = ${remainder}.`)

//*Adventure Mode*

const numbers = [
  36608, 24391, 33394, 28807, 42395, 49243, 26629, 21437, 46622, 16381, 39930,
  30638, 14945, 10436, 40246, 26156, 35586, 31524, 39838, 34104, 15705, 20038,
  27831, 43939, 44495, 35498, 23717, 27555, 25351, 17936, 42990, 42524, 41612,
  38153, 12787, 20267, 41649, 19355, 48082, 46063, 48265, 33342, 18666, 49952,
  39469, 27685, 31203, 36517, 12670, 27653, 11233, 40639, 36662, 34488, 28203,
  36650, 39745, 18637, 15463, 45652, 21234, 27221, 33979, 28759, 22297, 12036,
  17480, 16611, 13584, 21442, 41506, 38644, 15369, 23901, 40839, 37769, 22179,
  14772, 43974, 18020, 30841, 17488, 26417, 38781, 27676, 28460, 44107, 47087,
  14940, 46988, 25706, 46726, 47966, 16173, 18436, 13796, 31042, 23398, 35898,
  20836,
]

numbers.sort()

//Smallest
const smallestNumber = numbers[0]
console.log('The smallest number is', smallestNumber)

//Largest
const largestNumber = numbers[numbers.length - 1]
console.log('The largest number is', largestNumber)

//Sum
let sumArray = 0
numbers.forEach((el) => {
  sumArray += el
})
console.log('The sum of numbers is', sumArray)

//Average

let total = 0
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i]
}
let avgArray = total / numbers.length
console.log('The average of numbers is', Math.round(avgArray))

const stats = {
  smallest: smallestNumber,
  largest: largestNumber,
  sum: sumArray,
  average: Math.round(avgArray),
}

console.table({ stats })

//sumOfOdd

let sumOfOdd = 0
for (let arrayValue = 1; arrayValue <= 100; arrayValue++) {
  if (arrayValue % 2 == 1) sumOfOdd += arrayValue
}
console.log('The sum of all odd numbers is', sumOfOdd)

//countOfEven

for (let count = 0; count <= 100; count++) {
  count % 2 == 0
  // ? console.count(`${count} is even`)
  // : console.log(`${count} is odd`)
}

let countOfEven = 0
for (let arrayValue = 1; arrayValue <= 100; i++) {
  if (arrayValue % 2 == 0) countOfEven += arrayValue
}
console.log('The count of all even numbers is', countOfEven)
