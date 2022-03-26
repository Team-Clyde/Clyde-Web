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
    Image_Id.src = "logo/online.png";
    
}        
function change2(){
    var Image_Id = document.getElementById("changeimg");
    Image_Id.src = "logo/tutor.png";
    
    
}        
function change3(){
    var Image_Id = document.getElementById("changeimg");
    
        Image_Id.src = "logo/online.png";
    
}        
function change4(){
    var Image_Id = document.getElementById("changeimg");
   
        Image_Id.src = "logo/online.png";
    
}        
function change5(){
    var Image_Id = document.getElementById("changeimg");
    Image_Id.src = "logo/courses.png";
    
}        
function change6(){
    var Image_Id = document.getElementById("changeimg");
    Image_Id.src = "logo/online.png";
    
}        


