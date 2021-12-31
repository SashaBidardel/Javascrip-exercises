let num1=document.getElementById("num1");
let num2=document.getElementById("num2");

let btn=document.getElementById("btn");
btn.addEventListener("click",() =>{
if ((num1.value) > (num2.value)){
    res=document.getElementById("res").innerHTML='El número ' + num1.value + ' es mayor al número ' + num2.value;
   
}
if ((num2.value) > (num1.value)){
    res=document.getElementById("res").innerHTML='El número ' + num2.value + ' es mayor al número ' + num1.value;
    
}
if ((num2.value) == (num1.value)){
    res=document.getElementById("res").innerHTML='El número ' + num2.value + ' es igual al número ' + num1.value;
}

});