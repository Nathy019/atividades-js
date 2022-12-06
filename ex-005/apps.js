function mostrarnumero(){
    let n1=document.getElementById("numero01").value
    let n2=document.getElementById("numero02").value
    let n3=document.getElementById("numero03").value
    let resposta= n1 + " - " + n2 + " - " + n3
    document.getElementById("mensagem").innerHTML = resposta
}
