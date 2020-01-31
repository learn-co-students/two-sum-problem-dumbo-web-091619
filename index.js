function bruteForceTwoSum(array, sum){
    let nums = []
    for(let x in array){
        for(let y in array){
            if (array[x] + array[y] === sum){
                        if(!!nums.length){ 
                            if (!nums.flat(Infinity).includes(array[x]) && !nums.flat(Infinity).includes(array[y])) {
                            nums.push([array[x], array[y]])
                        } 
                    } else {
                        nums.push([array[x], array[y]])
                    }
                }
            }
       }
   return nums
}

// let binarySearch = (array, x, start, end) => {
//     if(start > end){
//         return false
//     }

//     let mid = Math.floor((start + end) / 2)

//     if (array[mid] === x){
//         return true
//     }

//     if (array[mid > x]){
//         return binarySearch(array, x, start, mid-1)
//     } else {
//         return binarySearch(array, x, mid+1, end)
//     }
// }

function binarySearchTwoSum(array, sum){
    let sortedArray = array.sort()
    let nums = []
    for(let x in sortedArray){
        for(let y in sortedArray){
            if (sortedArray[x] + sortedArray[y] === sum){
                        if(!!nums.length){ 
                            if (!nums.flat(Infinity).includes(sortedArray[x]) && !nums.flat(Infinity).includes(sortedArray[y])) {
                            nums.push([sortedArray[x], sortedArray[y]])
                        } 
                    } else {
                        nums.push([sortedArray[x], sortedArray[y]])
                    }
                }
            }
       }
   return nums
}

function binaryMatch(array, sum){
    for(let x = 0; x < array.length; x++){
        for(let y = 0; y < array.length; y++){
            if(array[x] + array[y] === sum){
                return true
                }
            }
       }
   return false
}

function hashTwoSum(array, sum){
    let numsObj = {}
    let sumNumsArray = []
    for(let eachNum in array){
        let num2 = sum - array[eachNum]

        if (num2 in numsObj){
            sumNumsArray.push([num2, array[eachNum]])
        }
        numsObj[array[eachNum]] = eachNum
       }
   return sumNumsArray
}