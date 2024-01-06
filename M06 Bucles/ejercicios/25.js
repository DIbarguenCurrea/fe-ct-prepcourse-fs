function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const str = string.replace(/\s/g, '').toLowerCase();

  return str === str.split('').reverse().join('');
}

module.exports = esPalindromo;


//se utiliza el método 'replace' para eliminar los espacios en blanco y el método 'toLowerCase' para convertir todo a minúsculas.
//se compara la cadena original con su versión invertida usando 'split('')' para convertirla en un array
//'reverse()' para invertir el orden y 'join('')' para volver a convertirla en una cadena. 