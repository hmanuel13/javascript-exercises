// get initial position
// x - column position
// y - row position
// z - direction taken to get into this square

//   z direction

// x x 3 x 2 x x x
// x 4 x x x 1 x x
// x x x k x x x x
// x 5 x x x 8 x x
// x x 6 x 7 x x x

// const board = [{x:2, y:5, z:2}]
let k = {
  x: 2, y: 3, z: 1
}
console.log(`\ninitial location is: (${k.x},${k.y})`)

const board = []
board.push(k)



while(board.length<64){
  k = getNext(k)
  board.push(k)
  console.log(k)
}