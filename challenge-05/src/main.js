import fs from 'fs/promises';

const RGX_VALIDATIONS = {
  alpha_numerics: /^([a-zA-Z0-9]){1,16}$/,
  email: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
  string: /^[a-zA-Z ]+$/
}

const validateData = (data = '') => {
  const fields = data.split(',')
  const id = fields[0]
  const user = fields[1]
  const email = fields[2]
  const age = fields[3]
  const location = fields[4]

  if (id.length === 0 || !RGX_VALIDATIONS.alpha_numerics.test(id)) return false
  if (user.length === 0 || !RGX_VALIDATIONS.alpha_numerics.test(user)) return false
  if (email.length === 0 || !RGX_VALIDATIONS.email.test(email)) return false
  if (isNaN(Number(age))) return false
  if (location.length > 0 && !RGX_VALIDATIONS.string.test(location)) return false

  return true
}


const readBD = async () => {
  try {

    const data = await fs.readFile('src/database_attacked.txt', { encoding: 'utf-8' })

    const allData = data.split('\n')

    const validUsers = allData.filter((data) => !validateData(data))

    return validUsers
  } catch (error) {
    console.log(error)
  }
}

const buildMessage = (users) => {
  let message = ''
  users.forEach((user) => {
    const userName = user.split(',')[1]
    message += userName[0]
  })

  return message
}

readBD().then((users) => console.log(buildMessage(users)))