// 1) GIVEN
// console.log(hello);                                   
// var hello = 'world';                                 

// AFTER HOISTING
// var hello;
// console.log(hello);
// hello = 'world'

// PREDICTION
// Nothing happens because 'world' is assigned after the console.log

// REWRITTEN WITH ES6
// console.log(hello);
// let hello = 'world';

// 2) GIVEN
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }                                 

// AFTER HOISTING
// var needle;
// needle = 'haystack';
// test();
// function test(){
    //     var needle;
    //     needle = 'magnet';
    //     console.log(needle)
// }

// PREDICTION
// Logs magnet
    
// REWRITTEN WITH ES6
// let needle = 'haystack';
// test();
// function test(){
//     let needle = 'magnet';
//     console.log(needle);
// }

// 3) GIVEN 
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// AFTER HOISTING
// var brendan; 
// brendan = 'super cool';
// function print(){
    // brendan = 'only okay'; 
    // console.log(brendan);
// }
// console.log(brendan);

// PREDICTION
// Logs super cool

// REWRITTEN WITH ES6
// const brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// 4) GIVEN 
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// AFTER HOISTING
// var food; 
// food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// PREDICTION
// Logs chicken then half-chicken

// REWRITTEN IN ES6
// let food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     let food = 'gone';
// }

//5) GIVEN 
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// AFTER HOISTING
// mean();
// console.log(food);
// var mean;
// mean = function(){
//     var food; 
//     food = 'chicken';
//     console.log(food);
//     food = 'fish';
//     console.log(food);
// }
// console.log(food)

// PREDICTION
// Interpreter Error at first console.log

// REWRITTEN IN ES6
// mean();
// console.log(food);
// let mean = function(){
//     food = 'chicken';
//     console.log(food);
//     let food = 'fish';
//     console.log(food);
// }
// console.log(food)

// 6) GIVEN
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// AFTER HOISTING
// var genre;
// console.log(genre);
// genre = 'disco';
// rewind();
// function rewind(){
//     var genre;
//     genre = 'rock';
//     console.log(genre);
//     genre = 'r&b';
//     console.log(genre);
// }
// console.log(genre);

// PREDICTION
// Interpreter Error at first console.log genre is not defined

// REWRITTEN IN ES6
// console.log(genre);
// let genre = 'disco';
// rewind();
// function rewind() {
//     genre = 'rock';
//     console.log(genre);
//     let genre = 'r&b';
//     console.log(genre);
// }
// console.log(genre);

// 7) GIVEN
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// AFTER HOISTING
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn(){
//     var dojo; 
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// PREDICTION
// Interpreter error: dojo is not declared as a variable
// ACTUALLY - came out blank (JS is so forgiving)

// REWRITTEN IN ES6
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn(){
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// 8) GIVEN
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// AFTER HOISTING
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo; 
//     dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// PREDICTION
// Error occurs when dojo is trying to change from object to string  

