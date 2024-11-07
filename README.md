# Tarea1MateDevs

Primera Sección



a. 7

Convertir 7 a binario:

Se divide 7 entre 2: 7 / 2 = 3 con residuo 1. Anotamos el residuo (1).

Dividimos el cociente (3) entre 2: 3 / 2 = 1 con residuo 1. Anotamos el residuo (1).

luego dividimos el nuevo cociente (1) entre 2: 1 / 2 = 0 con residuo 1. Anotamos el residuo (1).

en este caso el cociente es 0, terminamos las divisiones.

Para formar el número binario, escribimos los residuos en orden inverso: 111.

Por último lo convertimos a 8bits, añadimos ceros a la izquierda hasta completar los 8 bits: 00000111



b. 45

Convertir 45 a binario:  Utilizamos el mismo proceso de divisiones sucesivas entre 2, anotando los residuos:

45 / 2 = 22 residuo 1

22 / 2 = 11 residuo 0

11 / 2 = 5 residuo 1

5 / 2 = 2 residuo 1

2 / 2 = 1 residuo 0

1 / 2 = 0 residuo 1

para formar el numero escribimos los residuos en orden inverso: 101101.

Completamos con ceros a la izquierda para tener 8 bits: 00101101




c. 123

Convertir 123 a binario:  Utilizamos el mismo proceso de divisiones:

123 / 2 = 61 residuo 1

61 / 2 = 30 residuo 1

30 / 2 = 15 residuo 0

15 / 2 = 7 residuo 1

7 / 2 = 3 residuo 1

3 / 2 = 1 residuo 1

1 / 2 = 0 residuo 1   

Después de unir los residuos el número en binario es 1111011. 

En 8 bits: 01111011



d. 8.75

Convertir 8 a binario:  Aplicamos las divisiones sucesivas a la parte entera (8):

8 / 2 = 4 residuo 0

4 / 2 = 2 residuo 0

2 / 2 = 1 residuo 0

1 / 2 = 0 residuo 1

8 en binario es 1000.

Convertir 0.75 a binario:

Multiplicamos la parte fraccionaria (0.75) por 2: 0.75 x 2 = 1.50. Agregamos la parte entera del resultado (1).

Multiplicamos la nueva parte fraccionaria (0.50) por 2: 0.50 x 2 = 1.00. agregamos la parte entera (1).

ya que la parte fraccionaria es 0, terminamos las multiplicaciones.

0.75 en binario es .11

Uniendo la parte entera y la parte fraccionaria: 8.75 en binario es 1000.11



e. -18 (usando complemento a dos)

Convertir 18 a binario:  Realizamos las divisiones para obtener la representación binaria de 18:

18 / 2 = 9 residuo 0

9 / 2 = 4 residuo 1

4 / 2 = 2 residuo 0

2 / 2 = 1 residuo 0

1 / 2 = 0 residuo 1

18 en binario es 10010. 

En 8 bits: 00010010

Obtener el complemento a uno:  Para obtener el complemento a uno, 

para esto invertimos cada bit del número binario. Cambiamos los 0 por 
1 y los 1 por 0:  11101101

Sumar 1 al complemento a uno:  Sumamos 1 al resultado del paso anterior:

11101101
+      1
---------
11101110 

El resultado de la suma es la representación de -18 en binario usando complemento a dos: 11101110

