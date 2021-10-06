let whom = document.querySelector(".whom");

let whomArray = ["TECHNO FREAKS","DEVELOPERS","VEGANS","EVERYONE"]


window.addEventListener("load",function(){
    typeText();
   
})

let text = "";
let word = whomArray[0];
let forDelete = false;
let idx=0;
function typeText(){

    if(text.length==0 && forDelete==true){
        idx=(idx+1)%whomArray.length;
        word=whomArray[idx];
        forDelete=false;
    }

    if(text.length==word.length)
        forDelete=true;

   text = forDelete ? word.substring(0,text.length-1) :word.substring(0,text.length+1);
   whom.innerHTML=text;

    setTimeout(typeText,text.length==word.length?1000:100);
}
