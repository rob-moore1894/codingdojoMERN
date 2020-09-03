function bubbleSort(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[j] > array[j+1]){
                // swap
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array; 
}

console.log("Bubble Sort 1")
console.log(bubbleSort([8, 6, 7, 3, 4]))

function bubbleSort2(arr) {
    var noSwap;
    for (var i = arr.length; i > 0; i--) {
        noSwap = true
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwap = false
            }
        }
        if(noSwap) break
    }
    return arr
}

console.log("Bubble Sort 2")
console.log(bubbleSort2([3,2,4,1,5,6,7,8]))

// Create a function that InsertionSort to sort an unsorted array in-place. What is the run-time complexity? What is the space complexity?

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i]
        for(j = i-1; j >= 0 && arr[j] > temp; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = temp;
    }
    console.log(arr);
    return arr;
}

console.log("Insertion Sort")
insertionSort([3,2,4,1,5,6,7,8])

// Create function combineArrs(arr1,arr2) that sorts two already separately sorted arrays, placing the result back into the first provided array. Can you work completely in-place?
combineArrs = (arr1, arr2) => {
    let mergedArr = [];

    while(arr1.length > 0 && arr2.length > 0){
        console.log(arr1, arr2)
        arr1[0] < arr2[0] ? mergedArr.push(arr1.shift()) : mergedArr.push(arr2.shift())
        console.log(mergedArr)
    }
    console.log(mergedArr)
    mergedArr.concat(arr1.slice().concat(arr2.slice()));
    console.log(mergedArr)
    return mergedArr
}

combineArrs([1,3,5], [2,4,6])

// Use the combineArrs() function above to construct mergeSortArr() for an unsorted array. What are the run-time and space complexities of your mergeSortArr solution?

function merge (arr1, arr2) {
    let result = []
    let i = 0 
    let j = 0
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] > arr2[j]) {
            result.push(arr2[j])
            j++
        } else {
            result.push(arr1[i])
            i++
        }
    }
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
}

function supaSlice(arr){
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = supaSlice(arr.slice(0,mid))
    let right = supaSlice(arr.slice(mid))
    return merge(left, right)
}

console.log(supaSlice([5,3,4,2,2,5,1,3]))

// Partition unsorted array in-place. Use arr[0] as pivot val; return idx of pivot. Input [5,4,9,2,5,3] becomes [4,2,3,5,9,5], return 4.

function partitionArray(arr){
    let p = arr[arr.length - 1];
    var i = -1; 
    for (let j = 0; j < arr.length; j++){
        if (arr[j] <= p){
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]]; 
        }
        else {
            continue; 
        }
    }
    console.log(arr)
    return p; 
}
console.log(partitionArray([5,4,9,2,5,3]))

function partition(arr,p){
    for (var j = 0, i = -1, piviot = arr[p]; j<arr.length; j++){
        if (arr[j] <= piviot){
            i++
            [arr[j], arr[i]]= [arr[i], arr[j]];
        }
    }
    [arr[p], arr[i]]= [arr[i], arr[p]];
    console.log(arr);
    return i;
}

var index = partition([5,4,9,2,5,3],0)
console.log(index)