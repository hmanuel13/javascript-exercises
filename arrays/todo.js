// create an array with five todos
// you have x todos
// print the first and second to last items -> eg. Todo: walk the dog

const todo = [
  'design a new website',
  'create a new design palette',
  'study javascript algorithms',
  'study bash scripting',
  'study rust programming',
  'discover adobe xd',
  'study bootstrap'
]

console.log(`\nYou have ${todo.length} ${(todo.length == 1 ? 'item' : 'items')} to do.`)
console.log(`first item: ${todo[0]} \nsecond to last item: ${todo[todo.length-2]}`)