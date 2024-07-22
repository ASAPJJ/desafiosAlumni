function calcularEquilibrio() {
    let costosFijos = parseFloat(document.getElementById('costosFijos').value);
    let precioVenta = parseFloat(document.getElementById('precioVenta').value);
    let costosVariables = parseFloat(document.getElementById('costosVariables').value);

    if (precioVenta > costosVariables) {
        let puntoEquilibrio = costosFijos / (precioVenta - costosVariables);
        document.getElementById('resultado').innerText = 'El Punto de Equilibrio es: ' + puntoEquilibrio.toFixed(2);
    } else {
        document.getElementById('resultado').innerText = 'El Precio de Venta debe ser mayor que los Costos Variables.';
    }
}
