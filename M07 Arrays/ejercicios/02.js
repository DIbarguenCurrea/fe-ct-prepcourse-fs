function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort((a, b) => a - b);
}

module.exports = ordenarArray;

//La función sort() toma una función de comparación como argumento. Esta función debe devolver un valor negativo si "a" debe ir antes que "b", un valor positivo si "a" debe ir después que "b", y cero si son iguales.
