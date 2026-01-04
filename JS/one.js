//string

let nombre = "Osmar";
let saludo = `Hola ${nombre}`;

/* 🔬 Cómo funciona internamente

Son inmutables

Cada modificación crea un nuevo string en memoria

*/

// Cada modificación crea un nuevo string en memoria

let a = "Hola";
a[0] = "h";
console.log(a); // "Hola" ❌ NO cambia

/*
Usa template literals siempre

No concatenes strings en loops grandes

Sanitiza strings de inputs
*/


