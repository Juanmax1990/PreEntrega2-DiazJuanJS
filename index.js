// Definir objetos
const placaMadre = {
    INTEL: {
        marca: "ASUS",
        modelo: "ROG Z370-H",
        precio: 200
    },
    AMD: {
        marcas: ["MSI", "ASUS", "GIGABYTE"],
        precio: 150
    }
};
console.log(placaMadre)

const microprocesadores = {
    INTEL: {
        modelos: [
            {
                nombre: "i5",
                precio: 300
            },
            {
                nombre: "i7",
                precio: 500
            }
        ]
    },
    AMD: {
        modelos: [
            {
                nombre: "Ryzen",
                precio: 250
            },
            {
                nombre: "Threadripper",
                precio: 800
            }
        ]
    }
};
console.log(microprocesadores)

// Función de búsqueda por arreglo
function buscarEnArreglo(arreglo, valorBuscado) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valorBuscado) {
            return true;
        }
    }
    return false;
}

// Obtiene el nombre y el apellido del usuario
let nombreyapellido = prompt('Ingresa tu nombre y apellido');
console.log(nombreyapellido);
alert('Bienvenido a Compumax ' + nombreyapellido);

// Obtiene la edad del usuario
let edad = parseInt(prompt('Ingresa tu edad'));
console.log(edad);

// Obtiene el correo electrónico del usuario
const email = prompt('Ingresa tu email');
console.log(email);

// Muestra el menú de opciones para la compra
let respuesta = false;
let precioPlaca = 0;
let precioMicro = 0;

while (!respuesta) {
    let accion = prompt('¿Qué desea comprar?\n1. Placa Madre\n2. Microprocesador');

    switch (accion) {
        case '1':
            // Elige la placa madre, si es AMD o INTEL
            let compraPlaca = prompt('¿Quieres comprar una placa INTEL o AMD?').toUpperCase();

            while (compraPlaca !== 'INTEL' && compraPlaca !== 'AMD') {
                alert('Por favor, ingrese una opción válida');
                compraPlaca = prompt('¿Quieres comprar una placa INTEL o AMD?').toUpperCase();
            }

            console.log('El usuario eligió:', compraPlaca);

            if (compraPlaca === 'INTEL') {
                alert('Solo contamos con stock de ASUS ROG Z370-H');
            } else {
                alert('Contamos con marcas como MSI, ASUS y GIGABYTE');
            }

            precioPlaca = calcularPrecio(compraPlaca, 'Placa Madre');
            alert(`El precio de la placa madre es de $${precioPlaca}`);
            respuesta = true;
            break;

        case '2':
            // Elige el micro, si es AMD o INTEL
            let compraMicro = prompt('¿Quieres comprar un micro INTEL o AMD?').toUpperCase();

            while (compraMicro !== 'INTEL' && compraMicro !== 'AMD') {
                alert('Por favor, ingrese una opción válida');
                compraMicro = prompt('¿Quieres comprar un micro INTEL o AMD?').toUpperCase();
            }

            console.log('El usuario eligió:', compraMicro);


            if (compraMicro === 'INTEL') {
                alert('Contamos con todos los modelos de la gama "i"');
            } else {
                alert('Tenemos los modelos Ryzen y para lo más exigentes, los Threadripper');
            }

            // Busqueda por arreglo
            let modelos = [];
            if (compraMicro === 'INTEL') {
                modelos = microprocesadores.INTEL.modelos;
            } else {
                modelos = microprocesadores.AMD.modelos;
            }


            let modelosDisponibles = modelos.map(modelo => modelo.nombre.toUpperCase());
            let modeloSeleccionado = prompt(`Seleccione el modelo que desea comprar: ${modelosDisponibles}`).toUpperCase();


            precioMicro = calcularPrecio(compraMicro, 'Microprocesadores');
            alert(`El precio del microprocesador ${modeloSeleccionado} es de $${precioMicro}`);
            respuesta = true;
            break;


        default:
            alert('Por favor, ingrese una opción válida');
            break;
    }

}

function calcularPrecio(opcion1, opcion2) {
    let precio = 0;
    let modeloSeleccionado = '';
    if (opcion1 === 'INTEL' && opcion2 === 'Placa Madre') {
        precio = 200;
    } else if (opcion1 === 'AMD' && opcion2 === 'Placa Madre') {
        precio = 150;
    } else if (opcion1 === 'INTEL' && opcion2 === 'Microprocesadores') {
        let modelosDisponibles = microprocesadores.INTEL.modelos.map(modelo => modelo.nombre.toUpperCase());
        while (!modelosDisponibles.includes(modeloSeleccionado)) {
            alert(`Por favor, seleccione un modelo válido: ${modelosDisponibles}`);
            modeloSeleccionado = prompt(`Seleccione el modelo que desea comprar: ${modelosDisponibles}`).toUpperCase();
        }
        if (modeloSeleccionado === 'I5') {
            precio = 300;
        } else if (modeloSeleccionado === 'I7') {
            precio = 500;
        }
    } else if (opcion1 === 'AMD' && opcion2 === 'Microprocesadores') {
        let modelosDisponibles = microprocesadores.AMD.modelos.map(modelo => modelo.nombre.toUpperCase());
        modeloSeleccionado = prompt(`Seleccione el modelo que desea comprar: ${modelosDisponibles}`).toUpperCase();
        while (!modelosDisponibles.includes(modeloSeleccionado)) {
            alert(`Por favor, seleccione un modelo válido: ${modelosDisponibles}`);
            modeloSeleccionado = prompt(`Seleccione el modelo que desea comprar: ${modelosDisponibles}`).toUpperCase();
        }
        if (modeloSeleccionado === 'RYZEN') {
            precio = 250;
        } else if (modeloSeleccionado === 'THREADRIPPER') {
            precio = 800;
        }
    }
    return precio;
}