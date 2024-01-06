function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var numString = num.toString();
  return numString.length === 3;
}

module.exports = tieneTresDigitos;


//Lo que hice fue pasar el 'num' en una cadena de texto para verificar su longitud. 