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
    console.log(sortedArray)
    for (let i in sortedArray){
        let addend = binarySearch(sortedArray, sum-sortedArray[i])
        console.log(`array[i]: ${array[i]}`)
        console.log(`addend: ${addend}`)
        if (!!addend && !nums.flat(Infinity).includes(array[i]) && !nums.flat(Infinity).includes(addend)){
            nums.push([sortedArray[i], addend])
        }
    }
    return nums
}

function binaryMatch(array, sum){
    return !!binarySearchTwoSum(array, sum).length ? true : false
}
