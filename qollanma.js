/*Urok 2 . 
var str = 'abcde'; 
alert(str[0]); //выведем букву 'a' 
alert(str[1]); //выведем букву 'b' 
alert(str[4]); //выведем букву 'e'

1.1 
alert(60 * 60 * 24);
1.2 
                                                     +=, -=, *=, /=, ++,
var num = 1;                                                     var num = 1;              
num = num + 12;                                                  num += 12;
num = num - 14;                                                  num -= 14;
num = num * 5;                                                   num *= 5; 	
num = num / 7;                                                   num /= 7;
num = num + 1;                                                   num++;
num = num - 1;                                                   num--;
alert(num);                                                      alert(num);
*/

/*
Urok 3 . Задачи на основы работы с массивами и объектами
//Выведем фразу 'Привет, мир!': 
3.1
var arr = ['Привет, ', 'мир', '!']; 
var str = arr[0] + arr[1] + arr[2]; //в переменной text теперь лежит строка 'Привет, мир!' 
alert(str);
3.2
var arr = ['Привет, ', 'мир', '!']; 
arr[0] = 'Пока, '; //перезапишем нулевой элемент массива 
alert(arr); //посмотрим на массив и убедимся в том, что он изменился
' (то есть вместо слова 'Привет, ' будет 'Пока, ').
3.3 
var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'}; 
alert(obj['Коля']); //выведет 1000

3.4 Способы создания массива
Первый способ
var arr = [1, 2, 3, 4, 5];
Второй способ
var arr = []; 
arr[0] = 1; 
arr[1] = 2; 
arr[2] = 3; 
arr[3] = 4; 
arr[4] = 5;
3.5 Многомерный массив


var arr = { 
'ru':['голубой', 'красный', 'зеленый'], 
'en':['blue', 'red', 'green'], };
Решение: 
alert(arr['en'][1]); = red ; alert(arr['ru'][1]); = красный …
*/


/*
Urok 4 . if-else, switch-case
a == b	a равно b
a === b	a равно b и они одинаковы по типу
a != b	a не равно b
a !== b	a не равно b или a равно b, но ни разные по типу
a < b	a меньше b
a > b	a больше b
a < b	a меньше b
a <= b	a меньше или равно b
a >= b	a больше или равно b

4.1 
var num = 10; 
if (num == 10) { 
alert('Верно'); // Верно
} else {
 alert('Неверно'); 
}
4.2 

var min = 10; 
if (min >= 0 && min <= 14) { 
    alert('В первую четверть.'); // 'В первую четверть. ( 1 chi shunga qariydi agar 	bu bolmasa, pasga tushadi)
} 
if (min >= 15 && min <= 30) { 
    alert('Во вторую четверть.'); 
} 
if (min >= 31 && min <= 45) { 
    alert('В третью четверть.'); 
} 
if (min >= 46 && min <= 59) {
    alert('В четвертую четверть.'); 
}
4.2 – lang 
Решение через 2 if:
var lang = 'ru'; // agar bu yerda ‘ru’ tursa javob - ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
if (lang == 'ru') { 
   var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
} 
if (lang == 'en') { 
   arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']; 
} 
alert(arr);
Решение через switch-case:
var lang = 'ru'; // ‘ru’ tursa javob ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
switch (lang) { 
     case 'ru': 
var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
     break; 
     case 'en': 
arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']; 
     break; 
} 
alert(arr);
Решение через многомерный массив:
var lang = 'ru'; // ‘ru’ tursa javob : ['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс']
 var arr = { 
'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'], 
'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'], 
}; 
alert(arr[lang]);
*/


/*
Urok 5 . циклы while, for
5.1 – WHILE (<br> ko’rinishida 50 gacha jadval paydo bo’ladi)
var i = 1; 
while (i <= 50) { 
document.write(i + '<br>'); 
i++; 
}
For bilan: (FOR bu ham massive)
for (var i = 1; i <= 50; i++) { 
   document.write(i + '<br>'); 
}

var arr = [1, 2, 3, 4, 5]; 
for (var i = 0; i < arr.length; i++) { 
       document.write(arr[i] + '<br>'); 
}
result*arr= 1*2*3*4*5=120.)
var result = 1;                                var result = 1;                                         
var arr = [2, 3, 4, 5];                        var arr = [2, 3, 4, 5]; 
for (var i = 0; i < arr.length; i++) {         for (var i = 0; i < arr.length; i++) { 
result = result * arr[i];                           result = result * arr[i]; 
}                                              }
alert(result);                                 alert(result);

5.2 Цикл for-in
var obj = { 
'Минск': 'Беларусь',                  minsk
'Москва': 'Россия',              =    maskva
'Киев': 'Украина'                     kiyev
}; 
for (var key in obj) { 
alert(key); 
}
Agar: alert(obj[key]);- qilinsa – Belarus, Rossiya, Ukraina bo’ladi.
Agar: alert(key + ' - это ' + obj[key] + '.'); - qilinsa, Minsk eto Belorus bo’ladi va qolganlari ham.
*/


/*
Urok 6 . 
6.1 Работа с %
1) a = 10 и b = 3 : Найдите остаток от деления a на b
var a = 10; 
var b = 3; 
alert(a % b);
2) var a = 10; 
var b = 3; 
var rest = a % b; 
if (rest != 0) { 
   alert('Делится с остатком ' + rest); 
} else { 
   alert('Делится, результат деления: ' + (a / b)); 
}
*/


