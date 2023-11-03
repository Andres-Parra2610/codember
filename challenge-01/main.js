const decrypt = (words) => {
  /* 
    Creo un objeto para contar cada palabra, ejemplo
    {
      perro: 2,
      gato: 1,
      zorro: 3
    }
  */
  const wordCounts = {}

  /* Variable para concatenar cada una de las frases */
  let phrase = ''

  /* Como es una cadena de texto, lo convierto en un array y lo itero */
  words.split(' ').map((word) => {
    /* Serializo la palabra para que me quede en minsculas*/
    const serializeWord = word.toLowerCase()

    /* Cuento las palabras */
    wordCounts[serializeWord] === undefined
      ? wordCounts[serializeWord] = 1
      : wordCounts[serializeWord]++
  })

  /* Itero el objeto resultante para concatenar la frase final */
  Object.entries(wordCounts).map(([key, value]) => phrase += `${key} ${value} `)
  return phrase
}
