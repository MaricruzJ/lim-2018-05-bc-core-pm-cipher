let letterPosition;
let encryptionLetterPosition;
let cipheredLetter;
let decryptionLetterPosition;
let decipheredLetter;
let textOutput;

const cifrar = (offset, text) =>{
  textOutput = '';
  
  for( let i= 0; i < text.length; i++){
    
    letterPosition = text.charCodeAt(i);
    
    if(letterPosition >= 65 && letterPosition <= 90){
      encryptionLetterPosition = (letterPosition - 65 + parseInt(offset)) % 26 + 65;
      cipheredLetter = String.fromCharCode(encryptionLetterPosition);
      textOutput += cipheredLetter;
    }else if (letterPosition >= 97 && letterPosition <= 122){
      encryptionLetterPosition = (letterPosition - 97 + parseInt(offset)) % 26 + 97;
      cipheredLetter = String.fromCharCode(encryptionLetterPosition);
      textOutput += cipheredLetter;
    }else{
      cipheredLetter = String.fromCharCode(letterPosition);
      textOutput += cipheredLetter;
    }
  }
  return textOutput;
}

const descifrar = (offset, text) => {
  textOutput = '';
  
  for( let i= 0; i < text.length; i++){
    
    letterPosition = text.charCodeAt(i);
    
    if(letterPosition >= 65 && letterPosition <= 90){
      decryptionLetterPosition = (letterPosition - 90 - parseInt(offset)) % 26 + 90;
      decipheredLetter = String.fromCharCode(decryptionLetterPosition);
      textOutput += decipheredLetter;
    }else if (letterPosition >= 97 && letterPosition <= 122){
      decryptionLetterPosition = (letterPosition - 122 - parseInt(offset)) % 26 + 122;
      decipheredLetter = String.fromCharCode(decryptionLetterPosition);
      textOutput += decipheredLetter;
    }else{
      decipheredLetter = String.fromCharCode(letterPosition);
      textOutput += decipheredLetter;
    }
  } 
  return textOutput;
}

window.cipher = {
  encode : cifrar,
  decode : descifrar,
  createCipherWithOffset: (offset) => {
    let obj = {
      encode : (text) =>{
        return cifrar(offset, text);
      },
      decode : (text) =>{
        return descifrar(offset, text);
      }
    };
    return obj;
  }
}