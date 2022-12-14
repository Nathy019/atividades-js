function mostrar() {
    let n1 =  parseFloat (document.getElementById("n1").value)
    let n2 = parseFloat (document.getElementById("n2").value)
    let funcao = document.getElementById("funcao").value
    let resultado = 0

    if (funcao == "+") {
        resultado = n1 + n2
    document.getElementById("result").innerHTML = resultado} 
    else if (funcao == "-"){
        resultado = n1 - n2
    document.getElementById("result").innerHTML = resultado}
    else if (funcao == "/"){
    resultado = n1 / n2 
    document.getElementById("result").innerHTML = resultado}
    else if (funcao == "*"){
    resultado = n1 * n2 
    document.getElementById("result").innerHTML = resultado}
    else 
    document.getElementById("result").innerHTML = "Função invalida"
}
