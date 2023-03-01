//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
//(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
//ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const num = parseInt(prompt("Digite um número inteiro: "));
let a = 0,
  b = 1,
  c;
let pertence = false;

if (num === a || num === b) {
  pertence = true;
} else {
  while (b < num) {
    c = a + b;
    a = b;
    b = c;
    if (b === num) {
      pertence = true;
      break;
    }
  }
}

if (pertence) {
  console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${num} não pertence à sequência de Fibonacci.`);
}

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

// Define o vetor de faturamento diário
const faturamentoDiario = [
  1200, 800, 1500, 950, 1100, 1300, 900, 1400, 1000, 1200, 1300, 1150, 1050,
  1400, 1250, 1100, 900, 1350, 1000, 1200, 1100, 1400, 800, 1300, 1150, 1250,
  900, 1050, 1200, 1100,
];

// Inicializa as variáveis menorFaturamento e maiorFaturamento com o primeiro valor do vetor
let menorFaturamento = faturamentoDiario[0];
let maiorFaturamento = faturamentoDiario[0];

// Calcula a soma dos valores de faturamento diário
let somaFaturamento = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
  somaFaturamento += faturamentoDiario[i];

  // Atualiza as variáveis menorFaturamento e maiorFaturamento
  if (faturamentoDiario[i] < menorFaturamento) {
    menorFaturamento = faturamentoDiario[i];
  }
  if (faturamentoDiario[i] > maiorFaturamento) {
    maiorFaturamento = faturamentoDiario[i];
  }
}

// Calcula a média mensal de faturamento
const mediaFaturamento = somaFaturamento / faturamentoDiario.length;

// Calcula o número de dias em que o faturamento diário foi superior à média mensal
let numDiasSuperiorMedia = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > mediaFaturamento) {
    numDiasSuperiorMedia++;
  }
}

// Imprime os resultados
console.log("Menor faturamento diário: " + menorFaturamento);
console.log("Maior faturamento diário: " + maiorFaturamento);
console.log(
  "Número de dias com faturamento diário superior à média mensal: " +
    numDiasSuperiorMedia
);

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let totalFaturamento = 0;

// Calcula o total de faturamento mensal
for (let estado in faturamentoMensal) {
  totalFaturamento += faturamentoMensal[estado];
}

// Calcula o percentual de representação de cada estado
for (let estado in faturamentoMensal) {
  const percentual = (
    (faturamentoMensal[estado] / totalFaturamento) *
    100
  ).toFixed(2);
  console.log(`${estado}: ${percentual}%`);
}

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

// Define a string a ser invertida
let stringOriginal = "O rato roeu a roupa do rei de Roma";

// Inicializa uma string vazia que vai armazenar a string invertida
let stringInvertida = "";

// Percorre a string original de trás para frente, adicionando cada caractere na string invertida
for (let i = stringOriginal.length - 1; i >= 0; i--) {
  stringInvertida += stringOriginal[i];
}

// Imprime a string original e a string invertida
console.log("String original: " + stringOriginal);
console.log("String invertida: " + stringInvertida);
