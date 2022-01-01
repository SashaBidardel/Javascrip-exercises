let num=document.getElementById("num");
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    let n=parseInt(num.value);
    let res=document.getElementById("res"); 
    res.innerHTML='El número: ' + n ;
    let div=[2,3,5,7];
    for (let index = 0; index < 4; index++) {
        if ((n % div[index] == 0) && n!=0){
            res.innerHTML+=',es divisible por:' + div[index] + ' '
        }
        
    }
    if (((n % 2 != 0) && (n % 3 != 0) && (n % 5 != 0) && (n % 7 != 0)) || n==0) {
        res.innerHTML="El número: " + n + " ,no es divisible ni por 2,ni por 3,ni por 5,ni por 7 "
    } 
})