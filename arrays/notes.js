
const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes)
notes.pop()
notes.push('new note')
console.log(notes)
notes.shift()
console.log(notes)
notes.unshift('unshifted note')
console.log(notes)
notes.push('mn1','mn 2','mn3')
console.log(notes)
console.log(`note length: ${notes.length}`)
notes.splice(1,1)
console.log('splicing at index 1, removing 1')
console.log(`note length: ${notes.length}`)
console.log(notes)
console.log('adding a new item by splicing')
notes.splice(1,0,'spliced in note')
console.log(notes)

console.log(notes.indexOf('new note'))