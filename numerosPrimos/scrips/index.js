let num=document.getElementById("num");
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    let res=document.getElementById("res");
    let n=parseInt(num.value);

    if (n==0){
        return res.innerHTML="El número 0 no es primo"
    }
    if (n==Math.abs(1)){
        return res.innerHTML="El número: " + n + " es primo"
    }
    for (let index = 2; index <=Math.abs(n/2); index++) {
        if (Math.abs(n)%index==0){
         return res.innerHTML="El número: " + n + " no es primo";
        }
      
    }
    return res.innerHTML="El número: " + n + "  es primo";   
})