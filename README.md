# Tarea 1 MateDevs

<hr>

## Primera Sección

### a. 7

<p><strong>Convertir 7 a binario:</strong></p>
<p>Se divide 7 entre 2: 7 / 2 = 3 con residuo 1. Anotamos el residuo (1).<br>
Dividimos el cociente (3) entre 2: 3 / 2 = 1 con residuo 1. Anotamos el residuo (1).<br>
luego dividimos el nuevo cociente (1) entre 2: 1 / 2 = 0 con residuo 1. Anotamos el residuo (1).<br>
en este caso el cociente es 0, terminamos las divisiones.</p>
<p>Para formar el número binario, escribimos los residuos en orden inverso: 111.<br>
Por último lo convertimos a 8 bits, añadimos ceros a la izquierda hasta completar los 8 bits: 00000111</p>

### b. 45

<p><strong>Convertir 45 a binario:</strong> Utilizamos el mismo proceso de divisiones sucesivas entre 2, anotando los residuos:</p>
<p>45 / 2 = 22 residuo 1<br>
22 / 2 = 11 residuo 0<br>
11 / 2 = 5  residuo 1<br>
5 / 2 = 2   residuo 1<br>
2 / 2 = 1   residuo 0<br>
1 / 2 = 0   residuo 1</p>
<p>para formar el numero escribimos los residuos en orden inverso: 101101.<br>
Completamos con ceros a la izquierda para tener 8 bits: 00101101</p>

### c. 123

<p><strong>Convertir 123 a binario:</strong> Utilizamos el mismo proceso de divisiones:</p>
<p>123 / 2 = 61 residuo 1<br>
61 / 2 = 30 residuo 1<br>
30 / 2 = 15 residuo 0<br>
15 / 2 = 7  residuo 1<br>
7 / 2 = 3   residuo 1<br>
3 / 2 = 1   residuo 1<br>
1 / 2 = 0   residuo 1</p>  
<p>Después de unir los residuos el número en binario es 1111011.<br>
En 8 bits: 01111011</p>

### d. 8.75

<p><strong>Convertir 8 a binario:</strong> Aplicamos las divisiones sucesivas a la parte entera (8):</p>
<p>8 / 2 = 4 residuo 0<br>
4 / 2 = 2 residuo 0<br>
2 / 2 = 1 residuo 0<br>
1 / 2 = 0 residuo 1</p>
<p>8 en binario es 1000.</p>
<p><strong>Convertir 0.75 a binario:</strong></p>
<p>Multiplicamos la parte fraccionaria (0.75) por 2: 0.75 x 2 = 1.50. Agregamos la parte entera del resultado (1).<br>
Multiplicamos la nueva parte fraccionaria (0.50) por 2: 0.50 x 2 = 1.00. agregamos la parte entera (1).<br>
ya que la parte fraccionaria es 0, terminamos las multiplicaciones.</p>
<p>0.75 en binario es .11<br>
Uniendo la parte entera y la parte fraccionaria: 8.75 en binario es 1000.11</p>

### e. -18 (usando complemento a dos)

<p><strong>Convertir 18 a binario:</strong> Realizamos las divisiones para obtener la representación binaria de 18:</p>
<p>18 / 2 = 9 residuo 0<br>
9 / 2 = 4  residuo 1<br>
4 / 2 = 2  residuo 0<br>
2 / 2 = 1  residuo 0<br>
1 / 2 = 0  residuo 1</p>
<p>18 en binario es 10010.<br>
En 8 bits: 00010010</p>
<p><strong>Obtener el complemento a uno:</strong> Para obtener el complemento a uno,<br>
para esto invertimos cada bit del número binario. Cambiamos los 0 por 1 y los 1 por 0: 11101101</p>
<p><strong>Sumar 1 al complemento a uno:</strong> Sumamos 1 al resultado del paso anterior:</p>
<p>11101101<br>
+ 1<br>
--------<br>
11101110</p>
<p>El resultado de la suma es la representación de -18 en binario usando complemento a dos: 11101110</p>

<hr>

## Segunda Seccion

### a. A ^ B

<p><strong>Definición:</strong></p>
<p>A: proposición<br>
B: proposición<br>
A ^ B: conjunción (AND) de A y B</p>

<table>
  <thead>
    <tr>
      <th>A</th>
      <th>B</th>
      <th>A ^ B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>V</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>V</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>V</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>F</td>
    </tr>
  </tbody>
</table>

<p><strong>Evaluación:</strong> La conjunción (A ^ B) es verdadera (V) solo cuando A y B son verdaderas. En cualquier otro caso, es falsa (F).</p>

### b. -(A ^ B) v C

<p><strong>Definición:</strong></p>
<p>A: proposición<br>
B: proposición<br>
C: proposición<br>
A ^ B: conjunción de A y B<br>
-(A ^ B): negación de la conjunción de A y B<br>
-(A ^ B) v C: disyunción de la negación de la conjunción de A y B con C</p>

<table>
  <thead>
    <tr>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>A ^ B</th>
      <th>-(A ^ B)</th>
      <th>-(A ^ B) v C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
    </tr>
    <tr>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
    </tr>
  </tbody>
</table>

<p><strong>Evaluación:</strong><br>
A ^ B: Verdadera solo si A y B son verdaderas.<br>
-(A ^ B): Invierte el valor de verdad de (A ^ B).<br>
-(A ^ B) v C: Verdadera si al menos uno de los operandos, -(A ^ B)
