/**  
console.log(23 + 97 );
console.log(1 + 2 + 3 + 4 + 5 + 6);
console.log((4 + 6+ 9) / 77);

let a = 10;
console.log(a);
a = 20
console.log(a);

let b = 7 * a;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);

*/

function add(number){
    return number + 7;
}

console.log(add(100));

function multiply(number1, number2){
    return number1 * number2;
}

console.log(multiply(2, 3));

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBCD"));

function lastLetter(string){
    return string.charAt(string.length - 1);
}

console.log(lastLetter("abcd"));