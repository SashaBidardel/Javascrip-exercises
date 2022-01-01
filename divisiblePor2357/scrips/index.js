let num=document.getElementById("num");
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    let n=parseInt(num.value);
    let res=document.getElementById("res");   
    if ((n % 2 == 0) && n!=0){
        
        return res.innerHTML='El número: ' + n + ',es divisible por 2'
    }
    if ((n % 3 == 0) && n!=0){
        
        return res.innerHTML='El número: ' + n + ',es divisible por 3'
    }
    if ((n % 5 == 0) && n!=0){
        
        return res.innerHTML='El número: ' + n + ',es divisible por 5'
    }
    if ((n % 7 == 0) && n!=0){
        
        return res.innerHTML='El número: ' + n + ',es divisible por 2'
    }
    return res.innerHTML='El número: ' + n + ',no es divisible por 2,3,5 o 7'
})