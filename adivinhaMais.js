function sorteia() {
  return Math.round(Math.random() * 10);
}

function sorteiaNumeros(quantidade) {
  let segredos = [];
  let numero = 1;

  while (numero < quantidade) {
    let numeroAleatorio = sorteia();

    if (numeroAleatorio !== 0) {
      let achou = false;

      for (let posicao = 0; posicao < segredos.length; posicao++) {
        if (segredos[posicao] == numeroAleatorio) {
          achou = true;
          break;
        }
      }

      if (achou == false) {
        segredos.push(numeroAleatorio);
        numero++;
      }
    }
  }
  return segredos;
}

let segredos = sorteiaNumeros(5);

let input = document.querySelector("input");
input.focus();

function verifica() {
  let achou = false;

  for (let posicao = 0; posicao < segredos.length; posicao++) {
    if (input.value == segredos[posicao]) {
      alert("Você ACERTOU!!");
      achou = true;
      break;
    }
  }
  if (achou == false) {
    alert("Você ERROU!");
  }

  input.value = "";
  input.focus();
}

let button = document.querySelector("button");
button.onclick = verifica;
