//PRACTICA DOM

//EJ 1
alert("Bienvenidxs a mi sitio!")

let continuar = prompt("Queres seguir en la pagina?")

if (continuar == "si") {
    document.querySelector("h2").innerHTML = "Qué alegría que quieras con tu visita por este maravilloso sitio!!"

} else {
    document.querySelector("h2").innerHTML = "Lamentamos que no quieras continuar tu visita por este sitio increíble"
}

let nombre = prompt ("como te llamas?")

document.querySelector("h1").innerHTML +=  " " + nombre

let edad = prompt("Cuantos años tenes?")

if (edad < 18) {
    alert("No sos mayor de edad asique andate")
}

let modoOscuro = confirm("Queres usar el modo oscuro?")

//EJ 2
if (modoOscuro == true) {
    let fondo = document.querySelector("body")
    fondo.style.backgroundColor = "dimgray"
    fondo.style.color = "white"
} 