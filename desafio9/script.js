// Función para analizar el flujo de caja
function analizarFlujoCaja(flujoCaja) {
    let totalIngreso = 0;
    let totalEgreso = 0;

    for (let i = 0; i < flujoCaja.length; i++) {
        totalIngreso += flujoCaja[i].ingreso;
        totalEgreso += flujoCaja[i].egreso;
    }

    if (totalIngreso > totalEgreso) {
        return 1; // Ganancias
    } else if (totalIngreso < totalEgreso) {
        return -1; // Pérdidas
    } else {
        return 0; // Ingresos iguales a las ganancias
    }
}

function mostrarResultadoFlujo() {
    let flujoCajaEjemplo = [
        { mes: "Enero", ingreso: 1500, egreso: 1500 },
        { mes: "Febrero", ingreso: 2500, egreso: 2500 },
        { mes: "Marzo", ingreso: 84683, egreso: 1155 },
        { mes: "Abril", ingreso: 135353, egreso: 1533 },
        { mes: "Mayo", ingreso: 1535, egreso: 5434 },
        { mes: "Junio", ingreso: 4343354, egreso: 5434543 },
        { mes: "Julio", ingreso: 435453, egreso: 4543 },
        { mes: "Agosto", ingreso: 78351, egreso: 7816 },
        { mes: "Septiembre", ingreso: 1878, egreso: 95634 },
        { mes: "Octubre", ingreso: 48483, egreso: 9433 },
        { mes: "Noviembre", ingreso: 35483, egreso: 53133 },
        { mes: "Diciembre", ingreso: 3843, egreso: 348133 }
    ];

    let resultado = analizarFlujoCaja(flujoCajaEjemplo);
    let mensaje = "";

    if (resultado === 1) {
        mensaje = "La empresa genera ganancias.";
    } else if (resultado === -1) {
        mensaje = "La empresa genera pérdidas.";
    } else {
        mensaje = "La empresa no genera ni ganancias ni pérdidas.";
    }

    document.getElementById('resultadoFlujo').innerText = mensaje;
}

// Función para calcular intereses
function calcularIntereses(inversiones) {
    return inversiones.map(inversion => {
        let interes = (inversion.capital * inversion.plazo * inversion.tasa) / 100;
        return { ...inversion, interes: interes.toFixed(2) };
    });
}

function mostrarResultadoIntereses() {
    let inversionesEjemplo = [
        { nombre: "Plan 001", capital: 150000, plazo: 30, tasa: 15 },
        { nombre: "Plan 002", capital: 300000, plazo: 180, tasa: 10 },
        { nombre: "Plan 003", capital: 485000, plazo: 60, tasa: 23 }
    ];

    let interesesCalculados = calcularIntereses(inversionesEjemplo);
    let resultadoTexto = `Intereses calculados:<br>`;
    interesesCalculados.forEach(inversion => {
        resultadoTexto += `${inversion.nombre}: Capital: ${inversion.capital}, Plazo: ${inversion.plazo} días, Tasa: ${inversion.tasa}%, Interés: ${inversion.interes}<br>`;
    });

    document.getElementById('resultadoInteres').innerHTML = resultadoTexto;
}
