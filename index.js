
function findMinAndRemoveSorted(array){
  let min = array[0]
  let mindex = 0
  for(let i = 0; i < array.length; i++){
    if(array.length === 1){
      
      return array[0]
      
    }
    if(array[i] < min){
      min = array[i]
      mindex = i
    }
  }
  
  array.splice(mindex, 1)
  return min
}

function merge(firstSubarray, secondSubArray){
  let sorted = []
  while(firstSubarray.length != 0 && secondSubArray.length != 0){
    if(firstSubarray[0] < secondSubArray[0]){
      sorted.push(findMinAndRemoveSorted(firstSubarray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray))
    }
  }
  return sorted.concat(firstSubarray).concat(secondSubArray)
}