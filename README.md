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

### c. -(A v C) ^ B

<p><strong>Definición:</strong></p>
<p>A: proposición<br>
B: proposición<br>
C: proposición<br>
A v C: disyunción de A y C<br>
-(A v C): negación de la disyunción de A y C<br>
-(A v C) ^ B: conjunción de la negación de la disyunción de A y C con B</p>

<table>
  <thead>
    <tr>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>A v C</th>
      <th>-(A v C)</th>
      <th>-(A v C) ^ B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
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
      <td>V</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
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
      <td>V</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
    </tr>
  </tbody>
</table>

<p><strong>Evaluación:</strong><br>
A v C: Verdadera si al menos uno de los operandos, A o C, es verdadero.<br>
-(A v C): Invierte el valor de verdad de (A v C).<br>
-(A v C) ^ B: Verdadera solo si ambos operandos, -(A v C) y B, son verdaderos.</p>



### d. (B ^ C) ^ -(A)

<p><strong>Definición:</strong></p>
<p>A: proposición<br>
B: proposición<br>
C: proposición<br>
B ^ C: conjunción de B y C<br>
-A: negación de A<br>
(B ^ C) ^ -(A): conjunción de la conjunción de B y C con la negación de A</p>

<table>
  <thead>
    <tr>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>B ^ C</th>
      <th>-A</th>
      <th>(B ^ C) ^ -(A)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
    </tr>
  </tbody>
</table>

<p><strong>Evaluación:</strong><br>
B ^ C: Verdadera solo si B y C son verdaderas.<br>
-A: Invierte el valor de verdad de A.<br>
(B ^ C) ^ -(A): Verdadera solo si ambos operandos, (B ^ C) y -A, son verdaderos.</p>



### e. (M ^ -(A)) v (-I v -(C))

<p><strong>Definición:</strong></p>
<p>A: proposición<br>
C: proposición<br>
I: proposición<br>
M: proposición<br>
-A: negación de A<br>
M ^ -A: conjunción de M y la negación de A<br>
-I: negación de I<br>
-C: negación de C<br>
-I v -C: disyunción de la negación de I con la negación de C<br>
(M ^ -(A)) v (-I v -(C)): disyunción de la conjunción de M y la negación de A con la disyunción de la negación de I con la negación de C</p>

<table>
  <thead>
    <tr>
      <th>A</th>
      <th>C</th>
      <th>I</th>
      <th>M</th>
      <th>-A</th>
      <th>M ^ -A</th>
      <th>-I</th>
      <th>-C</th>
      <th>-I v -C</th>
      <th>(M ^ -(A)) v (-I v -(C))</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
    </tr>
    <tr>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
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
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>V</td>
      <td>F</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
      <td>V</td>
    </tr>
  </tbody>
</table>


<!DOCTYPE html>
<html>
<head>
  <title>Función evaluateRisk</title>
  <style>
    body {
      font-family: sans-serif;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
    }
  </style>
</head>
<body>

<h1>Función <code>evaluateRisk</code></h1>

![Captura de pantalla 2024-11-12 a la(s) 8 16 08 p  m](https://github.com/user-attachments/assets/ab085470-357a-4e9a-b147-938c5d3dd445)


<p>Esta función en JavaScript, <code>evaluateRisk</code>, evalúa el nivel de riesgo crediticio de un cliente bancario. Para ello, analiza cuatro parámetros principales:</p>

<ul>
  <li><b><code>income</code></b>: Ingresos anuales del cliente.</li>
  <li><b><code>hasLoans</code></b>: Indica si el cliente posee préstamos activos.</li>
  <li><b><code>latePayments</code></b>: Número de pagos atrasados del cliente.</li>
  <li><b><code>isStudent</code></b>: Indica si el cliente es estudiante.</li>
</ul>

<h2>Parámetros</h2>

<table>
  <tr>
    <th>Parámetro</th>
    <th>Descripción</th>
    <th>Tipo</th>
  </tr>
  <tr>
    <td><code>income</code></td>
    <td>Ingresos anuales del cliente.</td>
    <td>Número</td>
  </tr>
  <tr>
    <td><code>hasLoans</code></td>
    <td>Indica si el cliente tiene préstamos activos (verdadero o falso).</td>
    <td>Booleano</td>
  </tr>
  <tr>
    <td><code>latePayments</code></td>
    <td>Número de pagos que el cliente ha atrasado.</td>
    <td>Número</td>
  </tr>
  <tr>
    <td><code>isStudent</code></td>
    <td>Indica si el cliente actualmente es estudiante (verdadero o falso).</td>
    <td>Booleano</td>
  </tr>
</table>

<h2>Lógica de evaluación</h2>

<p>La función clasifica el nivel de riesgo en tres categorías: "High" (alto), "Moderate" (moderado) o "Low" (bajo).</p>

<h3>1. Riesgo alto (<code>High</code>)</h3>

<p>Se considera que un cliente representa un riesgo alto si se cumple alguna de las siguientes condiciones:</p>

<ul>
  <li>Tiene ingresos anuales inferiores a $20,000 y más de 3 pagos atrasados.</li>
  <li>Es estudiante y tiene préstamos activos.</li>
</ul>

<h3>2. Riesgo moderado (<code>Moderate</code>)</h3>

<p>Un cliente se clasifica como de riesgo moderado si cumple alguna de estas condiciones:</p>

<ul>
  <li>Sus ingresos anuales están entre $20,000 y $50,000, y tiene 2 o menos pagos atrasados.</li>
  <li>Tiene préstamos activos, pero no es estudiante.</li>
</ul>

<h3>3. Riesgo bajo (<code>Low</code>)</h3>

<p>Si un cliente no cumple ninguna de las condiciones anteriores, se le asigna un nivel de riesgo bajo.</p>

<h2>Ejemplo de uso</h2>

<pre><code>console.log(evaluateRisk(15000, true, 4, true));  // Output: "High" 
</code></pre>

</body>
</html>

![Captura de pantalla 2024-11-12 a la(s) 8 43 13 p  m](https://github.com/user-attachments/assets/f5fe8d0a-8d20-46ab-b035-34c66bd7e6e4)



# Función `recommendProduct`

Esta función se utiliza para recomendar productos a un usuario basándose en su edad, si es miembro y su historial de compras.

## Argumentos

* **`age`**: Edad del usuario.
* **`isMember`**: Indica si el usuario es miembro (true) o no (false).
* **`purchaseHistory`**: Objeto que contiene el número de productos comprados por categoría:
    * `tech`: Número de productos tecnológicos.
    * `fashion`: Número de productos de moda.
    * `other`: Número de otros productos.

## Lógica de recomendación

### Producto de alta tecnología

Se recomienda un producto de alta tecnología si:

* El usuario es miembro (`isMember`) y ha comprado al menos 5 productos tecnológicos (`purchaseHistory.tech >= 5`).
* O si el usuario tiene entre 18 y 30 años (`age >= 18 && age <= 30`) y ha comprado 2 o más productos de moda (`purchaseHistory.fashion >= 2`).

### Producto de moda

Se recomienda un producto de moda si:

* El usuario no es miembro (`!isMember`) y ha comprado al menos 3 productos en total.
* O si el usuario tiene entre 25 y 40 años (`age >= 25 && age <= 40`).

### Producto genérico

Si no se cumple ninguna de las condiciones anteriores, se recomienda un producto genérico.


## Ejemplo de uso

```javascript
console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 })); // "Producto de alta tecnología"
