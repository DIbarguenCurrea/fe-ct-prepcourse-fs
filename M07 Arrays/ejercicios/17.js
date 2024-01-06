function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  const tablaSeis = [];

  for (let i = 0; i <= 10; i++){
    const resultado = 6 * i;
    tablaSeis.push(resultado);
  }
  return tablaSeis
}

module.exports = tablaDelSeis;