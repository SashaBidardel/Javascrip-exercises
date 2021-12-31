let text=document.getElementById("text");
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    let phrase=document.getElementById("res");
    let cont=0;
    for (let index = 0; index < text.value.length; index++) {
        if((text.value.charAt(index) == 'a') || (text.value.charAt(index) == 'A')){
            cont+=1;
        }
      phrase.innerHTML='El número de veces que sale la letra a en la frase: "'  + text.value + '",son: ' + cont;
    }
    console.log(text.value);
})