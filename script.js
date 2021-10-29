function onKeyPressBlockChars(e, numero) {
    var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    reg = /\d|\./;
    if (numero.indexOf(".") != -1 && keychar == ".") {
        return false;
    } else {
        return reg.test(keychar);
    }
}
function calculaPorcentajes(numero) {
    document.getElementById("porcent15").value = Math.floor(numero * 10) / 100;
    document.getElementById("porcent25").value = Math.floor(numero * 25) / 100;
    document.g
      }