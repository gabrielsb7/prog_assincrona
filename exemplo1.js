//---------------------------------------------------------------
// Primeiro Exemplo de execução assíncrona sem Promise
// Stack Síncrona --- Fila Assíncrona
//---------------------------------------------------------------

function funcA() {
  console.log("Sou a função síncrona A - Passo 1");
  funcAux(1);
  console.log("Sou a função síncrona A - Passo 2");
  funcAux(2);
}

async function funcB() {
  console.log("Sou a funcB!");
  await undefined;
  console.log("Fim da funcB!");
}

async function funcC() {
  console.log("Sou a funcC!");
  await undefined;
  console.log("Fim da funcC!");
}

function funcD() {
  console.log("Sou a síncrona funcD!");
}

async function funcAux(param) {
  await console.log("funcAux com valor " + param + " parando...");
  console.log("funcAux " + param  + " retornando!");
  await console.log("funcAux com valor " + param + " parando de novo...");
  console.log("funcAux " + param  + " retornando de novo!");
}

funcA();
funcB();
funcC();
funcD();

