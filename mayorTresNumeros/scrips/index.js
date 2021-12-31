import { compare } from "./compare.js";

let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let num3=document.getElementById("num3");
let btn=document.getElementById("btn");
function hola(){
    console.log("hola");
}

btn.addEventListener("click",()=>{
let res=document.getElementById("res");  
let n1=parseInt(num1.value);
let n2=parseInt(num2.value);
let n3=parseInt(num3.value);
res.innerHTML=compare(n1,n2,n3);
})