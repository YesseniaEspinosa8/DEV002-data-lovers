import data from './data/rickandmorty/rickandmorty.js';
import { filterbyCharacters } from './data.js';
console.log(data.results)
const personajes = data.results
const contenedor = document.getElementById("contenedor");
console.log(contenedor)


const displayCard =(dataRam) => {
    contenedor.innerHTML=""
    dataRam.forEach(personaje => {
        console.log(personaje.name)
        console.log(personaje.image)
        contenedor.innerHTML += `
        <div class="card">
        <img class="imagen" src="${personaje.image}"  alt="imagen del personaje"/>
        <p>${personaje.name}</p>
        </div>  
        `
    })

} 

displayCard(personajes)

const btnA= document.getElementById("letraA");

btnA.addEventListener("click", () => {
    const resultsA=filterbyCharacters("A",personajes)
    console.log(resultsA)
    displayCard(resultsA)
})
