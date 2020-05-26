window.addEventListener("load", function() {
//Practica gif random
    fetch("https://api.giphy.com/v1/gifs/random?api_key=WHQLIF78s7p36VKv8EQ7fnfF1RUl401g&tag=&rating=G")
    
    .then(function(response) {
        return response.json()
      })

    .then(function(information) {
        console.log(information);

        let gif = information.data

        let url = gif.image_url
        let nombre = gif.title

        document.querySelector("h1").innerHTML = nombre 
        document.querySelector("img").src = url
    })
    
})