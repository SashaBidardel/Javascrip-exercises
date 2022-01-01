let dni=document.getElementById("dni");
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
  dniNumber=parseInt(dni.value);
  let rest=dniNumber%23;
  let list=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","Y","Z"];
  res=document.getElementById("res");
  res.innerHTML="Le corresponde la letra "+ list[rest] + " en su NIF";
})