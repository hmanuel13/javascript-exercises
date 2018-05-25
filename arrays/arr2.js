const notes = []

note1 = {
  title: 'My next trip',
  body: 'To Argentina'
}
note2 = {
  title: 'My future trip',
  body: 'To Reykjavik'
}
note3 = {
  title: 'trip 3',
  body: 'To Spain'
}
note4 = {}
note5 = {}

notes.push(note1, note2, note3, note4, note5)

const findNote = function(notes, noteTitle){
  return notes.find(function(note,index){
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}
// const findNote = function (notes,noteTitle){
//   const index = notes.findIndex(function(note,index){
//     return note.title.toLowerCase() === noteTitle
//   })
//   return notes[index]
// }

const note = findNote(notes, 'my next trip')
console.log(note)