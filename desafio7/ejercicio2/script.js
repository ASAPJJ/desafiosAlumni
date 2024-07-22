function validarCredenciales() {
    let usuario = document.getElementById('usuario').value;
    let clave = document.getElementById('clave').value;

    if (usuario === "admin" && clave === "1234") {
        document.getElementById('resultado').innerText = 'Bienvenido.';
    } else {
        document.getElementById('resultado').innerText = 'Error: Usuario o clave incorrectos.';
    }
}
