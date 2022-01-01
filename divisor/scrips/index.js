let num=document.getElementById("num");
let btn=document.getElementById("btn");


btn.addEventListener("click",()=>{
    let res=document.getElementById("res");
    let n=parseInt(num.value);
    if (n==0){
        return res.innerHTML="El número 0 no tiene divisores";
        
    }
    if (n==1){
        return res.innerHTML="El número 1 solo tiene de divisor el propio 1";
        
    }
    res.innerHTML="Los divisores del número "+ n + " son: " + n + ",1"
    for (let index = 2; index <=n/2; index++) {
        
        if (n % index ==0 ){
            res.innerHTML+=","+ index ;
        }
        
    }

})