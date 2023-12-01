# Enunciado del challenge 05 - El problema final
Finalmente los hackers han conseguido acceder a la base de datos y la han dejado corrupta. Pero parece que han dejado un mensaje oculto en la base de datos. ¿Podrás encontrarlo?

Nuestra base de datos está en formato .csv. Las columnas son <span style="color: #fef9c3">**id**</span>, <span style="color: #fef9c3">**username**</span>, <span style="color: #fef9c3">**email**</span>, <span style="color: #fef9c3">**age**</span>, <span style="color: #fef9c3">**location**</span>.

Un usuario sólo es válido si:

- id: existe y es alfanumérica
- username: existe y es alfanumérico
- email: existe y es válido (sigue el patrón user@dominio.com)
- age: es opcional pero si aparece es un número
- location: es opcional pero si aparece es una cadena de texto

## Ejemplos

1. > Entrada: 1a421fa,alex,alex9@gmail.com,18,Barcelona <br>
Resultado: ✅ Válido

1. > Entrada: 9412p_m,maria,mb@hotmail.com,22,CDMX <br>
Resultado: ❌ Inválido (id no es alfanumérica, sobra el _)

1. > Entrada: 494ee0,madeval,mdv@twitch.tv,, <br>
Resultado: ✅ Válido (age y location son opcionales)

1. > Entrada: 494ee0,madeval,twitch.tv,22,Montevideo <br>
Resultado: ❌ Inválido (email no es válido)
