function tieneTresDigitos(num) {
    // Si el número recibido tiene tres dígitos retornar true.
    // Caso contrario, retornar false.
    // Tu código:
    /*if (num.toString().length  === 3)  {return true;}
 else if ((num.toString().length < 3) || (num.toString().length  > 3)) {return false;}
 }*/
 //var numeroString='';
    numeroString = num.toString();
    if (numeroString.length=== 3) {return true;}
 else {return false;}
 }

 tieneTresDigitos(345);