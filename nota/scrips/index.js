let nota=document.getElementById("nota");
let btn=document.getElementById("btn");
let res=document.getElementById("res");
btn.addEventListener("click",()=>{
    calif=parseInt(nota.value);
    if ((calif>=0) && (calif<3)){
        res.innerHTML="Es usted un fardo,su calificación es de muy deficiente"
    }
    if ((calif>=3) && (calif<5)){
        res.innerHTML="Su calificación es de insuficiente"
    }
    if ((calif>=5) && (calif<6)){
        res.innerHTML="Su calificación es de suficiente"
    }
    if ((calif>=6) && (calif<7)){
        res.innerHTML="Su calificación es de bien"
    }
    if ((calif>=7) && (calif<9)){
        res.innerHTML="Su calificación es de Notable"
    }
    if ((calif>=9) && (calif<=10)){
        res.innerHTML="Su calificación es de sobresaliente"
    }
})

