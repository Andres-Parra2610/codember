# Enunciado del challenge 03 - El Desafío del Cifrado Espía 
Un grupo de espías ha descubierto que su sistema de cifrado de mensajes está comprometido.

Han encontrado algunas contraseñas que no cumplen con laPolítica de Seguridad de Cifrado que tenían establecida cuando fueron creadas.

Para solucionar el problema, han creado una lista (tu entrada al desafío) de contraseñas (según la base de datos corrupta) y la política de seguridad cuando esa clave fue establecida.

## Ejemplo de la lista:

- 2-4 f: fgff
- 4-6 z: zzzsg
- 1-6 h: hhhhhh

Cada línea indica, separado por :, la política de la clave y la clave misma.

La política de la clave especifica el número mínimo y máximo de veces que un carácter dado debe aparecer para que la clave sea válida. Por ejemplo, <span style="color: #fef9c3">**2-4 f**</span>  significa que la clave debe contener <span style="color: #fef9c3">**f**</span>  al menos <span style="color: #fef9c3">**2**</span>  veces y como máximo <span style="color: #fef9c3">**4**</span>  veces.

Sabiendo esto, en el ejemplo anterior, hay 2 claves válidas:

La segunda clave, <span style="color: #fef9c3">**zzzsg**</span>, no lo es; contiene 3 veces la letra <span style="color: #fef9c3">**z**</span> , pero necesita al menos 4. Las primeras y terceras claves son válidas: contienen la cantidad adecuada de f y h, respectivamente, según sus políticas.