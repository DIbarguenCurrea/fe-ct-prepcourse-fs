function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  const fechaObj = new Date(fecha);

  return !isNaN(fechaObj) && fecha === fechaObj.toISOString().split('T')[0];
}

module.exports = esFechaValida;
