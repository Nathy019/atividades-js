function buscar(){
    let nome= document.getElementById("nome").value
    let idade= document.getElementById("idade").value
    let result 
if (idade <13){
    result = "você ainda é uma criança"
}
else if (idade >=13 && idade <=20 ){
    result= "você já é adolescente"
}
else  result= "você já é adulto"

document.getElementById("result").innerHTML = result
}