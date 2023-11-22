import fs from "fs/promises"

/* 
  Funcion para saber si la clave es valida, si lo es retorna true, sino, retorna false
  Recibe el string con la información de la contraseña. Ejemplo ----> 2-4 f: fgff
*/
const isValidPassword = (strEncrypt) => {
  // Separo el string y obtengo cada uno de sus valores 
  const encrypt = strEncrypt.split(' ')
  const ranges = encrypt[0].split('-')
  const minValue = ranges[0]
  const maxValue = ranges[1]
  const letter = encrypt[1][0]
  const password = encrypt[2]

  // Coincidencias totales, tomo el password, lo divido, y verifico si la letra actual es igual que la letra evaluada
  const coincidences = password.split('').filter((currentLetter) => currentLetter === letter).length

  // Retorno verdadero o falso si la coincidencia se encuentra entre el valor minimo y maximo establecido
  return coincidences >= minValue && coincidences <= maxValue
}

const readPasswords = async (position = 0) => {
  try {
    // Leo el txt que contiene los passwords
    const data = await fs.readFile('src/encryption_policies.txt', { encoding: 'utf-8' })
    // Creo un array a partir del string, en este caso el separador entre passwords es un salto de linea
    const allPasswords = data.split('\n')
    //Filtro todos los passwords que no son validos y los guardo en esta variable
    const invalidsPassword = allPasswords.filter((encrypt) => {
      if (!isValidPassword(encrypt)) return encrypt
    })

    //Retorno la posición que se pasa como parámetro
    return invalidsPassword[position - 1]
  } catch (error) {
    console.log(error)
  }
}

readPasswords(42).then((password) => {
  console.log(password)
})