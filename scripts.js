const nodoTitulo = document.querySelector("#gen-1")

console.log(nodoTitulo.innerHTML)
nodoTitulo.innerHTML = "Generasión 1 Pokimon"
nodoTitulo.style.backgroundColor = "pink"
console.log(nodoTitulo.innerHTML)

// Imprime por consola la URL de la página
console.log(window.location.href);

// Imprime por consola el dominio de la página
console.log(window.location.hostname)

// Imprime todos los nodos de imagen

const nodosImagenes = document.querySelectorAll("img")
console.log(nodosImagenes);


for (let i = 0; i < nodosImagenes.length; i++) {
    nodosImagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
  }
console.log(nodosImagenes)

