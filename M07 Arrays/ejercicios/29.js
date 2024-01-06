function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }

  let sumaEsperada = 0;
  let sumaActual = 0;

  for (let i = 0; i < numeros.length; i++) {
    sumaEsperada += i + 1; 
    sumaActual += numeros[i]; 
  }

  const numeroFaltante = sumaEsperada - sumaActual;

  return numeroFaltante === 0 ? null : numeroFaltante;
}

module.exports = encontrarNumeroFaltante;