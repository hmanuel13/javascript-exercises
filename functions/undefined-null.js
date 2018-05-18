//undefined for variable
let name = 'Hilary'

if(name == undefined){
   console.log('Please provide a name') 
} else {
  console.log('the name is ' + name)
}

//undefined for functions arguments
//undefined as the function return default value
let square = function(num){
  console.log(num)
}

let result = square()
console.log(result)

//
let age = 27

//Null as assigned value
age = null

console.log(age)