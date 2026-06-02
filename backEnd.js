const display = document.getElementById("display");

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = "";
}

function apagar() {
    display.value = display.value.slice(0, -1);
}

function calcular() {

    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Erro";
    }

}

function porcentagem() {

    if (display.value !== "") {
        display.value = Number(display.value) / 100;
    }

}

function raiz() {

    if (display.value !== "") {
        display.value = Math.sqrt(Number(display.value));
    }

}

function logaritmo() {

    if (display.value !== "") {

        const numero = Number(display.value);

        if (numero > 0) {
            display.value = Math.log10(numero);
        }
        else {
            display.value = "Erro";
        }

    }

}