let input = document.querySelector("input");
const mensagem = document.querySelector("span");
let button = document.querySelector(".btn");
// let buttonClickado = document.querySelector(".recebida");

button.addEventListener("click", recebeQuantDezenas);

function recebeQuantDezenas() {
  let quantidadeDezenasEscolhidas = input.value;
  if (
    isNaN(quantidadeDezenasEscolhidas) ||
    Math.trunc(quantidadeDezenasEscolhidas) != quantidadeDezenasEscolhidas
  ) {
    alert(
      "Atenção!!! Somente números inteiros são permitidos para a escolha da quantidade de dezenas."
    );
    zeraInput();
  } else if (
    quantidadeDezenasEscolhidas < 1 ||
    quantidadeDezenasEscolhidas > 15
  ) {
    alert(
      "Atenção!!! Entrada inválida. Escolha no mínimo 1 dezena e no máximo 15 dezenas."
    );
    zeraInput();
  } else {
    button.innerHTML = "Clique para ver se ganhou!!!";
    input.value = "";
    // return quantidadeDezenasEscolhidas;
    recebeDezenas(quantidadeDezenasEscolhidas);
  }
}

function zeraInput() {
  quantidadeDezenasEscolhidas = 0;
  input.value = "";
  input.focus();
}

// button.addEventListener("click", recebeDezenas);

function recebeDezenas(dezenas) {
  dezenasEscolhidas = [];
  dezenaAtual = 0;
  for (i = 0; i <= dezenas; i++) {
    input.addEventListener("change", () => {
      dezenasEscolhidas[i] = input.value;
      mensagem.innerText = `  Insira a ${i}ª dezena`;
    });
  }
}

// function sorteia() {
//   let resultado = [];
//   for (let i = 0; i <= 5; i++) {
//     resultado[i] = Math.floor(Math.random() * 60) + 1;
//   }
//   return resultado;
// }

// resultado = sorteia();
// console.log(resultado);

// let numerosTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// // let numerosTeste = sorteiaNumeros();

// console.log(numerosTeste);

// function adeusMp(resultado, numerosTeste) {
//   let numerosCorretos = 0;
//   numerosTeste.forEach(numero => {
//     for (let i = 0; i <= resultado.length; i++) {
//       if (resultado[i] == numero) {
//         numerosCorretos++;
//       }
//     }
//   });
//   if (numerosCorretos == 6) {
//     console.log("Você ganhou, cacete!!!!!!");
//   } else {
//     console.log(`Você acertou ${numerosCorretos}!!`);
//   }
// }
