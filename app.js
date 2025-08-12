// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];  //para crear variable donde se guarden los nombres
let nombreUsuario = document.getElementById("amigo");

function agregarAmigo() {
    let nombre = nombreUsuario.value.trim(); // lee el texto y quita espacios extra
    if (nombre) { // si no está vacío
        amigos.push(nombre); // lo guarda en el arreglo
        console.log(amigos); // muestra la lista en la consola
        nombreUsuario.value = ""; // limpia el campo
        mostrarAmigos();// Esto genera la lista en el HTML
    } else {
        alert("Escribe un nombre antes de añadir.");
    }
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement("li");
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}

function mostrarAleatorio() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Añade algún amigo primero.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoAleatorio = amigos[indiceAleatorio];

    console.log("Amigo aleatorio:", amigoAleatorio);

    document.getElementById("amigoAleatorio").textContent = "Amigo aleatorio: " + amigoAleatorio;
}

       