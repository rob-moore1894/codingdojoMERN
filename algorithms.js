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

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){
        let min = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[min] > arr[j]){
                min = j;
            }
        }
        if (min !== i){
            let tmp = arr[i]
            arr[i] = arr[min]
            arr[min] = tmp
        }
    }
    return arr; 
}

console.log("Selection Sort");
console.log(selectionSort([3,2,4,1,5,6,7,8]))

// Create a function that InsertionSort to sort an unsorted array in-place. What is the run-time complexity? What is the space complexity?


function insertionSort(arr){
    console.log("Starting array: " + arr);
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i]
        for(j = i-1; j >= 0 && arr[j] > temp; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = temp;
    }
    console.log("Sorted array: " + arr);
    return arr;
}

console.log("Insertion Sort")
insertionSort(randomArray(5, 10))

function randomArray(length, max){
    var arr = []
    for(let i = 0; i < length; i++){
        arr.push(Math.floor(Math.random() * Math.floor(max))) 
    }
    return arr; 
}
// Create function combineArrs(arr1,arr2) that sorts two already separately sorted arrays, placing the result back into the first provided array.
combineArrs = (arr1, arr2) => {
    let mergedArr = [];

    while(arr1.length > 0 && arr2.length > 0){
        console.log(arr1, arr2)
        arr1[0] < arr2[0] ? mergedArr.push(arr1.shift()) : mergedArr.push(arr2.shift())
        console.log(mergedArr)
    }
    return mergedArr.concat(arr1.slice().concat(arr2.slice()));
}

// console.log(combineArrs([2, 5, 10, 57], [9, 12, 13]));

// Use the combineArrs() function above to construct mergeSortArr() for an unsorted array.

function mergeSortArr (arr) {
    if (arr.length <= 1){
        return arr;
    }
    let mid = Math.floor(arr.length / 2),
    left = mergeSortArr(arr.slice(0, mid)),
    right = mergeSortArr(arr.slice(mid)); 

    return combineArrs(left, right); 
}

console.log(mergeSortArr(randomArray(9, 11)))

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

// You are given a string that may contain sequences of consecutive characters. Create a function to shorten a string by including the character, then the number of times it appears. For "aaaabbcddd", return "a4b2c1d3". If result is not shorter (such as "bb"=>"b2"), return the original string.

function stringEncode(str){
    var result = str.charAt(0);
    var count = 1; 
    if (str.length == 1){
        result += count; 
        return result; 
    } else {
        for(var i = 1; i < str.length; i++){
            if(str.charAt(i) != str.charAt(i-1)){
                result += count + str.charAt(i);
                count = 1
            } else {
                count++
            }
            if (i == str.length - 1) {
                result += count; 
            }
        }
        return result; 
    }
}

console.log(stringEncode("aaaabbcddd"))

// Given an encoded string (see above), decode and return it. Given "a3b2c1d3", return "aaabbcddd".

function stringDecode(str){
    let encoded = str.split('')
    let decodedArr = []

    for (let i = 0; i < encoded.length; i++){
        if(isNaN(encoded[i])){
            continue; 
        } else {
            let repeater = encoded[i]
            for (let j = 0; j < repeater; j++){
                decodedArr.push(encoded[i-1])
            }
        }
    }
    var decoded = decodedArr.join('')
    console.log(decoded)
}

//IsPangram
//Definition: A pangram is a sentence that uses every letter in the alphabet
//Given a string, return true if the sentence is a pangram, false if not

//Ex: The quick brown fox jumps over the lazy dog
//Ex: When zombies arrive, quickly fax judge Pat
//Ex: The five boxing wizards jump quickly
//Ex: My girl wove six dozen plaid jackets before she quit
const isPangram = (str) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    str = str.toLowerCase().replace(/\s/g, ""); 
    console.log(str)

    for(let i = 0; i < alphabet.length; i++)
        if(str.indexOf(alphabet[i]) === -1){
            console.log("Not a Pangram")
            return false; 
        }
    console.log("Pangram")
    return true;    
}

console.log(isPangram("My girl wove six dozen plaid jackets before she quit"));
console.log(isPangram("Young Bucks vs FTR")); 

// Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [2,2,7].
const intersectArrays = (arr1, arr2) => {
    let newArray = [];
    for (let i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) !== -1){
            newArray.push(arr1[i])
        }
    } 
    return newArray; 
}

console.log(intersectArrays([1,2,2,2,7], [2,2,6,6,7]))

let arr1 = [1,2,2,2,7]
let arr2 = [2,2,6,6,7]

let intersection = arr1.filter(x => arr2.includes(x)); 
console.log(intersection)

// Efficiently combine two already-sorted arrays into a new sorted array containing the multiset union. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].
const unionArrays = (arr1, arr2) => {
    var newArr = [];
    let i = 0; 
    let j = 0; 
    while(i < arr1.length || j < arr2.length){
        if(arr1[i] === arr2[j]){
            newArr.push(arr1[i]);
            i++
            j++
        } else if (arr1[i] < arr2[j]){
            newArr.push(arr1[i]);
            i++
        } else {
            newArr.push(arr2[j]);
            j++
        }
    }
    console.log(newArr)
}

unionArrays([1,2,2,2,7], [2,2,6,6,7])

// Create a function dec2BinStr(value) that converts a number into a string representing that number in binary notation. For this challenge, do not use the (very convenient) toString function. For example, given the value 35, the function should return "0b100011".

const dec2BinStr = (value) => {
    let bin = 0;
    let rem, i = 1, step =1;
    while (value != 0) {
        rem = value % 2; 
        console.log(`Step ${step++}: ${value}/2, Remainder = ${rem}, Quotient = ${parseInt(value/2)}`)
        value = parseInt(value / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}

dec2BinStr(35)

// Create a function dec2HexStr(value) that converts a number into a string representing that number in hexadecimal notation. For this challenge, do not use the (very convenient) toString function. For example, given the value 108, the function should return "0x6C".

const dec2HexStr = (value) => {
    var hexObj = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };
    var result = [];
    while (value > 0) {
        result.push(value % 16);
        console.log(result)
        value = Math.floor(value / 16);
    }
    result = result.reverse();
    result = result.map(val => val >= 10 ? hexObj[val] : val);
    var hex = result.join('');
    console.log("Hexadecimal number: 0x" + hex);
}

dec2HexStr(125)