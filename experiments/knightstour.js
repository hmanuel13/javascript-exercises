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

let k = {x:2, y:5, z:2}

// plot the position
const board = []
board.push(k)
console.log(board[board.length - 1].y + 2)
// board[board.length-1].y+=3
console.log(`initial location is: (${board[0].x},${board[0].y})`)

// determines wether the given position is valid
let isNotValidPos = function(v){
  // position is out of bounds
  if(v.x > 7 || v.x < 0 || v.y > 7 || v.y < 0 ) return true
  // position is occupied
  for(i=board[board.length-1]; i<board[board.length-1]; i++){
    if(board[i].x == v.x && board[i].y == v.y) return true
  }
  return false
}

// get the next position
let getNext = function(q){
  
  while(isNotValidPos(q))
  {  
    switch(q.z){
      case 1: q.x+=2; q.y+=1
      case 2: q.x+=1; q.y+=2
      case 3: q.x-=1; q.y+=2
      case 4: q.x-=2; q.y+=1
      case 5: q.x-=2; q.y-=1
      case 6: q.x-=1; q.y-=2
      case 7: q.x+=1; q.y-=2
      case 8: q.x+=2; q.y-=1
      default: 
      board.pop();
      q = board[board.length-1]
      q.z+=1
    }
  }

return q
}

// populating the board
while(board.length<64){
  k = getNext(board[board.length-1])
  board.push(k)
  console.log(board)
}

// sort board here

// print board here