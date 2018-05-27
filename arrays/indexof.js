const notes = []

note1 = {title: 'My next trip', body: 'I would like to go to Spain'}
note2 = {title: 'Habits I\'d like to improve on', body: 'exercise'}
note3 = {title: 'Programming Language', body: 'Javascript'}

notes.push(note1,note2,note3,{},{})

// notes.forEach(function(item,index){
//     console.log(`${index + 1} ${item.title} : ${item.body}`)
// })

// console.log(notes.length)
// console.log(notes)
// console.log({} === {})

const index = notes.findIndex(function(note, index){
  console.log(note)
  return note.title === 'Programming Language'
})

console.log(index)
