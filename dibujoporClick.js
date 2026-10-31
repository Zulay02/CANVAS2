var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botonaso");
boton.addEventListener("click", dibujoporClick);

function dibujoporClick() {
    var d = document.getElementById("dibujoCanvas");
    var lienzo = d.getContext("2d");
    var ancho = d.width;
    var lineas = parseInt(texto.value);

    // Se revisa que la cantidad escrita sea valida.
    if (isNaN(lineas) || lineas <= 0) {
        alert("Escribe un número de líneas mayor que cero.");
        return;
    }

    // Se borra el dibujo anterior antes de dibujar el nuevo.
    lienzo.clearRect(0, 0, ancho, ancho);

    var yi, xf;
    var colorcito = "red";
    var espacio = ancho / lineas;

    for (var l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, ancho, lienzo);
    }
    dibujarLinea(colorcito, ancho - 1, ancho - 1, ancho - 1, 1, lienzo);  // borde derecho
    dibujarLinea(colorcito, ancho - 1, 1, 1, 1, lienzo);                  // borde superior
    dibujarLinea(colorcito, 1, 1, 1, ancho - 1, lienzo);                  // borde izquierdo
    dibujarLinea(colorcito, 1, ancho - 1, ancho - 1, ancho - 1, lienzo);  // borde inferior
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
