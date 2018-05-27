// this is a test algoritm I'm using to solve knight's tour
// it is modified to make it much simpler
// the test piece starts at column 1, row 1
// the test piece can only move forward, backward, up or down

// get initial position
// x - column position
// y - row position
// z - direction taken to get into this square

//   z direction

// x x x x x x x x
// x x x 2 x x x x
// x x 3 t 1 x x x
// x x x 4 x x x x
// x x x x x x x x

let t = {
  x: 1, y: 1, z: 1
}
console.log(`\ninitial location is: (${t.x},${t.y})`)

const board = []
board.push(t)

let isNotValid = function(v){

  if(v.x < 1){t.x = 1; t.z++; return true}
  if(v.x > 8){t.x = 8; t.z++; return true}
  if(v.y < 1){t.y = 1; t.z++; return true}
  if(v.y > 8){t.y = 8; t.z++; return true}

  return false
}

let getNext = function(){

  do{
    switch(t.z){
      case 1: t.x++; break;
      case 2: t.y++; break;
      case 3: t.x--; break;
      case 4: t.y--; break;
      default: t.z = 1
    }
  }while(isNotValid(t))

  return t
}

while(board.length<64){
  getNext()
  board.push(t)
  console.log(t)
}

console.log(`final array size = ${board.length}`)