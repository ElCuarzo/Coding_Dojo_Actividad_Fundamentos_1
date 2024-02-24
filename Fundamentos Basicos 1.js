// 1.- Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function oneto255() {
    for(var i = 0; i <= 255; i++){
        console.log(i)
    }
}
oneto255()


// 2.-Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 

function parhasta1000() {
    for (var i = 1; i <= 1000; i++){
        if (i % 2 === 0 ){
            console.log(i)
        }
    }
}
parhasta1000()

// 3.- Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

function sumaimpar(){
    var sumaImpares = 0;
    for (var i = 1; i <= 5000; i++){
        if (i % 2 === 1){
            sumaImpares += i;
        }
    }
    console.log(sumaImpares)
}
sumaimpar()

// 4.- Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 

var array = [1,2,5];
var array_uno = [-5,2,5,12];
function suma(b){
    let resultado = 0;
    for (var i = 0; i < b.length; i++){
        resultado += b[i]
    }
    return resultado
}
console.log(suma(array))
console.log(suma(array_uno))

// 5.- Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

var array = [-3,3,5,7,-3,-200,7.1];
function mayor(b){
    var mayor = b[0];
    for (var i = 1; i < b.length ; i++){
        if (b[i] > mayor){
            mayor = b[i]
            }
        }
    return mayor
    }
console.log(mayor(array))

// 6.- Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

var array = [1,3,5,7,20];
function avg(b){
    let avg = 0;
    for (var i = 0; i < b.length; i++){
        avg += b[i]
    }
    return avg/b.length
}
console.log(avg(array))

// 7.- Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function impar(b){
    var impar = [];
    for (var i = 1 ; i <= 50; i++){
        if (i % 2 === 1){
            impar.push(i)
        }
    }
    return impar
}
console.log(impar(impar))

// 8.- Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

var y = 3;
var array = [1,3,5,7];
function menorque(b){
    var menorque = [];
    for (var i = 0; i < b.length; i++){
        if (b[i] > 3){
            menorque.push(b[i])
        }
    }
    return menorque
}
console.log(menorque(array))

// 9.- Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

var array = [1,5,10,-2];
function cuadrado(b){
    var cuadrado = [];
    for (var i = 0; i < b.length; i++){
        cuadrado.push(b[i]*b[i])
    }
    return cuadrado
}
console.log(cuadrado(array))

// 10.- Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

var array = [1,5,10,-2];
function Negativos(b){
    var negativos = [];
    for (var i = 0; i < b.length; i++){
        if (b[i] < 0){
            negativos.push(0)
        }
        else{
            negativos.push(b[i])
        }
    }
    return negativos
}
console.log(Negativos(array))

// 11.- Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).

var array = [1,5,10,-2];
function maxminavg(b){
    var max = b[0];
    var min = b[0];
    var suma = 0;
    for (let i = 0; i < b.length; i++){
        if (b[i] < min){
            min = b[i]
        }
        if (b[i] > max){
            max = b[i]
        }
        suma += b[i]
    }
    var avg = suma / b.length
    console.log([max,min,avg]);
}
maxminavg(array)

// 12.- Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

var array = [1,5,10,-2];
function intercambio(b){
    var intercambio = [];
    intercambio.push(b[b.length-1])
    for (var i = 1; i < b.length-1; i++){
        intercambio.push(b[i])
    }
    intercambio.push(b[0])
    console.log(intercambio)
}
intercambio(array)

// 13.- De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

var array = [-1,-3,2];
function devolvernegativo(b){
    var devolvernegativo = [];
    for (var i = 0; i < b.length; i++){
        if (b[i] < 0){
            devolvernegativo.push("Dojo")
        }
        else{
            devolvernegativo.push(b[i])
        }
    }
    console.log(devolvernegativo)
}
devolvernegativo(array)