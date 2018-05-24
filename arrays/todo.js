const todos = [
  'design a new website',
  'create a new design palette',
  'study javascript algorithms',
  'study bash scripting',
  'study rust programming',
  'discover adobe xd',
  'study bootstrap'
]

// console.log(`\nYou have ${todo.length} ${(todo.length == 1 ? 'item' : 'items')} to do.`)
// console.log(`first item: ${todo[0]} \nsecond to last item: ${todo[todo.length-2]}`)

// remove the third item
// add a new item to the end
// remove the first item from the list

// todo.splice(2,1)
// todo.push('study javascript algorithms')
// todo.shift()
// console.log(todo)

// format: 1. The first item

// todos.forEach(function(todo,index){
//   console.log(`${index +1}. ${todo}`)
// })

for(i=0; i<todos.length; i++){
  console.log(todos[i])
}

