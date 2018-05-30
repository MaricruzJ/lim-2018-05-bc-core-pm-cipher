let posicionCifrado;
let letracifrada;
let nuevaPosicion;
let posicionDescifrado;
let letraDescifrada;

const cifrar = (txtInit,saltos) => {
  let txtEnd = '';
 
  for( let i= 0; i < txtInit.length; i++){
    
    let posiciontextoInicial = txtInit.charCodeAt(i);

    if(posiciontextoInicial >= 65 && posiciontextoInicial <= 90){
      posicionCifrado = (posiciontextoInicial - 65 + parseInt(saltos)) % 26 + 65;
      letracifrada = String.fromCharCode(posicionCifrado);
      txtEnd += letracifrada;

    }else if (posiciontextoInicial >= 97 && posiciontextoInicial <= 122){
      posicionCifrado = (posiciontextoInicial - 97 + parseInt(saltos)) % 26 + 97;
      letracifrada = String.fromCharCode(posicionCifrado);
      txtEnd += letracifrada;
      
    
    } else {
      letracifrada = String.fromCharCode(posiciontextoInicial);
      txtEnd += letracifrada;
    }
  }
  return txtEnd;
}

const descifrar = (txtInit,saltos) => {
 let  txtEnd = '';
  
  for( let i= 0; i < txtInit.length; i++){
    
    let posiciontextoInicial = txtInit.charCodeAt(i);
    
    if(posiciontextoInicial >= 65 && posiciontextoInicial <= 90){
      posicionDescifrado = (posiciontextoInicial + 65 - parseInt(saltos)) % 26 + 65;
      letraDescifrada = String.fromCharCode(posicionDescifrado);
      txtEnd += letraDescifrada;

    }else if (posiciontextoInicial >= 97 && posiciontextoInicial <= 122){
      nuevaPosicion = posiciontextoInicial-32;
      posicionDescifrado = (nuevaPosicion + 65 - parseInt(saltos)) % 26 + 65;
      letraDescifrada = String.fromCharCode(posicionDescifrado);
      txtEnd += letraDescifrada.toLowerCase();

    }else if(posiciontextoInicial >= 32 && posiciontextoInicial <= 64){
      posicionDescifrado = posiciontextoInicial;
      letraDescifrada = String.fromCharCode(posicionDescifrado);
      txtEnd += letraDescifrada;
    }
  } 
  return txtEnd;
}

window.cipher = {
  encode : (string,offset) => {
    const result = cifrar(string,offset);
    return result;
  },
  decode : (string,offset) => {
    const result = descifrar(string,offset);
    return result;
  },
};
