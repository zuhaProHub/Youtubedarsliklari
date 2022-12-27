/*
// 1
var num = 5;
console.log("hisoblash : " +num); // hisoblash : 5

// 2
var num = 5;
console.log("hisoblash: " + num + "."); // hisoblash: 5.

// 3
var num = 5;
num = 7;
console.log("hisoblash: " + num + "."); // hisoblash: 7.

--END--
*/


/*
// 1
var num_1 = 15;
var num_2 = 7;

var res = num_1 - num_2;
console.log("hisoblash: " + res); // 8
console.log("hisoblash: " + (num_1 - num_2)); // 8

// 2
var num_3 = 5;
num_3 = num_3 + 7;
console.log("hisoblash: " + num_3); // 12

var num_3 = 5;
num_3++;
console.log("hisoblash: " + num_3); // 6


var num_3 = 5;
num_3--;
console.log("hisoblash: " + num_3); // 4


var str_1 = 12;
var str_2 = 2;

console.log("javob: " + (str_1 + str_2)); // 14

var str_1 = "12";
var str_2 = "2";

console.log("javob: " + (str_1 + str_2)); // 122

var str_1 = "AsusTuf";
var str_2 ="GamingX17";

console.log("javob: " + (str_1 + str_2)); // javob: AsusTufGamingX17

---END
*/

/*
// 1
console.log("Math: " + Math.min(5,222,34,67,813,3,78162)); // Math: 3
console.log("Math: " + Math.max(5,222,34,67,5462335,813,3,78162)); // Math: 5462335

// 2
==  teng ;
!=  teng emas;
>=  katta va teng;
<=  kichik va teng;

        if
var number = 15;
if(number > 5) {
    console.log("ok");
}                        // ok

var number = 15;
if(number == 15); {
    console.log("ok");
}                       // ok


        if - else
var number = 15;
if(number != 15) {
    console.log("ok");
} else {
    console.log("yoq!");
}                          // yo'q


var number = 15;
if(number == 15) {
    console.log("ok");
} else {
    console.log("yoq!");
}                         // ok


        else - if
var number = 15;
if(number == 5) {
    console.log("ha");
} else if(number < 10) {
    console.log("yoq!");
} else if(number == 7) {
    console.log("teng emas 15 bilan!");
} else if(number >= 15) {
    console.log(">= 15!");
} else {
    console.log("Ahmoq");
}                          // >= 15!    


// 3

|| - yoki;
&& - va;

var number = 15;
var isHasHouse = true;

if(number == 5 || isHasHouse == true) {
    console.log("ha");
} else if (number < 10) {

}                         // ha - sababi ||


var number = 15;
var isHasHouse = true;

if(number == 5 && isHasHouse == true) {
    console.log("ha");
} else if (number < 10) {
    console.log("haa!");
} else if (number == 7) {
    console.log("7!");
} else if(number > 15) {
    console.log(">15!");
} else {
    console.log("ELSE!");
}                         // ELSE - 
                          // sabab: agar number == 15 && isHasHouse == true - "ha"

// 4
var qator = "word";

switch(qator) {
    case "4":
        console.log("hisoblash uchun son 4");
        break;
    case "20":
        console.log("hisoblash uchun son 20");
        break;
    case "word":
        console.log("hisoblash uchun son <word>");
        break;
    default:
        console.log("Default");
        break;
}                             // hisoblash uchun son <word> 
    
// if- else : raqamlarni katta kichik
// switch : aniq sonlar qo'yyiladi, ya'ni ( >; <; =) mumkin emas!

--END
*/

/*
//#7 MAssiVE 
var arr = [5, true, "qator", 8, 0, -100];
console.log(arr[4]);     // 0

var arr = [5, true, "qator", 8, 0, -100];
arr[2] = "qator mas joy";
console.log(arr[2]);    // qator mas joy


var arr = [5, true, "qator", 8, 0, -100];
console.log(arr.length); // 6

var matrix = [
    [4,6,7], ["Invoker",3,6], [0, -100]
];
matrix[1][0]="Princess of the moon";
console.log(matrix);

--END
*/



/*
//#8 Tsikli
--FOR--;
for(var i = 100; i > 5; i /= 2) {
    console.log(i);
}                  // 100, 50, 25, 12.5, 6.25

for(var i = 100; i > 3; i /= 2) {
    console.log(i);
}                  // 100, 50, 25, 12.5, 6.25, 3.125


--While--
var j = 1000; 
while(j > 100) {    // j > 400  --> 1000, 900, 800...500, 400
    console.log(j);
    j-=100;
}           // 1000, 900, 800, 700.....200, 100

--Do While--
var x = 100;
do {
    console.log(x);
    x++;
} while (x < 50);   //


for(var i = 10; i <= 20; i +=2) {
    if(i > 15)
    break;      // breakdan keyin ish to'xtatiladi
    console.log(i);
}                  // 10, 12, 14. if(i > 20) -> 10,12,14,16,18,20

for(var i = 10; i <= 20; i++) {
    if(i > 15)
    break;
    console.log(i);
}                   // 10,11,12,13,14,15

for(var i = 10; i <= 20; i++) {
    if(i % 2 == 0)
    continue;
    console.log(i);
}                  // 11,13,15,17,19
// % - qoldiq. Continue-farqi, tsikldan chiqmaydi -break-ga oxshab, bizlarga 

--END
*/


/*
Massivelar bilan ishlash

var arr = [5,2,4,8,10, "qator"];
for(var i = 0; i < arr.length; i++) {
    console.log("Element " + i + ":" + arr[i]);
}    //Element 0 : 5; Element 1 : 2; ... Element 5 : qator;

var arr = [5,2,4,8,10, "qator"];
for(var i = 0; i < arr.length; i++) {
    console.log("Element " + (i + 1) + ":" + arr[i]);
}   //Element 1 : 5; Element 2 : 2; ... Element 6 : qator;

var arr = [5,7,3,5,9,91];
for(var i = 0; i < arr.length; i++) {
    arr[i] *= 2;
    console.log("Element " + (i + 1) + ":" + arr[i]);
} // Element 1 : 10; Element 2 : 14; ... Element 6 : 182

--END
*/






