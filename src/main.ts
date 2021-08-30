import './style.css'

const numberOfCupsOfCoffee = 2

const fullName = 'Shawn James Soltesz'

const message = `${fullName} drinks ${numberOfCupsOfCoffee} cups of coffee per day.`

console.log(message)

const aboutMe = {
  fullName,
  luckyNumber: 4,
  favoriteMovies: ['Thelma and Louise', 'Shrek', 'BAPS'],
}

console.log(aboutMe)

let userName = prompt('What is your name?')

const userNameMessage = `Hi ${userName}, have a great day!`

console.table(userNameMessage)

let firstNumber = prompt('Enter a number.')
let secondNumber = prompt('Enter a second number.')
let firstOperand = parseFloat(firstNumber)
let secondOperand = parseFloat(secondNumber)

let sum = firstOperand + secondOperand
let difference = firstOperand - secondOperand
