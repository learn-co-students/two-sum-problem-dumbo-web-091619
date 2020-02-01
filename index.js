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
    let nums = []
    for(let i in array){
        let addend = sum - array[i]
        if (addend in numsObj){
            nums.push([addend, array[i]])
        }
        numsObj[array[i]] = i
    }
    return nums
}

let binarySearch = (array, target, start=0, end=array.length-1) => {
        let mid = Math.floor(start + (end - start)/2)
        switch(true){
        case array[mid] === target:
            return array[mid]
        case end - start === 0:
            return false
         case array[mid] > target:
            return binarySearch(array, target, start, mid)
         case array[mid] < target:
            return binarySearch(array, target, mid+1, end)    
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
