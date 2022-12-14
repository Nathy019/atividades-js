function mostrar (){
    let n1 = document.getElementById("n1").value
    let resultado

    if (n1>0) {
resultado = ("Este número é positivo")
document.getElementById("result").innerHTML = resultado
    }
    else
    document.getElementById("result").innerHTML = "Este número negativo"
}