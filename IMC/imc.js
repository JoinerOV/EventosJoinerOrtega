document.addEventListener('DOMContentLoaded', (event) => {
    // Agregar un listener al botón para calcular el IMC cuando se haga clic
    document.getElementById('calculateButton').addEventListener('click', calculateBMI);
});

function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight && height) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        document.getElementById('bmi').value = bmi;
    } else {
        alert('Por favor, ingrese valores válidos para peso y altura.');
    }
}


