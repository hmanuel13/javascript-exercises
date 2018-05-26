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

let isOutOfBounds = function(q){

  if(q.z < 64) return true
  return false
}

let isOccupied = function(r){
  
  return false
}

// check if location is valid or input a new one
let getNext = function(q){
  
  let temp = board[board.length-1]

  while(isOutOfBounds(temp) || isOccupied(temp)){
      switch(temp.z){
      case 1: temp.x+=2; temp.y+=1; temp.z +=1; break
      case 2: temp.x+=1; temp.y+=2; temp.z +=1; break
      case 3: temp.x-=1; temp.y+=2; temp.z +=1; break
      case 4: temp.x-=2; temp.y+=1; temp.z +=1; break
      case 5: temp.x-=2; temp.y-=1; temp.z +=1; break
      case 6: temp.x-=1; temp.y-=2; temp.z +=1; break
      case 7: temp.x+=1; temp.y-=2; temp.z +=1; break
      case 8: temp.x+=2; temp.y-=1; temp.z +=1; break
      default: temp.z = 1; console.log(temp)
    }
  }
  return temp
}

while(board.length<64){
  k = getNext(k)
  board.push(k)
  console.log(k)
}