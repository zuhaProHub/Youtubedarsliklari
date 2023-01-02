// var counter = 0; - 3) gacha , bu kak bi global . 

/* 1)
setInterval(my_func, 10000);


function my_func() {
    counter++;
    console.log("Counter: " + counter);
} // har 1 sec da 1.2.3..... sanoq chiqadi

*/

/* 2)
setInterval(function() {
    counter++;
    console.log("bir soniya o'tdi: " + counter);
}, 1000); // bir soniya o'tdi: 1,2,3,4,5...999999...(har bir soniyada)
*/

/* 3) intervalni to'xtatish 

var id = setInterval(my_func, 1000);

function my_func() {
    counter++;
    console.log("Counter(bir so'niya o'tdi): " + counter);

    if(counter == 3)
    clearInterval(id);
} // 3 ga borib to'xtadi
*/


/* 4) timer 

setTimeout(function() {
    console.log("Ishni tugatish  uchun sizlarga vaqt(2 soniya)!");
    
}, 2000);
*/

/* 4.1) 

setTimeout(my_func, 2000);

function my_func() {
    console.log("Ishni tugatish  uchun sizlarga vaqt(2 soniya)!");
}
*/






