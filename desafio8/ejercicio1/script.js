function analizarFlujo() {
    let flujoCaja = [
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

    let totalIngreso = 0;
    let totalEgreso = 0;

    for (let i = 0; i < flujoCaja.length; i++) {
        totalIngreso += flujoCaja[i].ingreso;
        totalEgreso += flujoCaja[i].egreso;
    }

    let resultadoTexto = `Total Ingreso: ${totalIngreso}<br>Total Egreso: ${totalEgreso}<br>`;

    if (totalIngreso > totalEgreso) {
        resultadoTexto += "Resultado: La empresa genera ganancias.";
    } else if (totalIngreso < totalEgreso) {
        resultadoTexto += "Resultado: La empresa genera pérdidas.";
    } else {
        resultadoTexto += "Resultado: La empresa no genera ni ganancias ni pérdidas.";
    }

    document.getElementById('resultado').innerHTML = resultadoTexto;
}
