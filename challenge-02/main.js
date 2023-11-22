const compiler = (commands) => {
  /* Creo un objeto para guardar los valores y las funciones dentro del mismo */
  const CMD = {
    value: 0,
    result: '',

    CPU: {
      "#": function () {
        // Aumenta el value en 1
        CMD.value++
      },
      "@": function () {
        // Disminuye el value en 2
        CMD.value--
      },
      "*": function () {
        // Se multiplica por el mismo
        CMD.value *= CMD.value
      },
      "&": function () {
        // Concateno el valor actual en la propiedad result
        CMD.result += CMD.value
      }
    }
  }

  /* Convierto la cadena de texto en un array y luego lo itero para ejecutar cada uno de los comandos */
  commands.split('').forEach((command) => CMD.CPU[command]())

  return CMD.result
}