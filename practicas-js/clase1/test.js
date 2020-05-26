//Ejercicios variables simples
let edad = 18
let peso = 50
let saludo = "Hola Mundo!"
console.log(saludo);
console.log(edad);

let numeroA = 30
let numeroB = 45

numeroA = 45
numeroB = 30

console.log(numeroA);
console.log(numeroB);

let meGustaElHelado = true
console.log(meGustaElHelado);

//Ejercicios Funciones

function funcionAltura(altura) {
    console.log("la función se ejecutó con" + " " + altura + " " + "altura"); 
}
funcionAltura(200)


function tresNumeros(num1, num2, num3) {
    console.log("El número" + " " + num1 + " " + "ingreso primero");   
    console.log( "El número" + " " + num2 + " " + "ingreso segundo");
    console.log( "El número" + " " + num3 + " " + "ingreso tercero");
    
}

tresNumeros(2,5,6)

function nombreCompleto(nombre, apellido) {
    console.log(nombre + " "+ apellido);
    
}
nombreCompleto("Flor","Villaverde")