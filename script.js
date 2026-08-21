const display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteNumber() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        if (!Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch {
        display.value = "Error";
    }
}

function squareRoot() {
    try {
        let number = Number(display.value);

        if (number < 0) {
            display.value = "Error";
        } else {
            display.value = Math.sqrt(number);
        }

    } catch {
        display.value = "Error";
    }
}