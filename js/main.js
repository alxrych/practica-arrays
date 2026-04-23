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


/* 
5. Agregar un elemento al final del array

Enunciado: Agrega un elemento al final de un array y devuelve el array actualizado.
6. Eliminar el último elemento del array

Enunciado: Elimina el último elemento de un array y devuelve el array resultante.
7. Combinar dos arrays

Enunciado: Dado dos arrays, combínalos en uno solo y retorna el resultado.
8. Encontrar si un array incluye un elemento

Enunciado: Dado un array y un elemento, verifica si el array contiene ese elemento.
9. Buscar el índice de un elemento

Enunciado: Dado un array y un elemento, encuentra el índice de la primera aparición de dicho elemento.
10. Reemplazar un elemento en un array

Enunciado: Dado un array, reemplaza un elemento en un índice específico por otro y devuelve el array modificado.
11. Sumar todos los elementos del array

Enunciado: Dado un array de números, suma todos sus elementos y devuelve el resultado.
12. Multiplicar todos los elementos del array

Enunciado: Dado un array de números, multiplica cada elemento por un valor específico y devuelve el nuevo array.
13. Filtrar números mayores a un valor

Enunciado: Dado un array de números y un valor, devuelve un nuevo array con los números que sean mayores a ese valor.
14. Verificar si todos los elementos son mayores a un número

Enunciado: Dado un array de números y un valor, verifica si todos los elementos del array son mayores a ese valor.
15. Obtener el primer elemento que cumple una condición

Enunciado: Dado un array de números y un valor, encuentra el primer número que sea mayor al valor dado.
16. Imprimir cada elemento del array

Enunciado: Dado un array de números, recorre el array e imprime cada uno de sus elementos en la consola.
17. Crear un array con el doble de cada número

Enunciado: Dado un array de números, genera un nuevo array en el que cada número sea el doble de su valor original.
18. Convertir un array de nombres en mayúsculas

Enunciado: Dado un array de nombres(strings), genera un nuevo array donde cada nombre esté en mayúsculas. */