function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  let str1Minusc = str1.toLowerCase();
  let str2Minusc = str2.toLowerCase();

  let sortedStr1 = str1Minusc.split('').sort().join('');
  let sortedStr2 = str2Minusc.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

module.exports = esAnagrama;