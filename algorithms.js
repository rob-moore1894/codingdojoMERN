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

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], 
        i = left, 
        j = right; 
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); 
        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }
        if (index < right) { 
            quickSort(items, index, right);
        }
    }
    return items;
}

// Given a string of words (with spaces, tabs and linefeeds), returns an array of words. Given "Life is not a drill!" return ["Life", "is" "not", "a", "drill!"].

function strToArray(str){
    return str.split(" ")
}

console.log(strToArray("Life is not a drill!"))

// Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence. Given "This is a test", return "test a is This".

function reverseString(str){
    return str.split(" ").reverse().join(" ")
}

console.log(reverseString("This is a test"))

var testString = "life is not a drill!"

function stringToArray(string){
    newArr = [];
    for(var i = 0, j = 0; i<string.length; i++){
        if (string[i+1] == " " || i == string.length-1){
            const word = string.slice(j,i+1);
            newArr.push(word);
            j = i+2; 
        }
    }
    return newArr;
}

stringArr = stringToArray(testString);
console.log(stringArr);

function wordReverse(str) {
    let word = stringToArray(str);
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i] + " ";
    }
    return reversed;
}

console.log(wordReverse(testString));

// Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that amount. Example: given ("Boris Godunov",5), you should return "dunovBoris Go".
function rotate(str, int){
    arr = str.split('')
    for (let i = arr.length-1; i > arr.length-1-int; i--){
        arr.unshift(arr.pop())
    }
    newStr = arr.join('')
    console.log(newStr)
    return newStr
}

rotate("Boris Godunov",5)

// Create the function isRotation(str1,str2) that returns whether the second string is a rotation of the first. Would you change your implementation if you knew that the two were usually entirely unrelated?
function isRotation(str1, str2){
    if(str1.length == str2.length){
        for(let i = 0; i < str1.length; i++){
            let test = rotate(str1, i)
            if (test == str2){
                return true; 
            }
        }
    }
    return false;
}

console.log(isRotation("str1", "1str")); // true
console.log(isRotation("str1", "str")); // false

// Remove duplicate characters (case-sensitive) including punctuation. Keep only the last instance of each character. Given "Snaps! crackles! pops!", return "Snrackle ops!".

removeDup = (str) => {
    var new_str = "";
    var count = true;
    for (var i = str.length-1; i >= 0; i--){
        if (i == str.length-1){
            new_str = str[i] + new_str;
        }
        else{
            for (var j = 0; j < new_str.length; j++){
                if (str[i] === new_str[j]){
                    count = false;
                }
            }
            if (count == true){
                new_str = str[i] + new_str;
            }
            else{
                count = true;
            }
        }
    }
    console.log(new_str);
    return new_str
}