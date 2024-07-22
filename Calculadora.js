let operandoA = "";
let operandoB = "";
let operacion = "";

function init() {
    let display = document.getElementById("display");
    let boton0 = document.getElementById("0");
    let boton1 = document.getElementById("1");
    let boton2 = document.getElementById("2");
    let boton3 = document.getElementById("3");
    let boton4 = document.getElementById("4");
    let boton5 = document.getElementById("5");
    let boton6 = document.getElementById("6");
    let boton7 = document.getElementById("7");
    let boton8 = document.getElementById("8");
    let boton9 = document.getElementById("9");
    let botonSumar = document.getElementById("sumar");
    let botonRestar = document.getElementById("restar");
    let botonMultiplicar = document.getElementById("multiplicar");
    let botonDividir = document.getElementById("dividir");
    let botonIgual = document.getElementById("igual");
    let botonResetear = document.getElementById("resetear");

    
    boton0.onclick = function() {
        display.value += "0";
    }
    boton1.onclick = function() {
        display.value += "1";
    }
    boton2.onclick = function() {
        display.value += "2";
    }
    boton3.onclick = function() {
        display.value += "3";
    }
    boton4.onclick = function() {
        display.value += "4";
    }
    boton5.onclick = function() {
        display.value += "5";
    }
    boton6.onclick = function() {
        display.value += "6";
    }
    boton7.onclick = function() {
        display.value += "7";
    }
    boton8.onclick = function() {
        display.value += "8";
    }
    boton9.onclick = function() {
        display.value += "9";
    }

    // Eventos onclick para los botones de operaciones
    botonSumar.onclick = function() {
        if (display.value !== "" && !operacion) {
            operandoA = display.value;
            operacion = "+";
            display.value += " + ";
        }
    }
    botonRestar.onclick = function() {
        if (display.value !== "" && !operacion) {
            operandoA = display.value;
            operacion = "-";
            display.value += " - ";
        }
    }
    botonMultiplicar.onclick = function() {
        if (display.value !== "" && !operacion) {
            operandoA = display.value;
            operacion = "*";
            display.value += " * ";
        }
    }
    botonDividir.onclick = function() {
        if (display.value !== "" && !operacion) {
            operandoA = display.value;
            operacion = "/";
            display.value += " / ";
        }
    }

    botonIgual.onclick = function() {
        if (operandoA !== "" && operacion !== "" && display.value !== "") {
            let parts = display.value.split(" ");
            operandoB = parts[2];
            resolver();
        }
    }

    botonResetear.onclick = function() {
        resetear();
    }
}

function limpiar() {
    document.getElementById("display").value = "";
}

function resetear() {
    document.getElementById("display").value = "";
    operandoA = "";
    operandoB = "";
    operacion = "";
}

function resolver() {
    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;
    }
    resetear();
    document.getElementById("display").value = res;
}
