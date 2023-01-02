/*const names = ['asad', 'samad', 'bashara']

let i = 0

while (i < names.length) {
    console.log(names[i].toUpperCase())
    i++
}



let i = 5

do {
    console.log(i)
    i++
} while (i < 5)*/


/*var text = document.getElementById('text');
console.log(text.id); // text
*/

/*var text = document.getElementById('text');
console.log(text.title); // Oddiy tekst
*/

 /*var text = document.getElementById('text');
text.title = "Yangi tekst";
console.log(text.title); // Yangi test

text.style.color = "red";
text.style.backgroundColor = "green";
text.innerHTML = "New<br>string";*/

//document.getElementById('text').style.color = "white"; // New string

/* var spans = document.getElementsByTagName('span');
for(var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
} 
*/

/*var spans = document.getElementsByClassName('simple-text');

for(var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
} */


        document.getElementById('main-form').addEventListener("submit", checkForm);
        function checkForm(event) {
            event.preventDefault();
            var el = document.getElementById('main-form');
            //console.log("Text");
            //var name = document.getElementById('name').value; 

            var name = el.name.value; // bundayam ishlidi va chunarliroq
            var pass = el.pass.value;    
            var repass = el.repass.value;
            var state = el.state.value;
            
            //console.log(state + " - " + pass + " - " + repass + " - " + name);

            var fail = "";

            if(name == "" || pass == "" || state == "")
                fail = "Hamma bosh xonalarni to'ldiring";
            else if(name.length <= 1 || name.length > 50)
                fail = "Uzunroq ism yozing";
            else if(pass != repass)
                fail = "Siz yozgan parol to'g'ri kelishi kerak";
            else if(pass.split("&").length > 1)
                fail = "To'g'ri kelmidigan parol";

            if(fail != "") 
                document.getElementById('error').innerHTML = fail;
              
            else {
                alert("Hamma xonalar to'ldirildi");
                window.location = 'https://kinoman.uz/';
                
            }
            
        }

        //HTML

        /* 
        <form id="main-form" onsubmit="return checkForm(this)" method="post">
    <label for="name">Ism</label>
    <input type="text" name="name" placeholder="Ism" id="name"><br><br>
    <label for="password">Maxfiyson:</label>
    <input type="password" name="pass" placeholder="Maxfiyson" id="pass"><br><br>
    <label for="repass">Tekshirish Maxfiysonni</label>
    <input type="password" name="repass" placeholder="Tekshirish Maxfiysonni" id="repass"><br><br>
    <span>Jinsi:</span>
    <input type="radio" name="state" id="male" value="erkak">
    <label for="male">erkak</label>
    <input type="radio" name="state" id="female" value="ayol">
    <label for="female">ayol</label><br><br>
    <div id="error" style="color: red"></div>
    <input type="submit" name="submit" value="Tayyor">
</form> 

        */
