/*var date = new Date();

//console.log(date.getFullYear()); // 2023

//console.log(date.getMonth() + 1); // 0 + 1 = 1

//console.log(date.getDate()); // 2 (02.01.2023)

//console.log(date.getHours()); // 19 (19:20)

//console.log(date.getMinutes()); // 23 (19:23)

//console.log("Vaqt: " + date.getHours() + ":" + date.getMinutes()); // 19:25

date.setHours(23);
date.setMinutes(23); // 2.01.2023-23:23 - yani o'zi belgilash
console.log("Hozirgi kunning vaqti: " + date.getDate() + "." + date.getMonth() + 1 + "." + date.getFullYear() + "-" + date.getHours() + ":" + date.getMinutes()); // 2.01.2023-20:49

*/

/*var arr = [5, 7, 8, 9];
console.log(arr.join("|||")); // 5|||7|||8||9*/

//var arr = [21, 12, 65, 14, 81, 54];
 //console.log(arr.sort()); // [12,14,21,54,65,81]
//console.log(arr.reverse().join(", ")); // 54,81,14,65,12,21
//console.log(arr.reverse()); // [54,81,14,65,12,21]

var arr = [21, 12, 65, 14, 81, 54];

var qoshtirnoq = arr.reverse().join(", ");
console.log(qoshtirnoq.split(", ")); // ["54", "81", "14", "65", "12", "21"]


class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }
    info() {
        console.log("odam: " + this.name + ". yoshi: " + this.age);
    }
}

var alex = new Person('Alex', 45, true);
var bob = new Person('Bob', 23, false);

alex.info();
bob.info();
/*
var miranda = new Person('Miranda', 47, true);
var solvadorpennarial = new Person('Solvadorpennaria', 68, true);
var marcus = new Person('Marcus', 15, false);
*/
/*console.log(alex.name); // true
console.log(bob.age); // 23
console.log(miranda.name); // miranda
console.log(solvadorpennarial.happiness); // true
console.log(marcus.age); // 15*/



