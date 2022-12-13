function mostrar(){
    let p1 = document.getElementById("p1").value
    let p2 = document.getElementById ("p2").value
    let p3 = document.getElementById("p3").value

    menor = 0

    if(p1 < p2 && p1 < p3){
    menor = p1}
    else if (p2 < p1 && p2 < p3){
    menor = p2}
    else if (p3 < p1 && p3< p2){
    menor = p3}
    document.getElementById("result").innerHTML += ("o menor produto para você é: " + menor) 
}