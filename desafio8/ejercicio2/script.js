function calcularIntereses() {
    let planes = [
        { nombre: "Plan 001", capital: 150000, plazo: 30, tasa: 15 },
        { nombre: "Plan 002", capital: 300000, plazo: 180, tasa: 10 },
        { nombre: "Plan 003", capital: 485000, plazo: 60, tasa: 23 }
    ];

    let interesesCalculados = planes.map(plan => {
        let interes = (plan.capital * plan.plazo * plan.tasa) / 100;
        return { ...plan, interes: interes.toFixed(2) };
    });

    let totalIntereses = interesesCalculados.reduce((total, plan) => total + parseFloat(plan.interes), 0);

    let resultadoTexto = `Intereses calculados:<br>`;
    interesesCalculados.forEach(plan => {
        resultadoTexto += `${plan.nombre}: Capital: ${plan.capital}, Plazo: ${plan.plazo} días, Tasa: ${plan.tasa}%, Interés: ${plan.interes}<br>`;
    });
    resultadoTexto += `Total de Intereses: ${totalIntereses.toFixed(2)}`;

    document.getElementById('resultado').innerHTML = resultadoTexto;
}
