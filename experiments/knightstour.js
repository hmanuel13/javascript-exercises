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

let k = {x:2, y:5, z:1}

// plot the position
const board = []
board.push(k)
console.log(`initial location is: (${board[0].x},${board[0].y})`)

// get the next position
let getNext = function(next){

  switch(next.z){
    case 1: next.x+=2; next.y+=1;
    case 2: next.x+=1; next.y+=2
    case 3: next.x-=1; next.y+=2
    case 4: next.x-=2; next.y+=1
    case 5: next.x-=2; next.y-=1
    case 6: next.x-=1; next.y-=2
    case 7: next.x+=1; next.y-=2
    case 8: next.x+=2; next.y-=1
  }
  next.z++

return next
}

// populating the board
while(board.length<64){
  k = getNext(board[board.length-1])
  board.push(k)
  console.log(k)
}

// sort board here

// print board here