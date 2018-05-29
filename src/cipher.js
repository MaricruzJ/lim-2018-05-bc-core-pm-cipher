const txtInit = document.getElementById('textoInicial');
const saltos = document.getElementById('saltos');
const txtEnd = document.getElementById('textoModificado');

const cifrar = () => {
  txtEnd.value = '';
  
  for( let i= 0; i < txtInit.value.length; i++){
    
    let posiciontextoInicial = txtInit.value.charCodeAt(i);
    
    if(posiciontextoInicial >= 65 && posiciontextoInicial <= 90){
      let posicionCifrado = (posiciontextoInicial - 65 + parseInt(saltos.value)) % 26 + 65;
      let letracifrada = String.fromCharCode(posicionCifrado);
      txtEnd.value += letracifrada;
    }else if (posiciontextoInicial >= 97 && posiciontextoInicial <= 122){
      posicionCifrado = (posiciontextoInicial - 97 + parseInt(saltos.value)) % 26 + 97;
      letracifrada = String.fromCharCode(posicionCifrado);
      txtEnd.value += letracifrada;
      
    //}else if(posiciontextoInicial >= 32 && posiciontextoInicial <= 64){
    } else {
      letracifrada = String.fromCharCode(posiciontextoInicial);
      txtEnd.value += letracifrada;
    }
  }
}

const descifrar = () => {
  txtEnd.value = '';
  
  for( let i= 0; i < txtInit.value.length; i++){
    
    let posiciontextoInicial = txtInit.value.charCodeAt(i);
    
    if(posiciontextoInicial >= 65 && posiciontextoInicial <= 90){
      let posicionDescifrado = (posiciontextoInicial + 65 - parseInt(saltos.value)) % 26 + 65;
      let letraDescifrada = String.fromCharCode(posicionDescifrado);
      txtEnd.value += letraDescifrada;

    }else if (posiciontextoInicial >= 97 && posiciontextoInicial <= 122){
      let nuevaPosicion = posiciontextoInicial-32;
      posicionDescifrado = (nuevaPosicion + 65 - parseInt(saltos.value)) % 26 + 65;
      letraDescifrada = String.fromCharCode(posicionDescifrado);
      txtEnd.value += letraDescifrada.toLowerCase();

    }else if(posiciontextoInicial >= 32 && posiciontextoInicial <= 64){
      posicionCifrado = posiciontextoInicial;
      letracifrada = String.fromCharCode(posicionCifrado);
      txtEnd.value += letracifrada;
    }
  }
}




/* const cifrar = () => {
txtEnd.value = '';
for( let i= 0; i < txtInit.value.length; i++){
let posiciontextoInicial = txtInit.value.toUpperCase().charCodeAt(i);
console.log(posiciontextoInicial);
let posicionCifrado = (posiciontextoInicial - 65 + parseInt(saltos.value)) % 26 + 65;
let letracifrada = String.fromCharCode(posicionCifrado);
txtEnd.value += letracifrada;
}
}

const descifrar = () => {
txtEnd.value = '';
for( let i= 0; i < txtInit.value.length; i++){
let posiciontextoInicial = txtInit.value.toUpperCase().charCodeAt(i);
let posicionDescifrado = (posiciontextoInicial + 65 - parseInt(saltos.value)) % 26 + 65;
let letraDescifrada = String.fromCharCode(posicionDescifrado);
txtEnd.value += letraDescifrada;
}
} */



window.cipher = {
  encode : cifrar,
  decode : descifrar
};