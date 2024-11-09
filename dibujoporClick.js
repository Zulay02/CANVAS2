var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botonaso");
boton.addEventListener("click", dibujoporClick);

function dibujoporClick() {
    var d = document.getElementById("dibujoCanvas");
    var lienzo = d.getContext("2d");
    var ancho = 300;
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "red";
    var espacio = ancho / lineas;

    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300, lienzo);
        console.log("linea " + l);
    }
    dibujarLinea(colorcito, 299, 299, 299, 1, lienzo);
    dibujarLinea(colorcito, 299, 1, 1, 1, lienzo);
    dibujarLinea(colorcito, 1, 1, 1, 299, lienzo);
    dibujarLinea(colorcito, 1, 299, 299, 299, lienzo);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


