//Ejercicio 2
document.addEventListener('DOMContentLoaded', (event) => {
    // Obtener los elementos de los campos de entrada de divisas
    const dollarsInput = document.getElementById('dollars');
    const pesosInput = document.getElementById('pesos');

    // Verificar si los elementos existen antes de agregar los event listeners
    if (dollarsInput && pesosInput) {
        // Agregar listeners a los campos de entrada de divisas para actualizar el valor convertido
        dollarsInput.addEventListener('input', convertToPesos);
        pesosInput.addEventListener('input', convertToDollars);
    }
});

function convertToPesos() {
    const dollars = document.getElementById('dollars').value;
    const pesos = (dollars * 4095).toFixed(2);
    document.getElementById('pesos').value = pesos;
}

function convertToDollars() {
    const pesos = document.getElementById('pesos').value;
    const dollars = (pesos / 4095).toFixed(2);
    document.getElementById('dollars').value = dollars;
}