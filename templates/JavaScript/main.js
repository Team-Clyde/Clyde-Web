const texts = ["Find answers of your doubts"]
let count=0;
let index=0;
let currenttext="";
let letter="";

(function type(){

    if (count === texts.length){
        count=0;
    }
    currenttext=texts[count]
    letter = currenttext.slice(0,++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currenttext.length){

        index=0;
    }
    setTimeout(type,250);
})();

window.onload= function (){
     document.getElementById("transparent-container").style.color="white";
     document.getElementById("transparent-container").style.transform="scale(1.1)";
     document.getElementById("transparent-container").style.transition="2s";
}
function change1(){
    var Image_Id = document.getElementById("changeimg");
    if (Image_Id.src.match("logo/MainImg.png")) {
        Image_Id.src = "logo/online.png";
    }
    else {
        Image_Id.src = "logo/img1.png";
    }
}        
function change2(){
    var Image_Id = document.getElementById("changeimg");
    if (Image_Id.src.match("logo/MainImg.png")) {
        Image_Id.src = "logo/tutor.png";
    }
    else {
        Image_Id.src = "logo/MainImg.png";
    }
}        
function change3(){
    var Image_Id = document.getElementById("changeimg");
    if (Image_Id.src.match("logo/img1.png")) {
        Image_Id.src = "logo/online.png";
    }
    else {
        Image_Id.src = "logo/img1.png";
    }
}        
function change4(){
    var Image_Id = document.getElementById("changeimg");
    if (Image_Id.src.match("logo/img1.png")) {
        Image_Id.src = "logo/online.png";
    }
    else {
        Image_Id.src = "logo/img1.png";
    }
}        
function change5(){
    var Image_Id = document.getElementById("changeimg");
    if (Image_Id.src.match("logo/MainImg.png")) {
        Image_Id.src = "logo/couses.png";
    }
    else {
        Image_Id.src = "logo/MainImg.png";
    }
}        
function change6(){
    var Image_Id = document.getElementById("changeimg");
    if (Image_Id.src.match("logo/img1.png")) {
        Image_Id.src = "logo/online.png";
    }
    else {
        Image_Id.src = "logo/img1.png";
    }
}        


