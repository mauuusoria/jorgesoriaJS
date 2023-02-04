const comprarProductos = () => {
    let producto = ""
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = false


    
    do {
        producto = prompt("Elija que desea ordenar. ¿Tarta o Milanesa?")

        if (producto === "Tarta") {
            let tipoTarta = prompt("las tartas disponibles son: choclo y espinaca")

            switch (tipoTarta) {
                case "choclo":
                    precio = 1200
                    cantidad = parseInt(prompt("¿cuantas tartas de choclo pedirá?"))
                break;
            
                case "espinaca": 
                    precio = 1300
                    cantidad = parseInt(prompt("¿cuantas tartas de espinaca pedirá?"))
                break;

                default:
                    precio = 0
                    cantidad = 0
                    alert("algún dato es incorrecto, por favor ingresar choclo o espinaca")
                    tipoPizza = prompt("las pizzas disponibles son: choclo o espinaca")
            }
        }

        else if (producto === "milanesa") {
            let tipoMilanesa = prompt("las variedades disponibles son: carne o pollo")
            switch (tipoMilanesa) {
                case "carne":
                    precio = 220
                    cantidad = parseInt(prompt("¿cuantas milanesas de carne llevará?"))
                break;
            
                case "pollo":
                    precio = 200
                    cantidad = parseInt(prompt("¿cuantas milanesas de pollo llevará?"))
                break;
                
                default:
                    precio = 0
                    cantidad = 0
                    alert("algún dato es incorrecto, por favor ingresar carne o pollo")
                    tipoEmpanada = prompt("las variedades disponibles son: carne o pollo")
            }
        }else {
            alert("alguno de los datos ingresados es incorrecto, por favor ingrese tarta o milanesa")
            seguirComprando = true
        }

        subtotal = precio * cantidad
        alert("El total sería de: $"+subtotal)
        seguirComprando = confirm("¿Desea ordenar algo más?")


    } while (seguirComprando);

    
};

const comprar = comprarProductos()