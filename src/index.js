const input = document.getElementById('textInput');
const offset = document.getElementById('offset');
const output = document.getElementById('textOutput');

var btnCipher = document.getElementById('btnCipher');
btnCipher.addEventListener('click', () => {
  output.value = window.cipher.encode(offset.value, input.value);
});

var btnDecipher = document.getElementById('btnDecipher');
btnDecipher.addEventListener('click', () => {
  output.value = window.cipher.decode(offset.value, input.value);
});