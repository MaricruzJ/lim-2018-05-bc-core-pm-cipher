const txtInit = document.getElementById("textoInicial");
const saltos = document.getElementById("saltos");
const txtEnd = document.getElementById("textoModificado");

const cifrar = () => {
  for( let i= 0; i < txtInit.value.length; i++){
    let posiciontextoInicial = txtInit.value.toUpperCase().charCodeAt(i);
    console.log(posiciontextoInicial);
    let posicionCifrado = (posiciontextoInicial - 65 + parseInt(saltos.value)) % 26 + 65;
    let letracifrada = String.fromCharCode(posicionCifrado);
    txtEnd.value += letracifrada;
  }
}

const descifrar = () => {
  for( let i= 0; i < txtInit.value.length; i++){
    let posiciontextoInicial = txtInit.value.toUpperCase().charCodeAt(i);
    let posicionDescifrado = (posiciontextoInicial + 65 - parseInt(saltos.value)) % 26 + 65;
    let letraDescifrada = String.fromCharCode(posicionDescifrado);
    txtEnd.value += letraDescifrada;
  }
}

window.cipher = {
  encode : cifrar,
  decode : descifrar
};
 