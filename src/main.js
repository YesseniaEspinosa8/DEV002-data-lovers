import data from './data/rickandmorty/rickandmorty.js';
console.log(data.results)
const personajes =data.results
const contenedor = document.getElementById("contenedor");
console.log(contenedor)

personajes.forEach(personaje =>{
    console.log(personaje.name)
    console.log(personaje.image)
    contenedor.innerHTML+= `
    <div class="card">
    <img class="imagen" src="${personaje.image}"  alt="imagen del personaje"/>
    <p>${personaje.name}</p>
    </div>
    
    `

})






