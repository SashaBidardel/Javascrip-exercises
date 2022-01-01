import { min } from "./min.js";

let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let btn=document.getElementById("btn");



btn.addEventListener("click",()=>{
    
    console.log("hola")
    let res=document.getElementById("res");
    let n1=parseInt(num1.value);
    let n2=parseInt(num2.value);
    
    
    let mini=min(n1,n2);
    let cont=-1;
    let list=[];
    for (let index = 1; index <= Math.abs(mini); index++) {
        if ((n1 % index==0) && (n2 % index==0)){
            cont+=1;
            list.push(index);

        }
    }

        if (cont==0){
            return res.innerHTML="Los números " + n1 + " y " + n2 + " no tienen divisores comunes aparte del 1";
        }
        res.innerHTML="Los números " + n1 + " y " + n2 + " tienen como divisores comunes los siguientes números:";
        for (let index = 0; index < list.length; index++) {
            res.innerHTML+= "," + list[index];
            
            
        }
    
})