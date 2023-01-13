"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result : " + num);
}
let combinedValues;
printResult(add(12, 13));
combinedValues = add;
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(30, 20, (num) => console.log(num));
