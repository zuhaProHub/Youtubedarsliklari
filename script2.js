/*let nSoniBerilgan = 0;
let birdanToNSonigachaYozibChiqishimUchunNechtaRaqamIshlatdim = 1;
let mendanSoralvotganSon = 20;

function keyingiSonniAniqla() {
    return birdanToNSonigachaYozibChiqishimUchunNechtaRaqamIshlatdim + 1;
}

function soningXonalarSoni(son) {
    return son.toString().length;
}

while (true) {
    let yozishimKerakBolganSon = keyingiSonniAniqla();
    let yozishimKerakBolganSonningXonalariSoni = soningXonalarSoni(yozishimKerakBolganSon);
    let n = yozishimKerakBolganSonningXonalariSoni + nSoniBerilgan;

    if (n > mendanSoralvotganSon) {
        break;
    } else {
        birdanToNSonigachaYozibChiqishimUchunNechtaRaqamIshlatdim = yozishimKerakBolganSon;
        nSoniBerilgan = nSoniBerilgan + yozishimKerakBolganSonningXonalariSoni;
    }
}

console.log('nSoniBerilgan', nSoniBerilgan)
console.log('birdanToNSonigachaYozibChiqishimUchunNechtaRaqamIshlatdim', birdanToNSonigachaYozibChiqishimUchunNechtaRaqamIshlatdim)
console.log('mendanSoralvotgaSon', mendanSoralvotganSon) 


//let nSoniBerilgan = 0;
//let birdanToNSonigachaYozibChiqishimUchunSon = 0;


/*let yozganRaqamlarimSoni = 0;
let oxirgiYozganSonim = 0;
let mendanSoralganSon = 1000;

function keyingiSonniAniqla() {
    return oxirgiYozganSonim + 1;
}

function soningXonalarSoni(son) {
    return son.toString().length;
}

while (true) {
    let yozishimKerakBolganSon = keyingiSonniAniqla();
    let yozishimKerakBolganSonningXonalariSoni = soningXonalarSoni(yozishimKerakBolganSon);

    let x = yozishimKerakBolganSonningXonalariSoni + yozganRaqamlarimSoni;

    if (x > mendanSoralganSon) {
        break;
    } else {
        oxirgiYozganSonim = yozishimKerakBolganSon;
        yozganRaqamlarimSoni = yozganRaqamlarimSoni + yozishimKerakBolganSonningXonalariSoni;
    }
}

console.log('yozganRaqamlarimSoni', yozganRaqamlarimSoni)
console.log('oxirgiYozganSonim', oxirgiYozganSonim)
console.log('mendanSoralganSon', mendanSoralganSon) */  