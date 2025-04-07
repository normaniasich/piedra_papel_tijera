// console.log("hello ACAAAAA")
// const edad = prompt("¿cuantos años tenes?")
// if (edad >= 18) {
//     alert(`sos mayor de edad: ${edad}`)
// } else {
//     alert("sos menor de edad")
// }

// function logout() {
//     console.log("cerrar sesion");
// };
// console.log("sigo aca");

// logout();


function obtenerEleccionComputadora() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const eleccionAleatoria = Math.floor(Math.random() * 3); // Genera un número aleatorio entre 0 y 2
    return opciones[eleccionAleatoria];
}

// Función que determina el ganador
function determinarGanador(eleccionUsuario, eleccionComputadora) {
    if (eleccionUsuario === eleccionComputadora) {
        return 'Es un empate!';
    }
    if (
        (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijera') ||
        (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionUsuario === 'tijera' && eleccionComputadora === 'papel')
    ) {
        return '¡Ganaste!';
    } else {
        return 'Perdiste!';
    }
}


function jugar() {
    // Solicita la elección del usuario con emojis
    let eleccionUsuario = prompt('Elige entre piedra ✊, papel ✋ o tijera ✌️:');

    // Verifica si la elección del usuario es válida
    if (eleccionUsuario === 'piedra' || eleccionUsuario === 'papel' || eleccionUsuario === 'tijera') {
        console.log("Usuario elige: ", eleccionUsuario);

        // Obtiene la elección de la computadora
        let eleccionComputadora = obtenerEleccionComputadora();
        console.log("Usuario pc: ", eleccionComputadora);
        
        // Muestra las elecciones y el resultado
        alert(`Tu elección: ${eleccionUsuario}\nElección de la computadora: ${eleccionComputadora}`);
        alert(determinarGanador(eleccionUsuario, eleccionComputadora));

    } else {
        alert('Opción no válida. Elige uno de los emojis disponibles: ✊, ✋ o ✌️');
    }
}

jugar();
