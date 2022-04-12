// DESAFÍO COMPLEMENTARIO 1

// Crear un algoritmo utilizando un ciclo




alert("beinvenido \neste es el desafio entregable 1");
alert("Crear un algoritmo utilizando un ciclo \nvamos a repetir una frase un numero n de veces");

let frase = prompt("ingresa una frase");
let nveces = parseFloat(prompt("ingresa el numerode veces a repetir"));

for (let i = 1; i <= nveces; i+=1) {
    console.log(frase + " " + i);
    document.write(frase + " " + i + "<br>");
}
