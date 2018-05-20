let name = ' Hilary Manuel '

// lenght property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name)

// includes method

let password = 'abcqo2031jpasswords8'
console.log(password.includes('password'))

// trim
console.log(name.trim())

// Challenge are

// isValidPassword
// length is more than 8 and doesn't contain the word password

// let isValidPassword = function(password){
//   return (password.length < 8 || password.includes('password')) ? false : true
// }

let isValidPassword = function(password){
  return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpasswordasd'))