/*
Urok 7 . функции работы со строками

7.1 Поиск и замена
var str = 'aaa@bbb@ccc'; 
alert(str.replace('@', '!')); //получим 'aaa!bbb@ccc'

var str = 'aaa@bbb@ccc'; 
alert(str.replace('!', '@')); //получим 'aaa@bbb@ccc'

var str = 'aaa@bbb@ccc'; 
alert(str.replace(/@/g, '!'))//получим 'aaa!bbb!ccc'
7.2 Методы substr, substring, slice

Substr.
var str = 'aaa bbb ccc';
alert(str.substr(4, 3)); //substr(откуда отрезать, сколько отрезать)
решение :
alert(str.substr(4, 3)); // bbb (aaa b)- 4; (bbb) - 3
var str = '123 567 901';
alert(str.substr(5, 3)); // 67 ( откуда отрезать – 123(4)56-0123456; (5)
				       сколько отрезать – 67(8) (3)

Substring.
var str = 'aaa bbb ccc';
alert(str.substring(4, 7)); //substring(откуда отрезать, докуда отрезать)
решение :
alert(str.substring(4, 7)); // bbb
var str = '123 567 9ab';
alert(str.substring(2, 9)); // 3 567 9
alert(str.substring(2, a)); // 3 567 9ab

7.3  Slice
var str = 'aaa bbb ccc';
alert(str.slice(4, 7)); //slice(откуда отрезать, докуда отрезать)
решение :
1)	alert(str.slice(4, 7)); // bbb
2)	var str = '123 567 901';
alert(str.slice(4, 7)); // 567
3)	var arr = [‘a’, ‘b’, ‘c’, ‘d’, ‘e’];
var sub = arr.slice(0,2);
console.log(sub); // (2) [‘a’, ‘b’]

4)	var arr = [‘a’, ‘b’, ‘c’, ‘d’, ‘e’];
var sub = arr.slice(1);
console.log(sub); // (4) [‘b’, ‘c’, ‘d’, ‘e’]

5)	var arr = [‘a’, ‘b’, ‘c’, ‘d’, ‘e’];
var sub = arr.slice(1, -1);
console.log(sub); // (3) [‘b’, ‘c’, ‘d’]

7.4 Метод splice 

Метод splice удаляет или добавляет элементы в массив. Можно только удалять элементы, только добавлять или делать и то и другое одновременно. Метод очень универсальный и сложный для понимания.
1)	Давайте удалим элементы с первого, 3 штуки (это 'b', 'c' и 'd'):
var arr = ['1', '2', '3', '4', '5'];
arr.splice(1, 3);
(3) ['2', '3', '4']; 
console.log(arr); // (2) [‘1’, ‘5’]
2)	var arr = ['1', '2', '3', '4', '5'];
var del = arr.splice(1, 3);
console.log(sub); // (3) [‘2’, ‘3’, ‘4’] (o’chirildi)
3)	var arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(2, ‘1’, ‘2’, ‘3’);
console.log(arr); // (6) [‘a’, ‘b’, ‘2’, ‘3’, ‘d’, ‘e’]

4)	var arr = ['1', '2', '4', '4', '5', ‘6’, ‘7’, ‘8’];
arr.splice(2, 1, ‘3’);
console.log(arr); // (8) [‘1’, ‘2’, ‘3’, ‘4’, ‘5’, ‘6’, ‘7’, ‘8’]  - arr.splice(2, 1, ‘3’) – yani 2(4) ni udalit’ qilib shu yerga 1 ta element (3) ni qo’shib qoyish. Agar 1 ni – 0 qilganimizda shungda javob: ‘1’, ‘2’, ‘3’, ‘4’, ‘4’, ‘5’, ...!
Yani 2 chi massivedan(4) olib tashlab o’rniga 1 ta element yani 3 ni qo’yib 3, 4, 5, 6, 7, 8! Qilindi.

5)	Ana endi bu qo’shish (4 – ochirib qoshish edi)
var arr = ['1', '2', '8', '9', '10', '11'];
arr.splice(2, 0, ‘3’, ‘4’, ‘5’, ‘6’, ‘7’);
console.log(arr); // (11) ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

6)	Endi oxiridan o’chirish(udalit’) qilamiz.
var arr = ['1', '2', '3', '4', '5', '6'];
arr.splice(-2, 1); [‘5’]
console.log(arr); // (5) ['1', '2', '3', '4', '6']

var arr = ['1', '2', '3', '4', '5', '6', '8', '8', '9'];
arr.splice(-3, 1, '7');
console.log(arr); // (9) ['1', '2', '3', '4', '5', '6', '7', '8', '9']

7.5 - метода split
var str = '2025-12-31'; 
var arr = split('-'); 
alert(arr);//получим массив ['2025', '12', '31']
решение :
var str = '2025-12-31'; 
var arr = str.split(‘-‘);
var newStr = arr[2] + ‘/’ + arr[1] + ‘/’ + arr[0];
alert(newStr); // 31/12/2025
var str = ’12-2022-20’;
var arr = str.split(‘-‘);
var newStr = arr[2] + ‘/’ + arr[0] + ‘/’ + arr[1];
alert(newStr); // 20/12/2022
*/


/*
Urok 8 . работы с массивами
8.1-методом concat:  два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
var a = ['a', 'b', 'c']; 
var b = [1, 2, 3];
решение :
//Вариант 1:
var c = a.concat(b);
alert(c); // ['a', 'b', 'c', 1, 2, 3]
//Вариант 2:
var c = b.concat(a);
alert(c); // [1, 2, 3, 'a', 'b', 'c']
8.2 - методом push: Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1,2,3.
var arr = ['a', 'b', 'c'];
решение :
var arr = [‘a’, ‘b’, ‘c’];
arr.push(1, 2, 3);
alert(arr); // ['a', 'b', 'c', 1, 2, 3]
8.3 - Метод reverse изменяет порядок элементов в массиве на обратный
1) var arr = [‘a’, ‘b’, ‘c’];

arr.reverse();
console.log(arr);  // [‘c’, ‘b’, ‘a’]
2)var arr = [‘a’, ‘b’, ‘c’];
  Var res = arr.reverse();
  Console.log(res); // [‘a’, ‘b’, ‘c’];
3)  var str = ‘1234567890’;
var arr1 = str.split(‘’);
var arr2 = arr1.reverse();
var result = arr2.join(‘’);
console.log(result); // ‘0987654321’
4) var str = ‘1234567890’;
var result = str.split(‘’).reverse().join(‘’);
console.log(result); // ‘0987654321’
8.4- length
let str = ‘abcde’;
console.log(str.length); // 5
8.5- unshift
Метод unshift добавляет неограниченное количество новых элементов в начало массива. При этом исходный массив изменяется, а результатом возвращается новая длина массива.
1)	var arr = [‘a’, ‘b’, ‘c’, ‘d’, ‘e’]; 
arr.unshift(‘1’, ‘2’, ‘3’, ‘4’);
[9]
console.log(arr); // [9] ['1', '2', '3', '4', 'a', 'b', 'c', 'd', 'e']
2)	var arr = [‘a’, ‘b’, ‘c’, ‘d’, ‘e’];
var length = arr.unshift(‘1’, ‘2’);
console.log(length); // 7
8.6- pop massiv
(pop (a,b,c,d,e) yani oxiridagi [e] harfini olib tashlash uchun)
1) var arr = [‘a’, ‘b’, ‘c’, ‘d’, ‘e’];
arr.pop();
‘e’
console.log(arr); // [‘a’, ‘b’, ‘c’, ‘d’]
2) var arr = [‘a’, ‘b’, ‘c’, ‘d’, ‘e’];
var del = arr.pop();
‘e’
console.log(arr); // [‘a’, ‘b’, ‘c’, ‘d’]
3) var arr = [‘1’, ‘2’, ‘3’, ‘4’, ‘5’, ‘6’];
var result = [];

while (arr.length > 0) { // массив уменьшается в цикле пока не достигнет нуля
var first = arr.shift();
var last = arr.pop();

var str = first + last; // тут будет строка '16', потом '25', потом '34' 
result.push(str);
}
result = result.join(‘-‘);
console.log(result); // После цикла в result лежит массив 
	['16', '25', '34']. Сольем его в строку: 




8.7- shift
(shift (a,b,c,d,e) yani boshidagi [a] harfini olib tashlash uchun)

1) var arr = [‘a’, ‘b’, ‘c’, ‘d’, ‘e’];
arr.shift();
‘a’
console.log(arr); // [‘b’, ‘c’, ‘d’, ‘e’]
2)  var arr = [‘a’, ‘b’, ‘c’, ‘d’, ‘e’];
var elem = arr.shift();
console.log(elem);  // [a]

3)	var arr = [‘1’, ‘2’, ‘3’, ‘4’, ‘5’, ‘6’];
var result = [];

while (arr.length > 0) { // массив уменьшается в цикле пока не достигнет нуля
var first = arr.shift();
var last = arr.pop();

var str = first + last; // тут будет строка '16', потом '25', потом '34' 
result.push(str);
}
result = result.join(‘-‘);
console.log(result); // После цикла в result лежит массив 
	['16', '25', '34']. Сольем его в строку: 

8.8- sort
Метод sort производит сортировку массива в лексикографическом порядке.
1)	var arr = [“Банана”, “Апельсино”, “Яблоко”, “Мандарино”, “Сортино”, “Мартино”];
console.log(arr.sort()); // (6) ['Апельсино', 'Банана', 'Мандарино', 'Мартино', 'Сортино', 'Яблоко']

8.9- Функция Object.keys
Object.keys(объект);
var obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj)); // (3) ['a', 'b', 'c']
*/


