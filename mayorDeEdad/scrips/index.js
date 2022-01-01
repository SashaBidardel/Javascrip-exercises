let num=document.getElementById("num");
let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    let res=document.getElementById("res");
    let n=parseInt(num.value);
    if (n>=18){
       return res.innerHTML="Es usted mayor de edad,por lo cual puede conducir"
    }
    return res.innerHTML="Es usted menor de edad,por lo cual no puede conducir"
})