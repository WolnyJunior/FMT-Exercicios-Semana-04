let opcaoHortifruti = 0;
let opcaoLaticinios = 0;
let opcaoCarne = 0;
let opcaoPeixes = 0;
let opcaoAves = 0;
let opcaoSair = true;

do {

    let compras = Number(prompt('De qual setor gostaria de comprar? \n1 - Hortifruti\n2 - Laticínios\n3 - Carnes\n4 - Peixes\n5 - Aves\n6 - Sair'))


    switch (compras) {
        case 1:
            qntHorti = Number(prompt("Quantos itens deseja comprar?"))
            console.log('Você escolheu Hortifruti: Quantidade: ' + qntHorti)
            break
        case 2:
            qntLaticinios = Number(prompt("Quantos itens deseja comprar?"))
            console.log('Você escolheu Laticínios: Quantidade ' + qntLaticinios)
            break
        case 3:
            qntCarne = Number(prompt("Quantos itens deseja comprar?"))
            console.log('Você escolheu Carnes: Quantidade: ' + qntCarne)
            break
        case 4:
            qntPeixes = Number(prompt("Quantos itens deseja comprar?"))
            console.log('Você escolheu Peixes: Quantidade: ' + qntPeixes)
            break
        case 5:
            qntAves = Number(prompt("Quantos itens deseja comprar?"))
            console.log('Você escolheu Aves: Quantidade: ' + qntAves)
            break
        case 6:
            opcaoSair = confirm("Deseja continuar suas compras?")
            console.log(qntHorti)
            console.log(qntLaticinios)
            console.log(qntCarne)
            console.log(qntPeixes)
            console.log(qntAves)
            console.log("Compras finalizadas.")
            break
        default:
            console.log('Opção Inválida')
            break
    }


} while (opcaoSair == true) {

    console.log('Obrigado, Volte Sempre!')
}