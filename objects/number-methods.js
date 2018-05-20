// let num = 103.941

// console.log(num.toFixed(2))

// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

// let [min, max] = [10, 20]

// let randomNum = Math.floor(Math.random()*(max-min + 1)) + min
// console.log(randomNum)

// Challenge area
// guess number between 1 - 5

let makeGuess = function(guess){
  let guessResult = (guess == (Math.floor((((Math.random())*10)/2)+1)))
  guessResult ? guessResult = 'right!' : guessResult = 'wrong!'
  console.log(`Your guess is ${guessResult}`)
}

makeGuess(3)
