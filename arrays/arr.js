const arr = ["angola", "belgium", "chile", "denmark", "ethiopia"]

console.log(arr)
console.log('arr.splice(1,1)')
arr.splice(1,1)
console.log(arr)
console.log('arr.splice(1,0,\'Brazil\'\)')
arr.splice(1,0,'brazil')
console.log(arr)

console.log('\nbracket notation')
console.log('arr[1]=\'bolivia\'')
arr[1]='bolivia'
console.log(arr)

arr.forEach(function(item,index){
  console.log(`${index+1} ${item}`)
})