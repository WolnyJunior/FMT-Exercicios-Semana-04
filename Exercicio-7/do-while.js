// Objeto para armazenar os produtos e suas quantidades
let produtos = {
    'Hortifruti': 0,
    'Laticínios': 0,
    'Carnes': 0,
    'Peixes': 0,
    'Aves': 0
};

// Função para perguntar ao cliente qual produto deseja comprar
function perguntarProduto() {
    let escolha = prompt("Selecione o produto que deseja comprar:\n1. Hortifruti\n2. Laticínios\n3. Carnes\n4. Peixes\n5. Aves\n6. Fechar pedido");

    // Verificar a escolha do cliente
    switch (escolha) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
            // Pergunta a quantidade de itens
            let quantidade = parseInt(prompt(`Quantos itens de ${Object.keys(produtos)[parseInt(escolha) - 1]} você deseja comprar?`));

            // Atualiza a quantidade do produto escolhido
            produtos[Object.keys(produtos)[parseInt(escolha) - 1]] += quantidade;

            // Chama novamente a função para perguntar o próximo produto
            perguntarProduto();

            break;
        case '6':
            // Encerra o loop de perguntas
            opcaoSair = alert("Encerrando as compras")
            break;
        default:
            // Se a escolha for inválida, pede ao cliente para escolher novamente
            alert("Escolha inválida. Por favor, selecione uma opção válida.");
            perguntarProduto();
            break;
    }
}

// Chamada da função para começar a perguntar ao cliente
perguntarProduto();

// Encontra o produto com a maior quantidade
let produtoMaiorQuantidade = Object.keys(produtos).reduce((a, b) => produtos[a] > produtos[b] ? a : b);
console.log(`O produto com a maior quantidade é: ${produtoMaiorQuantidade}, com ${produtos[produtoMaiorQuantidade]} unidades.`);

//imprime o resultado no navegador
document.getElementById("compras").innerHTML = "O produto com a maior quantidade é: " + `${produtoMaiorQuantidade}` + ", com " + `${produtos[produtoMaiorQuantidade]}` + "unidades."

console.log("Compras finalizadas.")
console.log('Obrigado, Volte Sempre!')
document.getElementById("finalizar").innerHTML = 'Compras finalizadas.<br>Obrigado, Volte Sempre!'

