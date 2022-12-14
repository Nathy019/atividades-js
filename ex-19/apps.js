function mostrar(){
    let dn = document.getElementById("DN").value 
    let resultado
    if (dn == "D"){
    document.getElementById("result").innerHTML = "Dia"}
    else if (dn == "N"){
        document.getElementById("result").innerHTML = "Noite"
    }
    else
    document.getElementById("result").innerHTML = "Périodo inválido"
}