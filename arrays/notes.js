
// const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes)
// notes.pop()
// notes.push('new note')
// console.log(notes)
// notes.shift()
// console.log(notes)
// notes.unshift('unshifted note')
// console.log(notes)
// notes.push('mn1','mn 2','mn3')
// console.log(notes)
// console.log(`note length: ${notes.length}`)
// notes.splice(1,1)
// console.log('splicing at index 1, removing 1')
// console.log(`note length: ${notes.length}`)
// console.log(notes)
// console.log('adding a new item by splicing')
// notes.splice(1,0,'spliced in note')
// console.log(notes)

// console.log(notes.indexOf('new note'))

const notes = []

note1 = {title: 'My next trip', body: 'I would like to go to Spain'}
note2 = {title: 'Habits I\'d like to improve on', body: 'exercise'}
note3 = {title: 'Programming Language', body: 'Javascript'}
note4 = {title: 'Cat Name', body: 'Grumpy Cat'}
note5 = {title: 'Home Town', body: 'Mandaon'}

notes.push(note1, note2, note3, note4, note5)

const findNote = function(notes, noteTitle){
  return notes.find(function(note, index){
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

// const findNote = function(notes, noteTitle){
//   const index = notes.findIndex(function(note, index){
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }

const note = findNote(notes, 'My Next Trip')
console.log(note)