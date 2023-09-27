function realizarOperaciones(numero1, numero2) {
    const resultados = [];

    for (let i = 1; i <= 5; i++) {
        let operacion, resultado;
        switch (i) {
            case 1:
                operacion = "SUMA";
                resultado = numero1 + numero2;
                break;
            case 2:
                operacion = "RESTA";
                resultado = numero1 - numero2;
                break;
            case 3:
                operacion = "MULTIPLICACIÓN";
                resultado = numero1 * numero2;
                break;
            case 4:
                operacion = "DIVISIÓN";
                resultado = numero1 / numero2;
                break;
            case 5:
                operacion = "MOD";
                resultado = numero1 % numero2;
                break;
            default:
                break;
        }

        resultados.push(`${i} : ${operacion} = ${resultado}`);
    }

    return resultados;
}

const numero1 = parseFloat(prompt("Ingresa el primer número:"));
const numero2 = parseFloat(prompt("Ingresa el segundo número:"));

if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, ingresa dos números válidos.");
} else {
    const resultados = realizarOperaciones(numero1, numero2);
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = resultados.join("<br>");
}
