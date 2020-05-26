window.addEventListener("load", function() {
//Practica array gifs




    fetch("https://api.giphy.com/v1/gifs/trending?api_key=WHQLIF78s7p36VKv8EQ7fnfF1RUl401g&limit=25&rating=G")
    
    .then(function(response) {
        return response.json()
      })

    .then(function(information) {
        console.log(information);
        
        let gif = information.data

        let cantidadGifs = prompt("Cuantos gifs queres ver perri?")

 
        for (let index = 0; index < cantidadGifs; index++) {
            const element = gif[index];
            
            let url = element.images.original.url
            let nombre = element.title

            document.querySelector(".conteiner").innerHTML += "<h1>" + nombre +  "</h1>" + '<img src="' + url + ' ">' 
        }
     
    }) 
})