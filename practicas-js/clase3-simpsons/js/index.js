window.addEventListener("load", function() {

    document.querySelector("#titulo").addEventListener("mouseover", function() {
        
        //EJ 1
        let nombre = prompt("Como te llamas?")

        //EJ 2
        if (nombre == "") {
            document.querySelector("#saludo").innerHTML += "BIENVENID@"

        } else {
            document.querySelector("#saludo").innerHTML += "Bienvenid@" + " " + nombre
            
            // EJ 3
            saludo.style.textTransform = "uppercase"
        }

        //EJ 4
        let span = document.querySelector("span")
        span.style.display = "block" //se puede escribir en una linea? //porq style esta en tro color

        let titulo = document.querySelector("#titulo")
        titulo.style.display = "none"
    })

    //EJ 5
    document.querySelector("span").addEventListener("click", function() {

        let bienvenida = document.querySelector(".bienvenida")
        bienvenida.style.display = "none"

        let personajes = document.querySelector(".personajes")
        personajes.style.display = "flex"
    })





})












/*
window.addEventListener('load', function() {

    var titulo = _________________;
 
    var saludo = _________________;
 
    var span = ___________________;
 
 
    // Evento para el título //
    titulo._____ = function() {
 
    }
 
 
    // Evento para el span //
    span._______ = function() {
 
    }
 
 
    // Capturar pesonajes //
 
 
    // Asignarle a cada personaje su evento correspondiente, así como también su funcionalidad //
 
 
    
    var boton = ___________________;
 
    // Asignarle evento a la variable boton //
 
 
 }) 
 */