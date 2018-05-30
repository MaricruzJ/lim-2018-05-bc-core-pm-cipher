const txtInit = document.getElementById('textoInicial');
const saltos = document.getElementById('saltos');
const txtEnd = document.getElementById('textoModificado');

var btncifrar = document.getElementById('btnCifrado');
btncifrar.addEventListener('click', () => {
    //cifrar(txtInit.value,saltos.value);
    txtEnd.value = window.cipher.encode(txtInit.value,saltos.value);
});

var btndescifrar = document.getElementById('btnDescifrado');
btndescifrar.addEventListener('click', () => {
    //descifrar(txtInit.value, saltos.value);
    txtEnd.value = window.cipher.decode(txtInit.value,saltos.value);
} );
