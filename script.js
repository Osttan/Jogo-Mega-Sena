let input = document.querySelector("input");
const mensagem = document.querySelector("span");
let button = document.querySelector(".btn"),
  resultado,
  aposta;

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
    recebeDezenas(quantidadeDezenasEscolhidas);
    button.removeEventListener("click", recebeQuantDezenas);
    zeraInput();
  }
}

function zeraInput() {
  quantidadeDezenasEscolhidas = 0;
  input.value = "";
  input.focus();
}

function recebeDezenas(dezenas) {
  button.innerHTML = "Confirmar Dezena";
  let dezenasEscolhidas = [],
    achou;

  document.querySelector(".btn").addEventListener("click", () => {
    if (dezenasEscolhidas.length < dezenas) {
      achou = false;
      dezenaInserida = parseInt(input.value);
      if (dezenaInserida < 1 || dezenaInserida > 60) {
        mensagem.innerText = "  Dezena não permitida!";
        setTimeout(() => {
          mensagem.innerText = "";
        }, 1500);
        zeraInput();
      } else if (dezenasEscolhidas.length === 0) {
        dezenasEscolhidas.push(dezenaInserida);
        zeraInput();
      } else {
        dezenasEscolhidas.forEach(dezena => {
          if (dezenaInserida == dezena) {
            mensagem.innerText = "  Dezena já inserida!";
            setTimeout(() => {
              mensagem.innerText = "";
            }, 1500);
            achou = true;
            zeraInput();
          }
        });
        if (!isNaN(dezenaInserida) && !achou) {
          dezenasEscolhidas.push(dezenaInserida);
          zeraInput();
        }
      }
      console.log(dezenasEscolhidas);
      if (dezenasEscolhidas.length == dezenas) {
        button.innerHTML = "Confira o resultado!";
        input.focus();
      }
    }
  });
}

function completaDezenas(escolhidas) {
  let i = 0,
    aleatorio;

  const faltantes = 15 - escolhidas.length;

  while (i < faltantes) {
    aleatorio = Math.floor(Math.random() * 60) + 1;
    if (escolhidas.indexOf(aleatorio) == -1) {
      escolhidas.push(aleatorio);
      i++;
    }
  }
  console.log(`Os números escolhidos foram ${escolhidas}`);
  return escolhidas;
}

function sorteia() {
  let resultado = [Math.floor(Math.random() * 60) + 1],
    i = 0;
  while (i < 5) {
    aleatorio = Math.floor(Math.random() * 60) + 1;
    if (resultado.indexOf(aleatorio) == -1) {
      resultado.push(aleatorio);
      i++;
    }
  }
  return resultado;
}

function adeusMp(resultado, numerosTeste) {
  let numerosCorretos = 0;
  numerosTeste.forEach(numero => {
    for (let i = 0; i <= resultado.length; i++) {
      if (resultado[i] == numero) {
        numerosCorretos++;
      }
    }
  });
  if (numerosCorretos == 6) {
    return "Você ganhou, cacete!!!!!!";
  } else {
    return `Você acertou ${numerosCorretos}!!`;
  }
}
