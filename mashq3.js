// 1
function info(word) {
    console.log(word + "!");
}
info("Salom");



//2
function summa(a, b) {
    var res = a + b;
    info(res);
}
summa(5, 7);


function summa(a, b) {
    var res = a + b;
    info(res);
}
summa(5, 7); // 12!



//3
function info(word) {
    console.log(word + "!");
}
info("Salom");

function summa(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
    sum += arr[i];

    console.log(sum);
}
var array = [6, 8, 1];
summa(array);



//4
function summa(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
    sum += arr[i];

    console.log(sum);
}
var array = [6, 8, 1];
var array_2 = [61, 80, 11];
var array_3 = [66, 88, 10];


summa(array);
summa(array_2);
summa(array_3);



//5
function summa(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
    sum += arr[i];

    return sum;
}
var array = [6, 8, 1];
var array_2 = [61, 80, 11];
var array_3 = [66, 88, 10];


summa(array);
summa(array_2);
summa(array_3);



//6
function summa(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
    sum += arr[i];

    return sum;
}
var array = [6, 8, 1];
var array_2 = [61, 80, 11];
var array_3 = [66, 88, 10];


var res = summa(array);
console.log("Hisoblash: " + res);



//7
function summa(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
    sum += arr[i];

    return sum;
}
var array = [6, 8, 1];
var array_2 = [61, 80, 11];
var array_3 = [66, 88, 10];


var res = summa(array);
res *= 2;
console.log("Hisoblash: " + res);




// 8.1 GLOBAl
var num = 10;  // bu globalniy bo'ldi

function info() {
    console.log(num);
}

info(); // 10

// 8.2 LOCAL
function info() {

    var num = 10; // endi bu localniy yani shu function ishida ishlidi
    console.log(num);
}

info();   // 10

// 8.3 LOCAL && GLOBAL
var num = 10;   // global
function info() {
    var num = 20; // local
    console.log(num);
}

info();

console.log(num); // 20, 10 - yani bu yerda local va global ishlatildi 
