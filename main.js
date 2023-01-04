        // *** Function Arrow Challenge ***

// [1] One Statment In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]






//Ch1
/* **************************************************** */
/*
// Regular Function
let names = function (...allName) {
    // Parameter ?
    return `String [${allName.join("] [")}] ==> Done`;
};
*/
// Arrow Function
let names = (...allName) => `String [${allName.join("] [")}] ==> Done`;


console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// String [Osama], [Mohamed], [Ali], [Ibrahim] ==> Done !
/* **************************************************** */


//Ch2
/* **************************************************** */
// [1] Replace ??? In Return Statment To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Insid The Arhument To Get The Output
/* **************************************************** */

let myNumbers = [20, 50, 10, 60];
// Arrow Function
// let calc = (one, two, ...nums) => `${one + two + +nums}`;

// Regular Function
let calc = function (one, two , ...num) {
    return `${one + two + +num}`;
} 
console.log(calc(10, myNumbers.shift(), myNumbers.shift())); //Output ==> // 80
/* **************************************************** */