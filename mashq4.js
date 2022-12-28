/* html da
1)variant <button onclick="alert('Siz menga bosdingiz')">Mishkani kistamga sossam oynab kityapti...</button>-->
2)variant <button onclick="onClickButton">bosing</button>-->
  JS ga o'tamiz
function onClickButton () {
    alert('menga bosdingiz');
}                         
*/

/* html
<p onclick = "onClickButton()">bosing</p>
  JS
  function onClickButton() {
    alert('menga bosdingiz');
}
*/



var counter = 0; // global
function onClickButton() {
    counter++;
    console.log(counter);
}                         // cheksiz ketaveradi bosilsa






var counter = 0;
function onClickButton(el) { // element(el)
    

    counter++;
    el.innerHTML ="shu yerga bosing: " + counter; // htmldagi ->  <button name="mainButton" onclick="onClickButton(this)">Bosing</button>
    
    //el.style.background = "red";
    //el.style.color = "blue";

    
    el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px";
}
function onInput(el) {
    if(el.value == "Salom")
    alert("Salom Bonushka!");

    console.log(el.value);
} // Salom dib yozilsa alertdan "sanga ham salom" yozuv chiqadi.

