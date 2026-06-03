const display = document.getElementById("display");

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = "";
}

function apagar() {
    display.value = display.value.slice(0, -1); //slice() -> recorta a string, neste caso, remove o último caractere.
}

function calcular() {

    try {
        display.value = eval(display.value); //eval() -> interpreta string como expressão matemática.
    }
    catch {
        display.value = "Erro";
    }

}

function porcentagem() {

    if (display.value !== "") {
        display.value = Number(display.value) / 100; //Number() -> converte a string p número.
    }

}

function raiz() {

    if (display.value !== "") {
        display.value = Math.sqrt(Number(display.value)); //Math.sqrt() -> calcula a raiz quadrada de um número.
    }

}

function logaritmo() {

    if (display.value !== "") {

        const numero = Number(display.value); // converte string q user digita p numero.

        if (numero > 0) {
            display.value = Math.log10(numero);
            
        }
        else {
            display.value = "Erro";
        }

    }

}