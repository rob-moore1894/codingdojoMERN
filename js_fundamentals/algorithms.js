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

console.log(bubbleSort2([3,2,4,1,5,6,7,8]))
