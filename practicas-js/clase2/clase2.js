let producto1 = {
    nombre: "Agua con gas",
    precio: 40.50,
    sinTACC: true,
}

let producto2 = {
    nombre: "Fideos",
    precio: 25,
    sinTACC: false,
    productoRelacionado: {
        nombre: "Arroz",
        precio: 23,
        sinTACC: true
    },
    calcularDescuento: function(porcentajeDeDescuento) {
        return porcentajeDeDescuento * this.precio;
    }    
}

let precioFinalDelProducto2 = producto2.calcularDescuento(0.5);

console.log(precioFinalDelProducto2);

// blablabalbalabablalb


let amigos = [
    {
        nombre: "Alan",
        apellido: "Rios"
    },
    {
        nombre: "Martin",
        apellido: "Bale"
    },
    {
        nombre: "Pablo",
        apellido: "T"
    }
]

amigos.push({
    nombre: "Santi",
    apellido: "Safer"
})

console.log(amigos[2].nombre + " " + amigos[2].apellido);


let notasDelParcial = [4,10,5];

notasDelParcial.push(8);

console.log(notasDelParcial);


