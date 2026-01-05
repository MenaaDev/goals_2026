
/*
=====================================================
1. STRING (PRIMITIVO - INMUTABLE - POR VALOR)
=====================================================
- Representa texto
- Inmutable: no se puede modificar
- Cada cambio crea un nuevo string en memoria
*/

let nombre = "Osmar";
let saludo = `Hola ${nombre}`; // Template literal (RECOMENDADO)

console.log(nombre);
console.log(saludo);

// Intento de mutación (NO FUNCIONA)
nombre[0] = "o";
console.log(nombre); // "Osmar"


/*
=====================================================
2. NUMBER (PRIMITIVO - INMUTABLE - IEEE 754)
=====================================================
- NO hay diferencia entre enteros y decimales
- Puede causar errores de precisión
*/

let edad = 30;
let precio = 99.99;

console.log(edad + precio);

// Error clásico de precisión
console.log(0.1 + 0.2); // 0.30000000000000004

// Forma segura de trabajar decimales
let totalSeguro = Number((0.1 + 0.2).toFixed(2));
console.log(totalSeguro);


/*
=====================================================
3. BIGINT (PRIMITIVO - PARA NÚMEROS GIGANTES)
=====================================================
- Se usa cuando number pierde precisión
- Se define con 'n'
*/

let numeroGrande = 123456789012345678901234567890n;
console.log(numeroGrande);

// ❌ NO se puede mezclar con number
// console.log(numeroGrande + 10); // Error

// ✅ Conversión explícita
console.log(numeroGrande + 10n);


/*
=====================================================
4. BOOLEAN (PRIMITIVO - true / false)
=====================================================
- Usado en lógica y condiciones
*/

let esActivo = true;
let esAdmin = false;

if (esActivo) {
  console.log("Usuario activo");
}


/*
=====================================================
5. UNDEFINED (PRIMITIVO - VALOR DEL SISTEMA)
=====================================================
- Variable declarada pero no inicializada
- JS lo asigna automáticamente
*/

let variableSinValor;
console.log(variableSinValor); // undefined


/*
=====================================================
6. NULL (PRIMITIVO - AUSENCIA INTENCIONAL)
=====================================================
- Se asigna manualmente
- Representa "no hay valor"
*/

let usuario = null;
console.log(usuario);

// Bug histórico de JS
console.log(typeof null); // "object" ❌


/*
=====================================================
7. SYMBOL (PRIMITIVO - VALOR ÚNICO)
=====================================================
- Se usa para evitar colisiones de claves
- Muy usado en librerías y frameworks
*/

const ID = Symbol("id");

let usuarioConSymbol = {
  nombre: "Osmar",
  [ID]: 123
};

console.log(usuarioConSymbol);


/*
=====================================================
8. NaN (NOT A NUMBER)
=====================================================
- Es un number inválido
- Nunca es igual a sí mismo
*/

let resultado = Number("hola");
console.log(resultado); // NaN

console.log(resultado === NaN); // false ❌

// Forma correcta de validarlo
console.log(Number.isNaN(resultado)); // true


/*
=====================================================
9. OBJECT (NO PRIMITIVO - MUTABLE - POR REFERENCIA)
=====================================================
- Incluye objetos, arrays, funciones, fechas, etc.
*/

let persona = {
  nombre: "Osmar",
  edad: 30
};

// Mutación directa (PELIGROSA)
persona.edad = 31;
console.log(persona);


/*
=====================================================
10. ARRAY (OBJETO ESPECIAL - MUTABLE)
=====================================================
*/

let numeros = [1, 2, 3];

// Mutación directa
numeros.push(4);
console.log(numeros);

// Forma inmutable (RECOMENDADA)
let nuevosNumeros = [...numeros, 5];
console.log(nuevosNumeros);


/*
=====================================================
11. FUNCTION (OBJETO EJECUTABLE)
=====================================================
- También es un objeto
- Se puede pasar como parámetro
*/

function saludar(nombre) {
  return `Hola ${nombre}`;
}

console.log(saludar("Osmar"));


/*
=====================================================
12. PASO POR VALOR VS REFERENCIA
=====================================================
*/

// POR VALOR (PRIMITIVOS)
let a = 10;
let b = a;

b = 20;
console.log(a); // 10
console.log(b); // 20

// POR REFERENCIA (OBJETOS)
let obj1 = { x: 1 };
let obj2 = obj1;

obj2.x = 99;
console.log(obj1.x); // 99 😱


/*
=====================================================
13. typeof (CON TRAMPAS)
=====================================================
*/

console.log(typeof "hola");       // string
console.log(typeof 123);          // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object ❌
console.log(typeof []);           // object ❌
console.log(typeof function(){}); // function

// Validación correcta de arrays
console.log(Array.isArray([])); // true


/*
=====================================================
14. COMPARACIÓN == VS ===
=====================================================
*/

// ❌ Comparación débil (EVITAR)
console.log("5" == 5); // true

// ✅ Comparación estricta (USAR SIEMPRE)
console.log("5" === 5); // false


/*
=====================================================
15. RESUMEN MENTAL (IMPORTANTE)
=====================================================

- Primitivos → inmutables → por valor → stack
- Objetos → mutables → por referencia → heap
- undefined → JS
- null → desarrollador
- === SIEMPRE
- Mutaciones = bugs en proyectos grandes
*/
