// const prompt = require("prompt-sync")(); //- QUANDO FOR EXECUTAR NO NAVEGADOR, NÃO UTILIZAR
let totalRuins = 0;
let totalBons = 0;
let totalExcelente = 0;
let semOpiniao = 0;
let cont = 0;
while (cont < 4) {

    let user = prompt("Digite seu nome:")

    let respostaNota = prompt("Como você classifica a série Stranger Things? \nRUIM \nBOA \nEXCELENTE \nNão Pode Opinar")
    let nota = respostaNota.toLowerCase()

    if (nota == "ruim") {
        totalRuins++;
        notaUser = user + " Achou a série " + nota
    } else if (nota == "boa") {
        totalBons++
        notaUser = user + " Achou a série " + nota
    } else if (nota == "excelente") {
        totalExcelente++
        notaUser = user + " Achou a série " + nota
    } else {
        semOpiniao++
        notaUser = user + " Não foi capaz de opinar sobre a série."
    }

    console.log(notaUser)
    cont++;
}
console.log("Total de pessoas que avaliaram como ruim, a série Stranger Things.", totalRuins)
