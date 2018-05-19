let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A People\'s History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function(book){
  return {
    summary: `\n${book.title} by ${book.author}`,
    pageCountSummary: `\n${book.title} is ${book.pageCount} pages long.`
  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary)

// Challenge Area
// Create function - take fahrenheit in - return object with all three values
// celsius = ((fahrenheit-32)*5)/9
// kelvin = celsius + 273.15

let convertFahrenheit = function(fahrenheit, display = false){
  let c = (((fahrenheit-32)*5)/9).toFixed(2)
  let k = ((((fahrenheit-32)*5)/9)+273.15).toFixed(2)
  
  if(display == true){
    console.log(`\n${fahrenheit}\xB0F, ${c}\xB0C, ${k} K`)
  }

  return {
    celsius: c,
    kelvin: k
  }
}

// method 1

let fahrenheitOne = 13
let convertedFahrenheitOne = convertFahrenheit(fahrenheitOne)

console.log(`\n${fahrenheitOne}\xB0F, ${convertedFahrenheitOne.celsius}\xB0C, ${convertedFahrenheitOne.kelvin} K`)

// method 2

convertFahrenheit(14,true)

// output
// 13°F, -10.56°C, 262.59 K
//
// 14°F, -10.00°C, 263.15 K