function fa() {
  console.log("fa");
}
function fb() {
  console.log("fb - 1");
  aux(1);
  console.log("fb - 2");
}
async function fc() {
  console.log("fc - 1");
  await undefined;
  console.log("fc - 2");
}
async function fd() {
  console.log("fd - 1");
  aux(2);
  await undefined;
  console.log("fd");
}
async function aux(param) {
  await console.log("Aux - 1 - " + param);
  console.log("Aux - 2 - " + param);
}

const direcao = {
  DIREITA: "DIREITA",
  ESQUERDA: "ESQUERDA",
};

function teste(key) {
  switch (key) {
    case direcao.DIREITA:
      alert("DIREITA");
      break;
    case direcao.ESQUERDA:
      alert("ESQUERDA");
      break;
    default:
      alert("INDEFINIDO");
      break;
  }
}
teste("DIREITA");

fd();
fc();
fb();
fa();
