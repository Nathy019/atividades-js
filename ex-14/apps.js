console.log("terminou")
function tabuada(){
let cont = 0
let n1 = document.getElementById("n1").value
while(cont<=10){
    console.log("n1" + cont + "=" + cont *n1)
    document.getElementById("resposta").innerHTML += (n1 + "x" + cont + "=" + cont *n1+ "<br>")
    cont++
}
}