/*
Urok 10 . function
'func' - это имя функции, ей передается один параметр param: function func(param) {
}
Передаем функции два параметра - param1 и param2: function func(param1, param2) {
}
Вообще не передаем никаких параметров: function func() {
}
1)	function hello () {
alert(‘privet, mir!’);
}
hello(); // privet , mir!

2)	function hello(text) {
alert(text);
}
hello(‘salom, kal!’); (‘privet, zazsransov!’); // xullas o’zgaraveradi, nima yozsa!

10.1- Функция return
 Зададим функцию: function hello(text) { 
 Укажем функции с помощью инструкции 'return', что мы хотим, чтобы она ВЕРНУЛА текст, а не вывела на экран: 
return text; 
} 
//Теперь вызовем нашу функцию и запишем значение в переменную message: var message = hello('Привет, Земляне!'); //пока вывода на экран нет 
//И теперь в переменной message лежит 'Привет, Земляне!': alert(message); //убедимся в этом 
//Можно не вводить промежуточную переменную message, а сделать так: alert(hello('Привет, Земляне!'));

1)	function hello(text) {
return text;
}
var message = hello(‘privet, urod!’);
alert(message);
alert(hello(‘privet, kal!’)); // privet, urod; privet, kal; (chiqadi)
*/


/*
Urok 11 . Rabota c flagami
1)	var arr = ['a', 'b', 'c', 'd', 'с']; 
for (var i = 0; i < arr.length; i++) { 
if (arr[i] == 'c') { 
alert('Есть'); //выведет несколько раз (sababi 2 ta c turibdi)
 } 
}

2)	var arr = ['a', 'b', 'c', 'd', 'с']; 
for (var i = 0; i < arr.length; i++) { 
if (arr[i] == 'c') { 
alert('Есть'); 
break; // tuxtidi ( 2ta [c] bo’ladimi yoki 10ta  [c] bo’lsa ham)
 } 
}



 

3)	var arr = ['a', 'c', 'b', 'c', 'e'];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 'c') {
        alert('mnn');
    } else {
        alert('Net');
    }
}
//[a]-net;[c]-mnn;[b]-net;[c]-mnn;[e]-net;
Yani agar - if (arr[i] == 'c') { - shuni ichidagi `c` tegadagi 5 ta harfga to’g’ri kelsa alert('mnn');shuni korsatadi.

FLAG

1)	var arr = ['a', 'b', 'c', 'd', 'с'];
 var flag = false; //считаем, что элемента 'c' нету в массиве 
for (var i = 0; i < arr.length; i++) { 
if (arr[i] == 'c') { 
flag = true; //элемент есть - переопределим переменную flag 
break;      // true! javob
  } 
} 
//тут переменная flag равна или true, или false

2)	var arr = ['a', 'b', 'c', 'd', 'с']; 
var flag = false; //считаем, что элемента 'c' нету в массиве 
for (var i = 0; i < arr.length; i++) { 
if (arr[i] == 'c') { 
flag = true; //элемент есть - переопределим переменную flag 
break; // true! Javob edi 
} 
} 
   	if (flag === true) { 
alert('Есть'); 
} else { 
alert('Нет'); 
}

hasElem
1)	function hasElem(arr) {
         for (var i = 0; i < arr.length; i++) { 
             if (arr[i] == 'c') {
                return true; 
     } 
 }
  return false; //элемент 'e' не найден 
 } 
var arr = ['a', 'b', 'c', 'd', 'с'];
alert(hasElem(arr)); // false
*/


/*
Urok 13 работы с циклами
13.1 Цикл а цикле
1)	for (var i = 1; i <= 9; i++) { 
     for (var j = 1; j <= 3; j++) {  
           document.write(i);
       } 
} // 111222333444(9 gacha va har birida 3tadan) 
     agar j <= 4 yoki 5 qilsa, : 1111,11111-taga o’zgaradi.

13.2 Строка 'xxxxxxxxxx'
var str = ''; //начальное значение - пустые кавычки 
for (var i = 0; i < 10; i++) { 
str = str + 'x'; 
} 
alert(str); //выведет 'xxxxxxxxxx'
[agar ‘x’ ni orniga ‘z’ qo’yilsa, zzzzzzzzzzqqqqqqqqqqrrrrrrrrrr
va o’zgarilsa(q), yana o’zgarilsa(r)... ketaveradi.

Пирамидка с иксами
x
xx
xxx
xxxx        //
xxxxx
var str = ''; 
for (var i = 0; i < 10; i++) { 
str = str + 'x'; 
document.write(str + '<br>'); 
}
Строка '123456789'
var str = ''; 
for (var i = 1; i <= 9; i++) { 
str = str + i; 
} 
alert(str); //выведет '123456789'
Пирамидка с цифрами
111
222
333
444
555
666
777
888
999
for (var i = 1; i <= 9; i++) { 
   for (var j = 1; j <= 3; j++) {
      document.write(i); 
} 
   document.write('<br>'); //выводим <br>, чтобы было в столбик 




1
22
333
4444
55555
666666
7777777
88888888
999999999

for (var i = 1; i <= 9; i++) { 
    for (var j = 1; j <= i; j++) { 
      document.write(i); 
    } 
   document.write('<br>'); 
}
    

Push mossive
var arr = []; 
for (var i = 0; i < 10; i++) { 
arr.push('x');
} 
console.log(arr); //выведет ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']

var arr = []; 
for (var i = 1; i <= 10; i++) { 
arr.push(i); 
} 
console.log(arr); //выведет [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




Можно не использовать push, а указать ключи напрямую:
var arr = []; 
for (var i = 0; i < 10; i++) { 
arr[i] = 'x'; 
} 
console.log(arr); //выведет ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']

var arr = []; 
for (var i = 0; i < 10; i++) { 
arr[i] = i + 1; 
} 
console.log(arr); //выведет [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Переворот массива
var arr = ['a', 'b', 'c', 'd', 'e']; 
var result = []; 
for (var i = arr.length - 1; i >= 0; i--) { 
result.push(arr[i]); 
} 
console.log(result); //выведет ['e', 'd', 'c', 'b', 'a']

var obj = {a: 1, b: 2, c: 3, d: 4, e: 5}; 
var result = {}; 
for (var key in obj) { 
result[obj[key]] = key;
 } 
console.log(result); //выведет {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}



Подсчет количества элементов
var arr = ['a', 'b', 'c', 'a', 'a', 'b']; 
var count = {a: 0, b: 0, c: 0}; 
for (var i = 0; i < arr.length; i++) { 
count[arr[i]]++; 
} 
console.log(count); //выведет {a: 3, b: 2, c: 1}

var arr = ['a', 'b', 'c', 'a', 'a', 'b']; 
var count = {}; 
for (var i = 0; i < arr.length; i++) { 
if (count[arr[i]] === undefined) { 
count[arr[i]] = 1;
 } else { 
count[arr[i]]++; 
} 
} 
console.log(count); //выведет {a: 3, b: 2, c: 1}

Перебор многомерных массивов
var arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]]; 
for (var i = 0; i < arr.length; i++) { 
      for (var j = 0; j < arr[i].length; j++) { 
          alert(arr[i][j]); 
} 
}
*/



