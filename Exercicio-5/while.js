// const prompt = require("prompt-sync")(); - QUANDO FOR EXECUTAR NO NAVEGADOR, NÃO UTILIZAR
let totalRuins = 0;
let cont = 0;
while (cont <= 4) {
    let nota = prompt("Como você classifica a série Stranger Things? \n1 - RUIM \n2 - BOM \n3 - EXCELENTE");
    if(nota == 1){
            totalRuins++;
        }

        cont++;
    }

    console.log("Total de pessoas que avaliaram como ruim, a série Stranger Things.", totalRuins)
