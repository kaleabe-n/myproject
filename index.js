const _ = require('lodash')

const arr = [3,2,1]
console.log("original array",arr)

console.log("chunck with 2",_.chunk(arr,2))

console.log("concat arrays",_.concat(arr, 2, [3], [[4]]))

console.log("sorted array",_.sortBy(arr))

console.log("filter odds",_.filter(arr,(num)=>num%2))

//debounce
const debouncer = _.debounce(()=>{console.log('debounced after 3 sec')},3000,{leading:false,trailing:true})
debouncer()

console.log("original array after oprations",arr)