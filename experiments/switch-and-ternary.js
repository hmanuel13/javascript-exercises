let next = {
  x: 5,
  y: 7,
  z: 1,
}

let isOnBoard = function(loc){
  switch(loc.z){
    case 1:  return ((loc.x+2<8)&&(loc.y+1<8))
  }
}

console.log(isOnBoard(next))