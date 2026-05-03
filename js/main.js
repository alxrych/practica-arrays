//1. Obtener el primer elemento del array
//Enunciado: Dado un array, retorna el primer elemento del mismo.

const primerElemento = arr => arr[0];

console.log(primerElemento([1, 2, 3])); // 1
console.log(primerElemento(["a", "b"])); // "a"




//2. Obtener el último elemento del array
//Enunciado: Dado un array, retorna el último elemento del mismo.

const ultimoElemento = arr => arr[arr.length - 1];

console.log(ultimoElemento([1, 2, 3])); // 3
console.log(ultimoElemento(["a", "b", "c"])); // "c"





//3. Agregar un elemento al inicio del array
//Enunciado: Agrega un elemento al inicio de un array y devuelve el array actualizado.
const agregarAlInicio = (arr, elemento) => {
    arr.unshift(elemento);
    return arr;
};


const miArray = [2, 3, 4];
console.log(agregarAlInicio(miArray, 1)); // [1, 2, 3, 4]




//4. Eliminar el primer elemento del array
//Enunciado: Elimina el primer elemento de un array y devuelve el array resultante.

const eliminarPrimero = arr => {
    arr.shift();
    return arr;
};


const miArray = [1, 2, 3, 4];
console.log(eliminarPrimero(miArray)); // [2, 3, 4]



//5. Agregar un elemento al final del array
//Enunciado: Agrega un elemento al final de un array y devuelve el array actualizado.
const agregarAlFinal = (arr, elemento) => {
    arr.push(elemento);
    return arr;
};

const miArray = [1, 2, 3];
console.log(agregarAlFinal(miArray, 4)); // [1, 2, 3, 4]




//6. Eliminar el último elemento del array
//Enunciado: Elimina el último elemento de un array y devuelve el array resultante.

const eliminarUltimo = arr => {
    arr.pop();
    return arr;
};

const miArray = [1, 2, 3, 4];
console.log(eliminarUltimo(miArray)); // [1, 2, 3]




//7. Combinar dos arrays
//Enunciado: Dado dos arrays, combínalos en uno solo y retorna el resultado.

const combinarArrays = (arr1, arr2) => arr1.concat(arr2);

console.log(combinarArrays([1, 2], [3, 4])); // [1, 2, 3, 4]


//8. Encontrar si un array incluye un elemento
//Enunciado: Dado un array y un elemento, verifica si el array contiene ese elemento.
const contieneElemento = (arr, elemento) => arr.includes(elemento);

console.log(contieneElemento([1, 2, 3], 2));       // true
console.log(contieneElemento(["a", "b"], "c"));    // false



//9. Buscar el índice de un elemento
//Enunciado: Dado un array y un elemento, encuentra el índice de la primera aparición de dicho elemento.

const indiceDe = (arr, elemento) => arr.indexOf(elemento);

console.log(indiceDe([10, 20, 30], 20));        // 1
console.log(indiceDe(["a", "b", "c"], "c"));    // 2
console.log(indiceDe([1, 2, 3], 5));            // -1 (no encontrado)




//10. Reemplazar un elemento en un array
//Enunciado: Dado un array, reemplaza un elemento en un índice específico por otro y devuelve el array modificado.

const reemplazarElemento = (arr, indice, nuevoElemento) => {
    arr[indice] = nuevoElemento;
    return arr;
};

const miArray = [1, 2, 3, 4];
console.log(reemplazarElemento(miArray, 1, 99)); // [1, 99, 3, 4]



//11. Sumar todos los elementos del array
//Enunciado: Dado un array de números, suma todos sus elementos y devuelve el resultado.

const sumarElementos = arr => arr.reduce((total, num) => total + num, 0);

console.log(sumarElementos([1, 2, 3, 4])); // 10
console.log(sumarElementos([5, 5, 5]));    // 15


//12. Multiplicar todos los elementos del array
//Enunciado: Dado un array de números, multiplica cada elemento por un valor específico y devuelve el nuevo array.

const multiplicarPor = (arr, factor) => arr.map(num => num * factor);

console.log(multiplicarPor([1, 2, 3], 2));  // [2, 4, 6]
console.log(multiplicarPor([5, 10], 3));     // [15, 30]



//13. Filtrar números mayores a un valor
//Enunciado: Dado un array de números y un valor, devuelve un nuevo array con los números que sean mayores a ese valor.

const mayoresQue = (arr, valor) => arr.filter(num => num > valor);

console.log(mayoresQue([1, 5, 8, 3, 10], 4));  // [5, 8, 10]
console.log(mayoresQue([10, 20, 30], 15));      // [20, 30]




//14. Verificar si todos los elementos son mayores a un número
//Enunciado: Dado un array de números y un valor, verifica si todos los elementos del array son mayores a ese valor.

const todosMayoresQue = (arr, valor) => arr.every(num => num > valor);

console.log(todosMayoresQue([5, 8, 10], 4));  // true
console.log(todosMayoresQue([1, 5, 8], 4));   // false (1 no es mayor que 4)
console.log(todosMayoresQue([10, 20], 15));    // false (10 no es mayor que 15)



//15. Obtener el primer elemento que cumple una condición
//Enunciado: Dado un array de números y un valor, encuentra el primer número que sea mayor al valor dado.

const primerMayorQue = (arr, valor) => arr.find(num => num > valor);

console.log(primerMayorQue([1, 3, 7, 9], 5));  // 7
console.log(primerMayorQue([2, 4, 6], 3));      // 4
console.log(primerMayorQue([1, 2, 3], 5));      // undefined (ninguno cumple)


//16. Imprimir cada elemento del array
//Enunciado: Dado un array de números, recorre el array e imprime cada uno de sus elementos en la consola.

const imprimirElementos = arr => arr.forEach(num => console.log(num));

imprimirElementos([1, 2, 3, 4]);
// 1
// 2
// 3
// 4



//17. Crear un array con el doble de cada número
//Enunciado: Dado un array de números, genera un nuevo array en el que cada número sea el doble de su valor original.

const doblarElementos = arr => arr.map(num => num * 2);

console.log(doblarElementos([1, 2, 3]));  // [2, 4, 6]
console.log(doblarElementos([5, 10]));     // [10, 20]



//18. Convertir un array de nombres en mayúsculas
//Enunciado: Dado un array de nombres(strings), genera un nuevo array donde cada nombre esté en mayúsculas. */

const aMayusculas = arr => arr.map(nombre => nombre.toUpperCase());

console.log(aMayusculas(["ana", "juan", "pedro"])); // ["ANA", "JUAN", "PEDRO"]
console.log(aMayusculas(["hola", "mundo"]));         // ["HOLA", "MUNDO"]

