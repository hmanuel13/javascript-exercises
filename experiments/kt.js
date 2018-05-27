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

let k = {
  x: 2, y: 3, z: 1
}
console.log(`\ninitial location is: (${k.x},${k.y})`)

const board = []
board.push(k)

// determines if the position is not valid
// if position is not valid, return the next position
let isNotValidPos = function(r){

  if(r.x < 0 || r.x > 7 || r.y < 0 || r.y > 7){
    // board[board.length-1].z++
    return true
  }

  if(r.x == board[board.length-1].x && r.y == board[board.length-1].y){
    // board[board.length-1].z++
    return true
  }

  return false
}

let getNext = function(q){
  
  do{
    q.z += 1
    switch(q.z){
      case 1: q.x+=2; q.y+=1; break
      case 2: q.x+=1; q.y+=2; break
      case 3: q.x-=1; q.y+=2; break
      case 4: q.x-=2; q.y+=1; break
      case 5: q.x-=2; q.y-=1; break
      case 6: q.x-=1; q.y-=2; break
      case 7: q.x+=1; q.y-=2; break
      case 8: q.x+=2; q.y-=1; break
      default:{
        // board.pop()
      }
      console.log(q)
    }
  }while(isNotValidPos(q))

  return q
}

while(board.length<64){
  k = getNext(k)
  board.push(k)
  console.log(k)
}

console.log(`final array size = ${board.length}`)