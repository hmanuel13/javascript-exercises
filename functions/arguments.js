//multiple arguments

let add = function(a, b, c){
  return a + b + c
}

let result = add(10, 13, 19)
console.log(result)

// Default arguments

let getScoreText = function(name = 'Anonymous', score = 0){
  return 'Name:  ' + name + '\nScore: ' + score
}

let scoreText = getScoreText('Hilary', 99)
console.log(scoreText)

// Challenge area
// total, tipPercent .2 default

let pay = function(bill, tipRate = .2){
  return 'Your bill is $' + bill + ' and your tip is $' + (bill*tipRate).toFixed(2)
}

let payment = pay(67.75)
console.log(payment)