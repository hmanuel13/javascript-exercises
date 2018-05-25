const todos = []
todo1 = {text: 'design a new website', completed: true}
todo2 = {text: 'create a new design palette', completed: true}
todo3 = {text: 'study javascript algorithms', completed: false}
todo4 = {text: 'study bash scripting', completed: false }
todo5 = {text: 'study rush programming', completed: false}
todo6 = {text: 'discover adobe xd', completed: false}
todo7 = {text: 'study bootstrap', completed: false}

todos.push(todo1, todo2, todo3, todo4, todo5, todo6, todo7)


// Challenge area
// 1. convert array to array of objects -> text, completed
// 2. create function to remove a todo by text value

const deleteTodo = function (todos, todoText){
  const index = todos.findIndex(function(todo){
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })
  if(index > -1){
    todos.splice(index,1)
  }
}

deleteTodo(todos, 'Design a new website')

console.log(todos)

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
  
  
  // for(i=0; i<todos.length; i++){
  //   console.log(todos[i])
  // }
  

