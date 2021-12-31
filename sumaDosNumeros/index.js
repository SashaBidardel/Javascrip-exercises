let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    let res=document.getElementById("res").innerHTML=parseInt(num1.value) + parseInt(num2.value);
    console.log("hola");
})