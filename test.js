
const given = [10,15,3,7]
const SHOULD_SUM_EQUALS = 17
const expect = {
  value: 10,
  index: 0,
  shouldUse: true
}

function processData(arr, k) {
   const result = new Map()
   for (let i = 0; i < arr.length; i++) {
     console.log(arr, k, arr.length)
     
     if(arr[i] + k !== SHOULD_SUM_EQUALS) return
     result.set('value' ,arr[i])
     result.set('index' ,i)
     result.set('shouldUse', true)
   }

  console.log(result)
  return result
}
processData(given, 7)
  