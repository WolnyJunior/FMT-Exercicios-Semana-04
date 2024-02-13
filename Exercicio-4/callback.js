const prompt = require("prompt-sync")();

function adicao(){
    let numero1 = Number(prompt("Digite o primero número:"));
    let numero2 = Number(prompt("Digite o segundo número:"));

    let soma = numero1 + numero2;
    console.log("O resultado da soma é =", soma)
}

function anonima(){
    adicao();
}
    
anonima()