/*
Задача
function getDigits(num) { 
return String(num).split(''); 
}
onsole.log(getDigits(123)); //выведет ['1', '2', '3']
(123456789) - ['1', '2', '3', '4', '5', '6', '7', '8', '9']


var arr = [12, 19, 28, 13, 14, 345]; 
var result = []; 
for (var i = 0; i < 10; i++) { 
if (inRange(arr[i])) { 
result.push(arr[i]); 
} 
} 
console.log(result); // [12, 13, 14]

function getIntersection(arr1, arr2) { 
var result = []; 
for (var i = 0; i < arr1.length; i++) { 
if(inArray(arr1[i], arr2)) { 
result.push(arr1[i]); 
} 
} 
return result; 
} 
alert(getIntersection([1, 2, 3], [2, 3, 4])); //выведет [2, 3]


НОД


function getGreatestCommonDivisor(num1, num2) { 
var divisors = getIntersection(getDivisors(num1), getDivisors(num2)); // ['2', '3', '6'] 
return Number(Max.apply(null, divisors)); 
} 
alert(getGreatestCommonDivisors(12, 18)); //выведет 6

21. Date
var date = new Date(); 
alert(date.getMilliseconds()); //миллисекунды
alert(date.getSeconds()); //секунды 
alert(date.getMinutes()); //минуты 
alert(date.getHours()); //часы 
alert(date.getDate()); //дни 
alert(date.getMonth()); //месяцы 
alert(date.getFullYear()); //год
getDay

var date = new Date(); 
alert(date.getDay());

var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']; 
alert(days[2]); //выведет 'вт'

var date = new Date(); 
var day = date.getDay(); 
var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']; alert(days[day]); // Avtomat js ozi tanlab beradi ( чт)


var date = new Date(2022, 24, 11);( 15, 38, 59 soatlarniyam qoshsabol) 
var day = date.getDay(); 
var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']; alert(days[day]); //  'чт'
classList

<p id="elem" class="www ggg zzz"></p> (HTML)

let elem = document.querySelector('#elem'); (JS)
let classNames = elem.classList;

for (let className of classNames) {
	document.write(className + '<br>'); //   www ggg zzz (br) ko’rinishida
}
////////////
Practika
http://old.code.mu/tasks/javascript/practice/praktika-javascript-dlya-novichkov.html
https://www.youtube.com/watch?v=vw-pvefl-bQ&list=PLqQ1VsG-wgxeYXOmdMAqSmIuQCY2xUc_I
https://www.youtube.com/watch?v=El4E_Lb-N5E
Теория в следующем видео: удаление дублей:https://www.youtube.com/watch?v=h6iqCJSpT3w
Теория в следующем видео: получение дом элементов без дублей:https://www.youtube.com/watch?v=UzGWCYWn_IQ
Коллекции Map и WeakMap
https://www.youtube.com/watch?v=luf23FTtwA0
https://www.youtube.com/watch?v=iLE8SCMhvG4
Recommend
https://www.youtube.com/playlist?list=PLqQ1VsG-wgxfPyBpybkNAAzJlIhC1cA39

https://www.youtube.com/watch?v=sYUILPMnrIo - JSON.stringify
https://www.youtube.com/watch?v=90Vp-8IEHus  - abcde(surish)





это цифра от 0 до 9 (\d)
маленькая латинская буква (a-z)





Boolean
console.log(Boolean(-1));          // true
console.log(Boolean(Infinity));    // true
console.log(Boolean(-Infinity));   // true
console.log(Boolean('0'));         // true
console.log(Boolean('false'));     // true
console.log(Boolean('NaN'));       // true
console.log(Boolean('null'));      // true
console.log(Boolean('undefined')); // true



•	< меньше
•	<= меньше или равно
•	> больше
•	>= больше или равно
•	=== равно
•	!== не равно

•	isInfant() — «младенец ли?»
•	hasChildren() — «есть ли дети?»
•	isEmpty() — «пустой ли?»
•	hasErrors() — «есть ли ошибки?»
И &&
A	B	A && B
 TRUE	TRUE	TRUE
TRUE	FALSE	FALSE
FALSE	TRUE	FALSE
FALSE	FALSE	FALSE
ИЛИ ||
A	B	A || B
TRUE	TRUE	TRUE
TRUE	FALSE	TRUE
FALSE	TRUE	TRUE
FALSE	FALSE	FALSE
var cars = ["БМВ", "Вольво", "Сааб", "Ford"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  if (cars[i] === "Сааб") {
    continue;
  }
  text += cars[i] + "<br>";
}

Следующий цикл for начинается объявлением переменной i и задания ей значения 0. Затем проверяет, что i меньше девяти, выполняет выражения внутри цикла и увеличивает i на 1 каждый раз.
for (var i = 0; i < 9; i++) {
   console.log(i);
   // ещё какие-то выражения
}

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}
for (var i = 1; i <= 10; i++) {
  if (i % 2 == 1) continue
  alert(i)
} // tepadan chiqadi


var N = 20;
for (var i = 0; i < N; i++) {
    if (i < 9) {
        continue;
    }
    document.write(i + ' ');
}

for (var i = 1; i < 6; i++) {
    document.write('Число ' + i + '<br>'); // Число 1 – Число 6
}       

Оператор break "выпрыгивает" из цикла.
Оператор continue "перепрыгивает" на одну итерацию в цикле.







1)
var j = 200;
checkj: while (j > 1) {
      console.log("j: "+ j);
      j -= 1;
      if ((j % 2) == 0)
         continue checkj;
      console.log(j + " toq sonlar.");
   }  // yani 

Var z;
for (z = 1; z <= 200; z++) {
    if (z % 2 !== 0 ) {
        continue;
    }
    document.write("<br><b>just sonlar</b> = " + z);
} // !== ni orniga === qilsak , toq sonlarni korsatadi

2)
function agarJuftSonlarniQoshsak(x, y) {
    let sum = 0;
    for (let z = x; z < y; z++) {
        if ( z % 2 ===1) continue;
        sum += z;
    }
    return sum;
}
console.log(agarJuftSonlarniQoshsak(2, 200));
3) for in
var user = {
  name: 'Alice', 
  age: 25, 
  country: 'Russia'
};
if (typeof Object.prototype.clone === 'undefined') {
  Object.prototype.clone = function () {};
}
for (var prop in user) {
  if (user.hasOwnProperty(prop)) {
    console.log(prop + ": " + user[prop]);
}
}

4) while
var i = 1; 
var msg = '';
while (i < 10) {
  msg+= i + ' x 3 = ' + (i * 3) + '<br>';  
  i++;
}
document.write(msg);
5) while … do
var result = '';
var i = 0;
do {
   i += 1;
   result += i + ' ';
} while (i < 5);
document.write(result);
6) Управление циклом break - continue
6.1) break
for (var i = 1; i < 10; i++) {
  if (i == 15) {
    break;
    }
  document.write(i);
  document.write(' <br>');
}
6.2) continue
var i;
  for(i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    document.write("<br><b>juft sonlar</b> = " + i);
  }

7) for
for (var i = 0; i < 5; i++) {
  console.log(i + ": Hello, JavaScript!");
}

ТАБЛИЦА 1. КЛЮЧЕВЫЕ СЛОВА JAVASCRIPT
break	finally	return
catch	for	static
class	function	super
case	if	switch
const	implements	this
continue	import	throw
debugger	in	true
default	instanceof	try
delete	interface	typeof
do	let	var
else	new	void
enum	package	while
export	private	with
extends	protected	yield
false	public	




ТАБЛИЦА 3. ОПЕРАТОРЫ ИНКРЕМЕНТА И ДЕКРЕМЕНТА
Оператор/Операция	Описание	Приоритет
++x Префиксный инкремент	Operandni bittaga oshiradi.	14
x++ Постфиксный инкремент	Operandga bitta qo'shiladi, lekin ifodaning natijasi operandning asl qiymati bo'ladi.	14
--x Префиксный декремент	Operandni bittaga qisqartiradi, qisqartirilgan qiymatni qaytaradi.	14
x-- Постфиксный декремент	Operandni bittaga kamaytiradi, asl qiymatini qaytaradi.	14
var x = y = m = n = 5, z, s, k, l;
z = ++x * 2;  //в результате вычислений вернет значение z = 12, x = 6, т.е. значение x сначала увеличивается на 1, а после выполняется операция умножения 
s = y++ * 2; // в результате вычислений вернет значение s = 10, y = 6, т.е. сначала выполняется операция умножения, а после в переменной y сохраняется увеличенное на 1 значение 
k = --m * 2; // вернет значение k = 8, m = 4
l = n-- * 2; // вернет значение l = 10, n = 4
*/













