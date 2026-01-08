const readline = require("readline");

// Interface para ler dados do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que calcula o saldo de vitórias e define o nível do herói
function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Pergunta as vitórias
rl.question("Digite o número de vitórias: ", (vitorias) => {
    // Pergunta as derrotas
    rl.question("Digite o número de derrotas: ", (derrotas) => {
        // Converte para número
        vitorias = Number(vitorias);
        derrotas = Number(derrotas);

        // Chama a função
        const resultado = calcularRank(vitorias, derrotas);
        console.log(resultado);

        // Fecha a leitura
        rl.close();
    });
});
