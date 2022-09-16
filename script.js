let input = document.querySelector("input");
const mensagem = document.querySelector("span");
let button = document.querySelector(".btn");

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
    input.value = "";
    button.removeEventListener("click", recebeQuantDezenas);
    recebeDezenas(quantidadeDezenasEscolhidas);
  }
}

function zeraInput() {
  quantidadeDezenasEscolhidas = 0;
  input.value = "";
  input.focus();
}

function recebeDezenas(dezenas) {
  console.log(dezenas);
  button.innerHTML = "Confirmar dezena";
  let dezenasEscolhidas = [],
    achou;
  document.querySelector(".btn").addEventListener("click", () => {
    achou = false;
    dezenaInserida = parseInt(input.value);
    if (dezenaInserida < 1 || dezenaInserida > 60) {
      mensagem.innerText = "  Dezena não permitida!";
      setTimeout(() => {
        mensagem.innerText = "";
      }, 2000);
      zeraInput();
    } else if (dezenasEscolhidas.length === 0) {
      dezenasEscolhidas.push(dezenaInserida);
      zeraInput();
    } else {
      dezenasEscolhidas.forEach(dezena => {
        if (dezenaInserida == dezena) {
          console.log("Já tem");
          achou = true;
          zeraInput();
        }
      });
      if (!achou) {
        dezenasEscolhidas.push(dezenaInserida);
        zeraInput();
      }
    }
    console.log(dezenasEscolhidas);
  });
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
