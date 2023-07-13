alert("Bienvenido, aquí podra calcular las cuotas")

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

const nombreUsuario = nombre + " " + apellido;
console.log("Nombre: " + nombreUsuario);
alert("Bienvenido " + nombreUsuario)

function opciones() {
    let opcion1, opcion2;

    let Opcion = prompt("Opción 1: 6 Cuotas // Opción 2: 12 Cuotas");

    while (Opcion != 1 && Opcion != 2) {
        console.error("error, reingrese");
        Opcion = prompt("Reingrese solo el numero 1: 6 Cuotas / 2: 12 Cuotas");
    }

    if (Opcion == 1 || Opcion <= 0) {
        alert("Has seleccionado el pago en 6 cuotas, el interes es del 16%");

        opcion1 = prompt("Ingrese el valor del producto: ");

        while (opcion1 < 0 ) {

            alert("Error: Ingrese un monto valido");
            
            opcion1 = prompt("Ingrese el valor que desea pagar en 6 cuotas");
        }   
        if (opcion1 >= 0){

        alert("en la consola le aparecerá el monto con el interes, oprima F12")

        console.log("Monto a pagar en 6 cuotas : " + opcion1 + " total de: " + opcion1 * 1.16)
        } 
    } else if (Opcion == 2) {
        alert("Has seleccionado el pago en 12 cuotas, el interes es del 43%");

        opcion2 = prompt("Ingrese el valor que desea pagar en 6 cuotas");

        alert("en la consola le aparecerá el monto con el interes, oprima F12")

        console.log("Monto a pagar en 12 cuotas : " + opcion2 + " total de: " + opcion2 * 1.43)
    }

    return { opcion1, opcion2 };
}

let opcionesSeleccionadas = opciones();
console.log(opcionesSeleccionadas.opcion1);
console.log(opcionesSeleccionadas.opcion2);


