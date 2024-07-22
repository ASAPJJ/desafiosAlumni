function calcularPresupuesto() {
    let ingresoTotal = parseFloat(document.getElementById('ingresoTotal').value);

    if (isNaN(ingresoTotal) || ingresoTotal <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, ingrese un monto válido.';
        return;
    }

    let gastosNecesarios = ingresoTotal * 0.50;
    let gastosOpcionales = ingresoTotal * 0.30;
    let ahorroInversion = ingresoTotal * 0.20;

    let resultadoTexto = `
        Gastos Necesarios: ${gastosNecesarios.toFixed(2)}<br>
        Gastos Opcionales: ${gastosOpcionales.toFixed(2)}<br>
        Ahorro e Inversión: ${ahorroInversion.toFixed(2)}
    `;

    document.getElementById('resultado').innerHTML = resultadoTexto;
}
