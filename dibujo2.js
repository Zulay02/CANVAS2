var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf, xi, yf;

for (l = 0; l < lineas; l++) {
    xi = 10 * l;
    yi = 10 * (l + 1);
    xf = 300 - (10 * (l + 1));
    yf = 10 * (l + 1);

    dibujarLinea("red", 0, xf, xf, 300);
    dibujarLinea("blue", 300, xf, xf, 0);
    dibujarLinea("green", 300, yi, xf, 300);
    dibujarLinea("orange", 0, yi, xf, 0);
    console.log("linea " + l);
}

dibujarBordes();

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarBordes() {
    var colorcito = "red";

    dibujarLinea(colorcito, 299, 299, 299, 1);
    dibujarLinea(colorcito, 299, 1, 1, 1);
    dibujarLinea(colorcito, 1, 1, 1, 299);
    dibujarLinea(colorcito, 1, 299, 299, 299);
}
