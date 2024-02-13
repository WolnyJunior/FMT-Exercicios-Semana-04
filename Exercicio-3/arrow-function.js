const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ")
let nomeAluno = prompt("Digite o nome do aluno para calcular a média: ")

function saudacao() {
    const d = new Date();
    let hora = d.getHours();

    if (hora > 6 && hora < 12) {
        console.log(`Olá ${nome}, Bom Dia! \nVamos calcular a média do(a) ${nomeAluno}`)
    } else if (hora >= 12 && hora < 18) {
        console.log(`Olá ${nome}, Boa Tarde! \nVamos calcular a média do(a) ${nomeAluno}`)
    } else if (hora >= 18 && hora < 23) {
        console.log(`Olá ${nome}, Boa Noite! \nVamos calcular a média do(a) ${nomeAluno}`)
    } else {
        console.log(`Olá ${nome}, Isso não é hora de estar trabalhando, vá descansar!`)
    }
}

saudacao();

let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))
let nota3 = Number(prompt("Digite a terceira nota:"))
let nota4 = Number(prompt("Digite a quarta nota:"))

let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(`A média das notas de ${nomeAluno} é de:`, media)