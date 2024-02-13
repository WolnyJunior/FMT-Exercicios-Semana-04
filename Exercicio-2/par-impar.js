const prompt = require("prompt-sync")();

function parImpar(){
    let numero = prompt('Digite um número:')

    if (numero % 2 == 0) {
        console.log(`Você digitou ${numero}, este é um número PAR`)
    } else {
        console.log(`Você digitou ${numero}, este é um número ÍMPAR`)
    }
}

parImpar()