/*
ТАБЛИЦА 4. ОПЕРАТОРЫ СРАВНЕНИЯ
Оператор/Операция	Описание	Приоритет
== Равенство	Проверяет две величины на совпадение, допуская преобразование типов. Возвращает true, если операнды совпадают, и false, если они различны.	9
!= Неравенство	Возвращает true, если операнды не равны	9
=== Идентичность	Проверяет два операнда на «идентичность», руководствуясь строгим определением совпадения. Возвращает true, если операнды равны без преобразования типов.	9
!== Неидентичность	Выполняет проверку идентичности. Возвращает true, если операнды не равны без преобразования типов.	9
> Больше	Возвращает true, если первый операнд больше второго, в противном случае возвращает false.	10
>= Больше или равно	Возвращает true, если первый операнд не меньше второго, в противном случае возвращает false.	10
< Меньше	Возвращает true, если первый операнд меньше второго, в противном случае возвращает false.	10
<= Меньше или равно	Возвращает true, если первый операнд не больше второго, в противном случае возвращает false.	10
5 == "5"; // вернет true
5 != -5.0; // вернет true
5 === "5"; // вернет false
false === false; // вернет true
1 !== true; // вернет true
1 != true; // вернет false, так как true преобразуется в 1
3 > -3; // вернет true
3 >= "4"; // вернет false

*/






/*
ТАБЛИЦА 5. ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
Оператор/Операция	Описание	Приоритет
&& Логическое И	Возвращает true, только если оба операнда истинны. При выполнении операции сначала проверяется значение первого операнда. Если оно имеет значение false, то значение второго оператора не учитывается и результату выражения присваивается false.	5
|| Логическое ИЛИ	Возвращает true, если хотя бы один операнд истинен, т.е. проверяет истинность как минимум одного условия.	4
! Логическое НЕ	Изменяет значение оператора на обратное - с true на false и наоборот.	14
(2 < 3) && (3===3); // вернет true, так как выражения в обеих скобках дают true
(x < 10 && x > 0); // вернет true, если значение x принадлежит промежутку от 0 до 10
!false; // вернет true

*/













/*
ТАБЛИЦА 6. ПОБИТОВЫЕ ОПЕРАТОРЫ
Оператор/Операция	Описание	Приоритет
& Побитовый И	Если оба бита равны 1, то результирующий бит будет равен 1. В противном случае результат равен 0.	8
| Побитовый ИЛИ	Если один из операндов содержит в позиции 1, результат тоже будет содержать 1 в этой позиции, в противном случае результат в этой позиции будет равен 0.	6
^ Исключающее ИЛИ	Если одно, и только одно значение содержит 1 в какой-либо позиции, то и результат будет содержать 1 в этой позиции, в противном случае результат в этой позиции будет равен 0.	7
~ Отрицание	Выполняется операция побитового отрицания над двоичным представлением значения выражения. Любая позиция, содержащая 1 в исходном выражении, заменяется на 0. Любая позиция, содержащая 0 в исходном выражении, становится равной 0. Положительные числа начинаются с 0, отрицательные - с -1, поэтому ~ n == -(n+1).	14
<< Побитовый сдвиг влево	Оператор сдвигает биты первого операнда влево на число битовых позиций, установленных вторым операндом. Для заполнения позиций справа используются нули. Возвращают результат того же типа, что левый операнд.	11
>> Побитовый сдвиг вправо	Оператор сдвигает биты первого операнда вправо на число битовых позиций, установленных вторым операндом. Цифры, сдвинутые за пределы диапазона, удаляются. Самый старший бит (32й) не меняется, чтобы сохранить знак результата. Если первый операнд положителен, старшие биты результата заполняются нулями; если первый операнд отрицателен, старшие биты результата заполняются единицами. Сдвиг значения вправо на одну позицию эквивалентен делению на 2 (с отбрасыванием остатка), а сдвиг вправо на две позиции эквивалентен делению на 4 и т. д.	11
>>> Побитовый сдвиг вправо без учета знака	Оператор сдвигает биты первого операнда вправо на число битовых позиций, установленных вторым операндом. Слева добавляются нули независимо от знака первого операнда. Цифры, сдвинутые за пределы диапазона, удаляются.	11

var x = 9, y = 5, z = 2, s = -5, result; // 9 эквивалентно 1001, 5 эквивалентно 0101
result = x & y; // вернет 1 (эквивалентно 0001) 
result = x | y; // вернет 13 (эквивалентно 1101) 
result = x ^ y; // вернет 12 (эквивалентно 1100) 
result = ~ y; // вернет -6 (эквивалентно 1100) 
result = x << y; // вернет 288 (эквивалентно 100100000)
result = x >> z; // вернет 2 (эквивалентно 10)  
result = s >>> z; // вернет 1073741822 (эквивалентно 111111111111111111111111111110)

*/



