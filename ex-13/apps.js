function num(){
let resul
let idade= document.getElementById("idade").value
if(idade <18){
resul="você ainda é de menor"
}
else if(idade >=18 && idade <30){
resul="você já é de maior"
}
else 
resul="invalid"


document.getElementById("result").innerHTML = resul
}
