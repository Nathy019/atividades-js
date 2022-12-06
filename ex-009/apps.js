function convercao(){
    var valor = document.getElementById("valor").value
    var litros = parseFloat(valor/5).toFixed(2)
    var km = parseFloat(litros * 20).toFixed(2)
    //to.fixed é utilizado para definir o número de casas decimais
    document.write(" você tem R$ ", (valor), " ,com esse valor é possivel comprar ", (litros), " L ", " , essa contidade de lirtros faz com que o carro rode ", (km), "km" , ".")
    //document.write é utilizado para passar o conteúdo desejado
}