/*
ТАБЛИЦА 7. СТРОКОВЫЕ ОПЕРАТОРЫ
Оператор/Операция	Описание	Приоритет
+ Конкатенация	Оператор работает слева направо, выполняя объединение строк. Если первый операнд является строкой, последующие операнды будут преобразованы в строки и далее выполнится их объединение.	12
+= Конкатенация с присваиванием	Выполняется объединение двух строк и результат присваивается переменной.	12
>, <, >=, <=, == Сравнение	Строки сравниваются по алфавиту, буквы в верхнем регистре всегда меньше букв в нижнем регистре. Сравнение строк основывается на номерах символов, указанных в стандарте Unicode, где прописные буквы идут раньше, чем строчные.	10
"1" + "10"; // вернет "110"
"1" + 10; // вернет "110"
2 + 5 + " цветных карандашей"; // вернет "7 цветных карандашей"
"Цветных карандашей " + 2 + 5; // вернет "Цветных карандашей 25"
"1" > "10"; // вернет false
"10" <= 10; // вернет true
"СССР" == "ссср"; // вернет false
x = "micro"; x+= "soft"; // вернет "microsoft"
*/



/*
ТАБЛИЦА 8. СПЕЦИАЛЬНЫЕ ОПЕРАТОРЫ
Оператор/Операция	Описание	Приоритет
. Обращение к свойству	Осуществляет доступ к свойству объекта.	15
, Множественное вычисление	Вычисляет несколько независимых выражений, записанных в одну строку.	1
[] Индексация массива	Осуществляет доступ к элементам массива или свойствам объекта.	15
() Вызов функции, группировка	Группирует операции или вызывает функцию.	15
typeof Определение типа данных	Унарный оператор, возвращает тип данных операнда.	14
instanceof Проверка типа объекта	Оператор проверяет, является ли объект экземпляром определенного класса. Левый операнд должен быть объектом, правый - должен содержать имя класса объектов. Результат будет true, если объект, указанный слева, представляет собой экземпляр класса, указанного справа, в противном случае - false.	10
in Проверка наличия свойства	В качестве левого операнда должна быть строка, а правым - массив или объект. Если левое значение является свойством объекта, вернется результат true.	10
new Создание объекта	Оператор создает новый объект с неопределенными свойствами, затем вызывает функцию-конструктор для его инициализации (передачи параметров). Также может применяться для создания массива.	1
delete Удаление	Оператор позволяет удалять свойство из объекта или элемент из массива. Возвращает true, если удаление прошло успешно, в противном случае false. При удалении элемента массива его длина не меняется.	14
void Определение выражения без возвращаемого значения	Унарный оператор, отбрасывает значение операнда и возвращает underfined.	14
?: Операция условного выражения	Тернарный оператор, позволяет организовать простое ветвление. В выражении участвуют три операнда, первый должен быть логическим значением или преобразовываться в него, а второй и третий - любыми значениями. Если первый операнд равен true, то условное выражение примет значение второго операнда; если false - то третьего.	3
document.write("hello world"); // выводит на экран строку hello world

i = 0, j = 1; // сохраняет значения в переменных

function1(10, 5); // вызов функции function1 с параметрами 10 и 5

var year = [2014, 2015]; // создает массив с элементами

typeof {a:1}; // вернет "object"

var d = new Date(); // создаем новый объект с помощью конструктора Date()
d instanceof Date; // вернет true

var mycar = {make: "Honda", model: "Accord", year: 2005}; 
"make" in mycar; // вернет true

var obj = new Object(); // создает пустой объект

var food = ["milk", "bread", "meat", "olive oil", "cheese"];
delete food[3]; // удаляет четвертый элемент из массива food

Нажмите здесь, ничего не произойдет

x > 10 ? x * 2 : x / 2; // возвращает значение x * 2, если x > 10, в противном случае x 

06.12.22
- O’zgaruvchilar “let” bilan.
- “var(variable) : 2015 yilgacha o’zgaruvchi ya’ni “let” ni o’rnini bajarib kelgan.
- const : bersa, o’zgartirib bo’lmaydi.
- o’zgaruvchilarga $ , _ qo’ysa bo’ladi,
- prompt : tepadan buyruq chiqadi(“enter passpord”);
- if :
        let x = Number(prompt(“Son kiriting”));
        if (!Number.isNaN(x)) { // agar son bolsa c.log ga chiqaramiz diymiz
            console.log(x + “ ning kvadrati” + x * x);
}
// agar bu yerga harf kiritsak ishlamidi va con.log ni xatlab o’tadi
Return Value:
Math.max: yani ikkta sonni maksinumini toppish
console.log(Math.max(2, 4));
// -> 4
// yani man sanga ikkita son beraman, san manga ularni maksimumni topib berasan.(qiymatni bizlarga berishi return db etiladi)
console.log(Math.max(2, 4, 5, 7, 2184));
// 2184 ( agar 1000 ta dan ortiq bolsachi, bu func asqotadi)

if – else
let x = Number(prompt(“Son kiriting”));
if (!Number.isNaN(x)) {
  console.log(x + “ ning kvadrati” + x * x);   
}
   else {
  console.log(“ey, son bermadizku?”); 
}
// agar son yozsa  bajaradi, yani buni tashab pastga otadi
   agar harf yozsa  bajaradi


let num  = Number(prompt(“Son tanla”));
if (num < 10) {
   console.log(“Small” (bu son 10 dan kichik)));
}
else if (num < 100) {
   console.log(“Medium” (bu son 100 va 10 orasida)));
} else {
console.log(“Large”);
}

// agar bir nechta yo’l bo’lsa, shartlar qo’yish mumkun.
Agar son 10 dan kichkina bolsa “small”; agar son 100 dan kichkina bo’lsa “medium’; agar boshqa holat bolsa buni bajar, va hakazo.


Loops – bir necha qaytariladiganlarga yordam beradi
Shu yerda yana bita narsa, blooren yani true – false digani 

let number = 0;
console.log(“0 va 12 orasidagi juft sonlar:/n”); while(qachongachaki)(number <= 12) {
     console.log(x + “/n”);
     number = number + 2;
} 
// 0 -> 2 -> 4 -> 6 …
/n-yangi qaatordan boshla degani

let result = 1;
let counter = 0; (sanuvchi)

while(counter < 10) {
     counter = counter + 1;
     result = result * 2;
}
console.log(“2^10 darajasi: “ + result);
do … while
( while – birinchi tekshiradi va bajaradi)
(do….while – bajaradi va tekshiradi)

Let ism;1
do {
   ism = prompt(“Isming Nima? “);
}
while(!ism);
console.log(“Welcome “ +ism);
//agar ismni yozmaguncha shu savolni beraveradi. Qachonki nimadur yozilsa, shunda welcome + ism” chiqadi. Sababi tepadagi shart “falseni truega aylantirib”  bajarilmadi.

For 
for (let number = 0; number <= 12; number = number + 2) {
console.log(number);
}
let number = 0; ->> sanidigan o’zgaruvchimiz 0 dan boshlasin
number <= 12; ->> 0 dan to 12 gacha, for ni ichidagilar qaytarilsin yani SHART
number = number + 2 ->> 0,1,2,3 mas 2,4,6,8 bolib  12 gacha ko’tarilsin
i – ko’p ishlatilgani uchun, formulalarda ko’p keladi
// while da yam shunga oxshash
 
for(let i; i < 1000; i = i + i) {
     console.log(i + “/n”);
}
Break 
for (let current = 20; ; current = current + 1) { 
if (current % 7 == 0) {
console.log(current);
break;
 }
}
->> 21
// bu yerda shart berilmagan, yani 20 ga 1 ni qo’shib ketaveradi har bir aylanganda 20 , 21 , 22, 23….  va  shu sonlarga  % 7 ga bo’lib ko’radi, agar qoldig’i 0 bolsa yani 7 ga bo’linsa, shu sonni console.log ga chiqazib shu bilan tugallaydi.

for (let i = 1; ; i = i + 1) {
if (i % 5 == 0) {
    console.log(i);
    break;
}
}
//  5

Counter
counter = counter + 1; // counter += 1;(qilib qoysa bo’ladi)
undan ham qisaqasi counter++. Yani faqat 1 qo’shganda ++ qilinadi.
counter -= 1;



switch
xuddi if else ga oxshab:
if (x == “value1”) action1();
else if (x == “value2”) action2();
else if (x == “value3”) action3();
else defaultAction();

switch (prompt(“What is the weather like?”)) { //savolberdi
  case “rainy”:// dib yozsa  
    console.log(“Remember to bring an umbrella.”);//bajaradi
    break; // va switchdan chiqib ketadi
  case “sunny”://agar shu javob bersa
    console.log(“Dress lightly.”);// shu javob oladi
    break;
  case “cloudy”://
    console.log(“Go outside.”);
    break;
   default:// agar tepgi javob(3)lar chiqmasa, UnkWeathType 
    console.log(“Unknown weather type!”); // chiqadi
    break;
}

switch (prompt("Biron bir son kiriting")) { //savolberdi
    case "18":// dib yozsa  
      console.log("Bu o'n sakkiz.");//bajaradi
      break; // va switchdan chiqib ketadi
    case "15"://agar shu javob bersa
      console.log("Bu o'nbesh.");// shu javob oladi
      break;
    case "10"://
      console.log("Bu o'n.");
      break;
     default://
      console.log("Bilmadim!");
      break;
}
*/




