import { message, messageNot } from "./messages.js";

let num=document.getElementById("num");
let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
  let numb=parseInt(num.value);
  let res=document.getElementById("res");
  if ((numb % 2 == 0) && (numb !=0)){ 
      return res.innerHTML= message(numb);
  }
   return res.innerHTML= messageNot(numb);
})
