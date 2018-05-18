// input grade and max score, then calculate grade and indicate letter equivalent
// Message format: 15/20 -> you got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let calcGrade = function(score = 0, maxScore = 0){
  let rawGrade = score/maxScore
  let letterGrade = 'F'
  if(rawGrade >= 0.9){
    letterGrade = 'A'
  }else if(rawGrade >= 0.8){
    letterGrade = 'B'
  }else if(rawGrade >= 0.7){
    letterGrade = 'C'
  }else if(rawGrade >= 0.6){
    letterGrade = 'D'
  }else{
    letterGrade = 'F'
  }

  return `\nYou got ${letterGrade == 'A' ? 'an' : 'a'} ${letterGrade} \(${(rawGrade*100).toFixed(2)}%\)!` 
}

let grade = calcGrade(489,500)
console.log(grade)