/*
   //FIZZBUZZ

for(let i = 0; i <= 100 ; i++) {
    if (i % 3 == 0) {
        console.log('fizz');
        
    }
    if ( i % 5 == 0) {
        console.log('buzz');
    }
    if ((i % 3 != 0) && (i % 5 != 0)) {

    }
}

for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 != 0)) { // faqat 3 ga bolinadigan
        console.log('fizz');
    }

    if ((i % 5 == 0) && (i % 3 != 0)) { // faqat 5 ga bo'linadigan
        console.log('buzz');

    }

    if ((i % 3 == 0) && (i % 5 ==0)) {
        console.log('fizzbuzz');     // bir vaqtda 3 va 5 ga bo'linadigan
    }

    if ((i % 3 != 0) && (i % 5 !=0)) {
        console.log(i);           // agar na 3 va na 5 bo'linadiganlar
    }
}

for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 != 0)) { 
        console.log('Fizz'); // 3 ga bolinadigan bo'lsa

    }

    if ((i % 5 == 0) && (i % 3 != 0)) { 
        console.log('Buzz'); // 5 ga bo'linadigan bo'lsa

    }

    if ((i % 5 == 0) && (i % 3 == 0)) {
        console.log('FizzBuzz'); // 3 ga va 5 ga bo'linsa

    }

    if ((i % 5 !== 0) && (i % 3 != 0)) {
        console.log(i); // na 3 ga na 5 ga bo'linadi
    }
} 


for (let i = 1; i <= 100; i++) {

    let output = '';
    
    if (i % 3 == 0) {output += 'Fuzz'}
    if (i % 5 == 0) {output += 'Bizz'}

    if (output == '') {output = i}

    console.log(output)
}
                            2^10 darajasi
let result = 1;
let counter = 0;

while(counter < 10) {
    counter = counter + 1;
    result = result * 2;
}                               

console.log(result);        

                                  piramida                  
for (let i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(i);
    }
    document.write('<br>');
}                           




For in
var users = {
  "John": 28,
  "Mark": 30,
  "David": 25,
  "Richard": 42
};


*/


