//aplicación juego amigo secreto

const ingresaAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const amigoSorteado = document.getElementById("resultado"); 
const nombreAmigoSecreto = [];

function agregarAmigo() {
    const nombre = ingresaAmigo.value.trim();
    if (nombre === "") {  
        alert("Debe ingresar un nombre válido");
        return;
    }
    
    for (let i = 0; i < nombreAmigoSecreto.length; i++) { 
        if (nombreAmigoSecreto[i] === nombre) {
            alert("Ese nombre ya fue ingresado");
            ingresaAmigo.value = ""; 
            return;
        }
    }
    
    nombreAmigoSecreto.push(nombre); 
    const elementoLista = document.createElement("li"); 
    elementoLista.textContent = nombre; 
    listaAmigos.appendChild(elementoLista);  
    //console.log (nombre);
    ingresaAmigo.value = ""; 
}


function sortearAmigo() {
    listaAmigos.innerHTML = ''; 
    if (nombreAmigoSecreto.length === 0) {                  
        alert("No hay nombres en la lista para sortear");
        return;
    }
   
    const azar = Math.floor(Math.random() * nombreAmigoSecreto.length);  
    const amigoSecreto = nombreAmigoSecreto[azar];
    nombreAmigoSecreto.splice(azar, 1); 
    amigoSorteado.textContent = `El amigo secreto es: ${amigoSecreto}`;
    //console.log(amigoSecreto);

}