// function - input (argument), code, output (return value)

let greetUser = function(){
  console.log('Welcome user!')
}

greetUser()

let square = function(num){
  let result = num * num
  console.log(num + ' squared is ' + result.toFixed(2))
  return
}

square(3)
square(10)
square(2.5)
square(3.1415)
