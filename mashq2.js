var data = confirm("Siz haliyam uydamisiz?");
if(data) {
alert("Siz zo'rsiz");
}

var data = prompt("Sizning yoshingiz nechchida?");
console.log(data);

var person = null;
if(confirm("siz qatiymisiz?")) {
    person = prompt("ismingizni yozing");
    alert("salom, " + person);
} else {
    alert("siz <bekor qilish tugmasini> bosdingiz");
}
