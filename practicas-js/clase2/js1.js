//PRACTICA CONDICIONALES

//EJERCIO 1
let culpable = prompt("Sos culpable?")

if (culpable == "si") {
    alert ("a la carcel")
}else if(culpable == "no") {
    alert ("a casa")
}


//EJERCIO 2
let numero1 = 18
let numero2 = 5

let resultado = ""

if (numero1 == numero2) {
    resultado = "son iguales"
    alert(resultado)
} else {
    resultado = "son diferentes"
    alert(resultado)
}

if (numero1 > 12 && numero1 < 20) {
    resultado = "es mayor que 12 y menor que 20"
    alert(resultado)
}else{
    resultado = "no cumple la condicion"
    alert(resultado)
}
 

//EJERCIO 3

let paginaSolicitada = prompt("Que pagina solicitaste?")

function paginaArtista(){
    console.log("Bienvenido al detalle de artistas");
}

function paginaTrack(){
    console.log("Bienvenido al detalle de track");
}

function paginaAlbum(){
    console.log("Bienvenido al detalle de artistas");
}

if (paginaSolicitada == "artista") {
    paginaArtista()
} else if (paginaSolicitada == "track") {
    paginaTrack()
} else if (paginaSolicitada == "album") {
    paginaAlbum()
}

