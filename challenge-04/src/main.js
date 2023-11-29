import fs from 'fs/promises'


const filterPolices = (police = '') => {
  //Separo el string para solo recorrer la paste izquierda el mismo (lo que está antes del -)
  const formatPolice = police.split('-')
  const left = formatPolice[0].split('')
  const rigth = formatPolice[1]

  //Creo un objeto para contar cuantas veces se repite una palabra
  const repeatLettes = {}
  //Creo un arreglo donde almaceno las letras que solo se repiten una vez
  const result = []

  left.forEach((letter) => {
    /* Si la letra no se encuentra dentro del objeto significa que no se ha agregado,
      se agrega al objeto y se agrega al arreglo
    */
    if (repeatLettes[letter] === undefined) {
      repeatLettes[letter] = 1
      result.push(letter)
      /* Si la letra ya existe en el arreglo y tiene exactamente el valor de 1
        significa que esa letra ya es repetida, por lo que se elimina del arreglo
        y a su vez, se sigue incrementando para no hacer nada con esa letra en futuras 
        iteraciones si se vuelve a repetir
      */
    } else if (repeatLettes[letter] === 1) {
      result.splice(result.indexOf(letter), 1)
      repeatLettes[letter]++
    }
  })

  return result.join('') === rigth
}


const readPolices = async (position = 0) => {
  try {
    // Leo el txt que contiene los passwords
    const data = await fs.readFile('src/files_quarantine.txt', { encoding: 'utf-8' })
    // Creo un array a partir del string, en este caso el separador entre passwords es un salto de linea
    const allPolices = data.split('\n')
    //Filtro todos los passwords que no son validos y los guardo en esta variable
    const checkSums = allPolices.filter(police => filterPolices(police))

    //Retorno la posición que se pasa como parámetro
    return checkSums[position - 1]

  } catch (error) {
    console.log(error)
  }
}

readPolices(33).then(res => console.log(res))