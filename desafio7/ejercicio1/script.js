function validarEdad() {
    let edad = parseInt(document.getElementById('edad').value);

    if (isNaN(edad) || edad <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, ingrese una edad válida.';
        return;
    }

    if (edad > 18) {
        document.getElementById('resultado').innerText = 'Bienvenido.';
    } else {
        document.getElementById('resultado').innerText = 'Error: Debes ser mayor de 18 años.';
    }
}
