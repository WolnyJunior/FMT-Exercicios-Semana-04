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
            opcaoHortifruti = Number(prompt("Quantos itens deseja comprar?"))
            console.log('Você escolheu Hortifruti: Quantidade: ' + opcaoHortifruti)
            break
        case 2:
            opcaoLaticinios = Number(prompt("Quantos itens deseja comprar?"))
            console.log('Você escolheu Laticínios: Quantidade ' + opcaoLaticinios)
            break
        case 3:
            opcaoCarne = Number(prompt("Quantos itens deseja comprar?"))
            console.log('Você escolheu Carnes: Quantidade: ' + opcaoCarne)
            break
        case 4:
            opcaoPeixes = Number(prompt("Quantos itens deseja comprar?"))
            console.log('Você escolheu Peixes: Quantidade: ' + opcaoPeixes)
            break
        case 5:
            opcaoAves = Number(prompt("Quantos itens deseja comprar?"))
            console.log('Você escolheu Aves: Quantidade: ' + opcaoAves)
            break
        case 6:
            opcaoSair = confirm("Deseja continuar suas compras?")

            document.getElementById("item").innerHTML = Math.max(opcaoHortifruti, opcaoLaticinios, opcaoCarne, opcaoPeixes, opcaoAves)

            console.log('Quantidade do item mais comprado: ' + Math.max(opcaoHortifruti, opcaoLaticinios, opcaoCarne, opcaoPeixes, opcaoAves))

                if (Math.max = opcaoHortifruti) {
                    setor = 'teste1'
                } else if (Math.max = opcaoLaticinios) {
                    setor = 'teste2'
                } else if (Math.max = opcaoCarne) {
                    setor = 'teste3'
                } else if (Math.max = opcaoPeixes) {
                    setor = 'teste4'
                } else if (Math.max = opcaoAves) {
                    setor = 'teste5'
                    console.log(setor)
                }

            document.getElementById("setor").innerHTML = setor

            console.log('O item mais comprado foi do setor ' + setor)
            break
        default:
            console.log('Opção Inválida')
            break
    }

} while (opcaoSair == true) {

    console.log("Compras finalizadas.")
    console.log('Obrigado, Volte Sempre!')
    document.getElementById("finalizar").innerHTML = 'Compras finalizadas.\nObrigado, Volte Sempre!'
}