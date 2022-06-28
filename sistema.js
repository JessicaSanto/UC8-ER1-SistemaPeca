//- Se a peça possuir um peso superior a 100 gramas, pode cadastrar


let peso = 50;
if(peso < 100){
    console.log("A peça precisa pesar no mínimo 100g")
}else{
    console.log("A peça possui peso adequeado")
}

//- Dada a capacidade de cada caixa, caso a lista de
// peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente. 

var listadePecas = ["Amortecedor", "Disco de Freio", "Motor"]

if(listadePecas.length < 10){
  console.log("É possível cadastrar mais peças")
}else{
    console.log("Não tem mais espaço na lista")
}

//- Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

var nomePeca = "Motor"

if(nomePeca.length > 3){
    console.log("Nome Válido")
}else{
    console.log("Coloque um nome válido")
}