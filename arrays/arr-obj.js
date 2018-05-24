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
note5 = note4
notes.push(note1,note2,note3,note4)

const index = notes.findIndex(function(note, index){
  return note.title === 'trip 3'
})

console.log(index)