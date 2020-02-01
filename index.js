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

let binarySearch = (array, x, start=0, end=array.length-1) => {
        let mid = Math.floor(start + (end - start)/2)
        switch(true){
        case array[mid] === x:
            return array[mid]
        case end - start === 0:
            return false
         case array[mid] > x:
            return binarySearch(array, x, start, mid)
         case array[mid] < x:
            return binarySearch(array, x, mid+1, end)    
    }
}

function binarySearchTwoSum(array, sum){
    let nums = []
    let sortedArray = array.sort()
    for (let i in array.length){
        let siblingIndex = binarySearch(array, sum-array[i])
        if (siblingIndex >= 0){
            switch(true){
                case i > 0 && array[i-1] === arra[i]:
                    nums.push([array[i], array[siblingIndex]])
                case i < array.length - 1 && array[i+1] === arr[i]:
                    nums.push([array[i], array[siblingIndex]])
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
