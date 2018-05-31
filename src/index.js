const txtInit = document.getElementById('textoInicial');
const saltos = document.getElementById('saltos');
const txtEnd = document.getElementById('textoModificado');

var btncifrar = document.getElementById('btnCifrado');
btncifrar.addEventListener('click', () => {
    txtEnd.value = window.cipher.encode(saltos.value,txtInit.value);
});

var btndescifrar = document.getElementById('btnDescifrado');
btndescifrar.addEventListener('click', () => {
    txtEnd.value = window.cipher.decode(saltos.value,txtInit.value);
} );