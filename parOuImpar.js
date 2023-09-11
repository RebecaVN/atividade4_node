//Importando o módulo 
const readline = require('readline-sync')

const numero = parseInt(readline.question("Digite um número: \n"))
if(numero/2 > 0){
    console.log("O número é par");
}else{
    console.log("O número é ímpar.");
}