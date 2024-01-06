function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const elementosUnicos = new Set();

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (elementosUnicos.has(numero)) {
      return numero;
    }
    elementosUnicos.add(numero);
  }
  return null;
}

module.exports = encontrarElementoRepetido;
