// N soni berilgan
// 1 dan N sonigacha yozib chiqishim uchun nechta raqam ishlattim-
 /*function agarJuftSonlarniQoshsak(x, y) {
    let sum = 0;
    for (let z = x; z < y; z++) {
        if ( z % 2 ===1) continue;
        sum += z;
    }
    return sum;
}

console.log(agarJuftSonlarniQoshsak(2, 200));*/

/*let yozganRaqamlarimSoni = 0;
let oxirgiYozganSonim = 0;
let agarJuftSonlarniQoshsak = 100;

function keyingiSonniAniqla() {
    return oxirgiYozganSonim + 1;
}

function soningXonalarSoni(son) {
    return son.toString().length;
}

while (true) {
    let x = keyingiSonniAniqla();
    let xNingXonalarSoni = soningXonalarSoni(x);

    yozganRaqamlarimSoni = yozganRaqamlarimSoni + xNingXonalarSoni;

    oxirgiYozganSonim = x;

    if (oxirgiYozganSonim == agarJuftSonlarniQoshsak) {
        break;
    }
}

console.log(yozganRaqamlarimSoni)
console.log(oxirgiYozganSonim)
console.log(agarJuftSonlarniQoshsak)*/

 

/*function agarJuftSonlarniQoshsak(x, y) {
    let sum = 0;
    for (let i = x; i < y; i++) {
        if ( i % 2 ===1) continue;
        sum += i;
    }
    return sum;
}
console.log(agarJuftSonlarniQoshsak(2, 100));*/

/*let number = 2;
console.log("2 va 12 orasidagi juft sonlar:/n"); 
while(number <= 12) {
     console.log(x + "/n");
     number = number + 2;
} */



/*let juftSonlarSoni = 2
while (juftSonlarSoni < 20 ) {
    console.log(juftSonlarSoni)
    juftSonlarSoni = juftSonlarSoni + 2
}

let yozganRaqamlarimSoni = 0
let oxirgiYozganSonim = 0
let juftSonlarniSoniniAniqlash = 2

function keyingiSonniAniqla() {
    return oxirgiYozganSonim + 2;
}

function soningXonaLarSoni(son) {
    return son.toString().length;
}

while (true) {
    let x = keyingiSonniAniqla();
    oxirgiYozganSonim = x;

    if (x % 2 == 0) {
        let xNingXonalarSoni = soningXonaLarSoni(x);
        yozganRaqamlarimSoni = yozganRaqamlarimSoni + xNingXonalarSoni;
    }

    if(oxirgiYozganSonim == juftSonlarniSoniniAniqlash ) {
        break;
    }
}
console.log('yozganRaqamlarimSoni', yozganRaqamlarimSoni)
console.log('oxirgiYozganSonim', oxirgiYozganSonim)
console.log('juftSonlarniSoniniAniqlash', juftSonlarniSoniniAniqlash)
   // console.log(agarJuftSonlarniSoniniAniqlasak)
   // agarJuftSonlarniSoniniAniqlasak = agarJuftSonlarniSoniniAniqlasak + 2 */

/*
let yozganRaqamlarimSoni = 0;
let oxirgiYozganSonim = 0;
let N = 100;

function keyingiSonniAniqla() {
    return oxirgiYozganSonim + 1;
}

function soningXonalarSoni(son) {
    return son.toString().length;
}

while (true) {
    let x = keyingiSonniAniqla();
    let xNingXonalarSoni = soningXonalarSoni(x);

    yozganRaqamlarimSoni = yozganRaqamlarimSoni + xNingXonalarSoni;

    oxirgiYozganSonim = x;

    if (oxirgiYozganSonim == N) {
        break;
    }
}

console.log('yozganRaqamlarimSoni', yozganRaqamlarimSoni)
console.log('oxirgiYozganSonim', oxirgiYozganSonim)
console.log('N', N) */

                    
            
    // if (x > mendanSoralganSon) {
    //     break;
    // } else {
    //     oxirgiYozganSonim = yozishimKerakBolganSon;
    //     yozganRaqamlarimSoni = yozganRaqamlarimSoni + yozishimKerakBolganSonningXonalariSoni;
    // }


/*console.log('yozganRaqamlarimSoni', yozganRaqamlarimSoni)
console.log('oxirgiYozganSonim', oxirgiYozganSonim)
console.log('mendanSoralganSon', mendanSoralganSon) */  

/*var res = 0;
var index = 1;
for (let i = 1; i <= 100; i++) {
    res = res + index * i * i;
    index = index * (-1);
} 
console.log(res)*/


2 - chi dars