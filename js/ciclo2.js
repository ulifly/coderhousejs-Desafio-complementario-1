alert("este es otro ejemplo de ciclo");
let resp = confirm("esto se repite hasta que canceles");
let num = 0;
    do {
        num += 1;
        resp = confirm("esto se repite hasta que canceles");
    } while (resp == true);   
if (num <= 3 ) {
    document.write("solo para que sepas presionaste aceptar " + num + " " + "veces, que poquito probaste!!!!");
} else {
    document.write("solo para que sepas presionaste aceptar " + num + " " + "veces, que insistente!!!!!");
}
