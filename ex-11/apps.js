let contador = 1

while (contador<=100){
    console.log (contador)
    contador= contador + 2
    document.getElementById("resposta").innerHTML += contador +"<br>"
 }
// outro jeito para ser impares
// let contador = 0
// while (contador <= 100) {
//     if (contador % 2 == 1)
//     {
//         document.getElementById("resposta").innerHTML += contador + "<br>"
//     }
//     contador++    
// }
