// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//para crear variable <amigos> donde se guarden los nombres en una [lista, arreglo o array]
let amigos = [];  
let nombreUsuario = document.getElementById("amigo");
//Función que nos permite agregar amigos a la lista luegro de apretar el botón <añadir> 
function agregarAmigo() {
    // lee el texto y quita espacios extra
    let nombre = nombreUsuario.value.trim(); 
    // si no está vacío
    if (nombre) { 
        // lo guarda en el arreglo
        amigos.push(nombre); 
        // muestra la lista en la consola
        console.log(amigos); 
        // limpia el campo
        nombreUsuario.value = ""; 
        // Esto genera la lista en el HTML
        mostrarAmigos();
    } else {
        //Si campo está vacío, entonces envia este mensaje de alerta en el pop up del navegador
        alert("Escribe un nombre antes de añadir.");
    }
}
//Función que nos permite mostrar la lista de amigos en la pagina web
function mostrarAmigos() {
    // Obtiene el elemento con id "listaAmigos" del HTML y lo guarda en la variable "lista"
    let lista = document.getElementById("listaAmigos"); 
    // Limpia el contenido anterior de la lista (por si ya tenía elementos)
    lista.innerHTML = "";
    // Recorre el arreglo "amigos" desde el índice 0 hasta el último elemento
    for (let i = 0; i < amigos.length; i++) {
        // Crea un nuevo elemento <li> para agregar a la lista
        let elemento = document.createElement("li");
         // Establece el texto del <li> como el nombre del amigo actual del arreglo
        elemento.textContent = amigos[i];
        // Agrega el <li> recién creado como hijo del elemento <ul> (lista)
        lista.appendChild(elemento);
    }
}
//Función que después de apretar el botón <sorteo amigo>
function sortearAmigo() {
    // Verifica si el arreglo "amigos" está vacío
    if (amigos.length === 0) {
        //Muestra un mensaje emergente (pop up) si no hay amigos en la lista
        alert("La lista está vacía. Añade algún amigo primero.");
        // Sale de la función para que no se siga ejecutando
        return;
    }
     // Genera un número aleatorio entre 0 y la longitud del arreglo "amigos" (sin incluirla)
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Usa ese índice aleatorio para obtener un amigo del arreglo
    let amigoAleatorio = amigos[indiceAleatorio];
    // Muestra el amigo aleatorio en la consola del navegador (solo para pruebas o depuración)
    console.log("Amigo aleatorio:", amigoAleatorio);
    // Muestra el nombre del amigo aleatorio en el elemento con id "amigoAleatorio"
    document.getElementById("amigoAleatorio").textContent = "Amigo aleatorio: " + amigoAleatorio;
}

       