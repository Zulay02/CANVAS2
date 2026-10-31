var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botonaso");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
var colorcito = "red";

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarBordes() {
    dibujarLinea(colorcito, ancho - 1, ancho - 1, ancho - 1, 1);  // borde derecho
    dibujarLinea(colorcito, ancho - 1, 1, 1, 1);                  // borde superior
    dibujarLinea(colorcito, 1, 1, 1, ancho - 1);                  // borde izquierdo
    dibujarLinea(colorcito, 1, ancho - 1, ancho - 1, ancho - 1);  // borde inferior
}

function dibujarFigura(lineas) {
    // Se borra el dibujo anterior antes de dibujar el nuevo.
    lienzo.clearRect(0, 0, ancho, ancho);

    var espacio = ancho / lineas;
    var yi, xf;

    for (var l = 0; l < lineas; l++) {
        yi = espacio * (l + 1);
        xf = ancho - espacio * (l + 1);

        dibujarLinea("red", 0, xf, xf, ancho);
        dibujarLinea("blue", ancho, xf, xf, 0);
        dibujarLinea("green", ancho, yi, xf, ancho);
        dibujarLinea("green", 0, yi, xf, 0);
    }

    dibujarBordes();
}

function dibujoPorClick() {
    var lineas = parseInt(texto.value);

    // Se revisa que la cantidad escrita sea valida.
    if (isNaN(lineas) || lineas <= 0) {
        alert("Escribe un número de líneas mayor que cero.");
        return;
    }

    dibujarFigura(lineas);
}

// Al abrir la pagina se dibuja la figura con 30 lineas.
texto.value = 30;
dibujarFigura(30);