/*
 ...ваш код... 
var users = {
  "John": 28,
  "Mark": 30,
  "David": 25,
  "Richard": 42
};
var sum = 0;

for (var name in users) {
    sum += users[name];
}

alert( sum );
  



1) function printText() {
    console.log("Hello")
}
printText(); // Hello

2) function printText(name, age) {
    console.log("Hello My name is "+name+", Age: "+age)
}
printText("Petr", 15); // Hello My name is Petr, Age: 15

3) function printText(name, age) {
    return "Hello, My name is "+name+", Age: "+age
}
let name1 = "Pavel"    
let age1 = 19	

console.log(printText(name1, age1));
console.log(printText("Pidr", 15));
console.log(printText("Marinelli", 35));
console.log(printText("Jack", 25));
console.log(printText("Parif", 23)); // Hello, My name is Pavel, Age: 19
                                        Hello, My name is Pidr, Age: 15
                                   Hello, My name is Marinelli, Age: 35
                                        Hello, My name is Jack, Age: 25 
                                        Hello, My name is Parif, Age: 23
alert(printText(name1, age1));
alert(printText("Pidr", 15));
alert(printText("Marinelli", 35));
alert(printText("Jack", 25));
alert(printText("Parif", 23)); //       tepadan ko’rsatadi



let res = printText(name1, age1);
alert(res)                       //     Hello, My name is Pavel, Age: 19


4) let obj = {
    name: "Ivan",
    age: 18,
    hello() {
        console.log(this.name)
    }
}
obj.hello()                      // Ivan
       

       console.log("Menya zavud "+this.name)
    }
}
obj.hello()                      //Menya zavud Ivan
console.log(obj.name); yoki console.log(obj.age); // Ivan yoki 18



5) let arr =  [1, 87, 99, 9, 4, 65, 2, 7, 34, 5, 44, 33, 3]
arr.sort(function(a,b) {
    if(a==b) return 0
    if(a>b) return 1
    if(a<b) return -1
})
console.log(arr) // (13) [1, 2, 3, 4, 5, 7, 9, 33, 34, 44, 65, 87, 99]
    return a-b
})
console.log(arr)  // (13) [1, 2, 3, 4, 5, 7, 9, 33, 34, 44, 65, 87, 99]


arr.sort((a, b) => a - b)
    console.log(arr)

arr.sort()       // (13) [1, 2, 3, 4, 5, 7, 9, 33, 34, 44, 65, 87, 99]
                 strelkali yani qisa boshqa misollarga qaraganda


6) function fibonachi(count) {
    let fib = [];
    for(let i=0; i<count; i++) {
        if(i==0) fib[i] = 1;
        else if(i==1) fib[i] = 2;
        else fib[i] = fib[i-2] + fib[i-1];
    }
    return fib;
}
let f = fibonachi(1000);
console.log(f)


7) function factorial(n) {
    let fact = 1;
    if(n==0) return fact;
    for(let i=1; i<=n; i++) {
        fact *= i;  
    }
    return fact;
}
let a = factorial(0);
console.log(a)
let b = factorial(3);
console.log(b)
let c = factorial(8);
console.log(c)
let d = factorial(25);
console.log(d)




8) let addAndMul = function(num) {
    num += "";
    let add = 0, mul = 1;
    for(let i = 0; i<num.length; i++) {
        add += +num[i];
        mul *= num[i];
    }
    return {
        "Сумма": add,
        "Произведение": mul
    }
}
console.log(addAndMul("699")) // 6*9*9= 486
                                 6+9+9= 24

9) function reverse(number) {
    number += "";
    let reverseNumber = "";
    for(let i=number.length-1; i>=0; i--) {
        reverseNumber += number[i]
    }
    return +reverseNumber
}
console.log(reverse(3486))   // 6843

10) function number(number) {
    number += "";
    let chet = 0, nechet = 0;
    for(let i= 0; i<number.length; i++) {
        if(number[i] % 2 == 0) chet++;
        else nechet++;
    }
    return {
        "четные цифр": chet,
        "Нечетные цифр": nechet,
    }
}
console.log(number(3486))     // {четные цифр: 3, Нечетные цифр: 1}
 



	
11) 
    function randomNumber() {
    let number = Math.floor(Math.random()*100);
    for(let count=1; count<=10; count++) {
        let result = +prompt(`Popitka № ${count}, vvedite chislo:`)
        if(result == number) {
            return alert(`vbI ugadali chislo! Popitka: ${count}, chislo: ${number}`)
        } else if(result < number) {
            alert(`Vashe chislo ${result}, menshe zagadali!`)
        } else if(result > number) {
            alert(`Vashe chislo ${result}, bolshe zagadali!`)
        } else {
         
        }
        }    
        return alert(`Vi neugadali chislo! chislo: ${number}`)
    }
    randomNumber()
 

12) const a = '16231269546045604114791283891782'
const i = a.indexOf('41147');
console.log(i);                        // bu boshini 
 
13) const a = '16231269546045604114791283891782'
const i = a.lastIndexOf('17');
console.log(i);                       // bu oxirini 

14) //indexOf
const a = [ 9, 8, 7, 5];
const b = ['Hi', 'hello'];

// -1
console.table(a);
console.log(a.indexOf(7)); 
/*
if (a.indexOf('7') !== -1) {
    console.log('yes');
}
else {
    console.log('no');
} */


/*
15) let textOne = "Privet!";
console.log(textOne.length); // 7

16) let text = "Privet!";
let firstSymbol = text[0];
let lasttSymbol = text[text.length - 1];
console.log(firstSymbol);
console.log(lasttSymbol); // P,!


for (const char of text) {
    console.log(char);
}                           // p, r, I, v, e, t, !


17) let text = "Privet!";
console.log(text.toUpperCase());
console.log(text.toLowerCase()); // PRIVET!
                                    privet!


18) let text = "Privet!";
console.log(text.indexOf('riv'));
console.log(text.indexOf('riv', 3)); // 1
                                        -1 – sababi to’g’ri kelmadi


19) let text = "Privet!";
console.log(text.slice(1, 2));
console.log(text.slice(-2, -1));
console.log(text.slice(1));   //   r
                                   t
                                   rivet!





20) let textSalom = "Salom";
let textAll = `${textSalom} Men qatorman!`;

console.log(textAll);

function someSum(a, b) {
    return a + b;
}

console.log(`Сумма: ${someSum(4, 7)}`);

let text = `Salom!
Siz efirdasiz
Yovvoyi hayvonlar haqida
`;
console.log(text);                 // Salom Men qatorman!
  //  Сумма: 11
                                   //Salom!
       Siz efirdasiz
                  Yovvoyi hayvonlar haqida


21) let nums = [1,2,45,776,890,12,543,765,809,234,76,90,456,89,1]

let sum = nums.reduce((x,y) => x + y);
console.log(sum)                      // 4789

22) let arr = [false, 0, "", null, NaN, undefined];

console.log(arr) 

let arr = [false, "red", 0, 2,  "", null, true, NaN, undefined];

let new_arr = arr.filter(Boolean);

console.log(new_arr) // ['red', 2, true] – shu 3 tani kiritdik va shuni filtirdan 
                                                 o’tqizdi






23) let cars = ["123", "mishka", "javascript", "polvon", "macbook"];

cars.splice(2,3, "HTML", "CSS")

console.log(cars)

24) let nums = [1,2,1,1,1,2,2,2,1,3,4,5,1,2,6,4,3,7,3,2,1,1,8,6,5,4,9,0,0,8,7,6,5,];

let uni_nums = [...new Set(nums)];   // 1 usul 

console.log(uni_nums) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] – yani to’g’irlaydi

let uni_nums = Array.from(new Set(nums));

console.log(uni_nums) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]         // 2 usul 



25) let new_cars = [
    {car: "Honda", color: "Red"},
    {car: "Nexia", color: "White"},
    {car: "Cobalt", color: "Black"},
    {car: "Spark", color: "Green"},
    {car: "Malibu", color: "Blue"},

];

let car_name = Array.from(new_cars, ({car}) => car)
console.log(car_name)    // ['Honda', 'Nexia', 'Cobalt', 'Spark', 'Malibu']

26) let new_arr = new Array(10).fill(2)
console.log(new_arr) // (10) [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

27) let nums2 = [1,56,4567,9876,314,23,678,123,768,08,123,456,69]
let rand_num = nums2[(Math.floor(Math.random() * (nums2.length)))];
console.log(rand_num) // randomga tushirib beradi



Kitob JS

var name = "Joe"; 
var i = 0;
while (i < 2) {
    document.write("Happy Birthday to you.<br>");
    i = i + 1;
}

document.write("Happy Birthday dear " + name + ".<br>");
document.write("Happy Birthday to you.<br>");

<alert> Men darhol foydalanuvchi nima qilayotganini to'xtataman va qisqa 
xabar beraman. Davom etish uchun foydalanuvchi "OK" tugmasini bosishi kerak.

<document.write> Hujjatga HTML belgilash va matnning kichik qismlarini kiritishim mumkin. 
Men foydalanuvchiga ma'lumot etkazishning eng oqlangan usuli bo'lmasligim mumkin, 
lekin men barcha brauzerlarda ishlayman.

<document object model> Mening yordamim bilan siz veb-sahifani to'liq boshqarishingiz mumkin bo'ladi: 
foydalanuvchi tomonidan kiritilgan ma'lumotlarni qabul qilish, HTML belgilarini va 
uslublarini o'zgartirish, sahifa mazmunini yangilash.

<console.log> Men faqat oddiy disk raskadrovka vazifalarini hal qilish va ma'lumotlarni ishlab 
chiquvchilar uchun mo'ljallangan maxsus konsolga chiqarishga ruxsat berish uchun mavjudman
*/


