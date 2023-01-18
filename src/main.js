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

displayCard(personajes)

const btnB= document.getElementById("letraB");

btnB.addEventListener("click", () => {
    const resultsB=filterbyCharacters("B",personajes)
    console.log(resultsB)
    displayCard(resultsB)
})

displayCard(personajes)

const btnC= document.getElementById("letraC");

btnC.addEventListener("click", () => {
    const resultsC=filterbyCharacters("C",personajes)
    console.log(resultsC)
    displayCard(resultsC)
})

displayCard(personajes)

const btnD= document.getElementById("letraD");

btnD.addEventListener("click", () => {
    const resultsB=filterbyCharacters("D",personajes)
    console.log(resultsD)
    displayCard(resultsD)
})

displayCard(personajes)

const btnE= document.getElementById("letraE");

btnE.addEventListener("click", () => {
    const resultsE=filterbyCharacters("E",personajes)
    console.log(resultsE)
    displayCard(resultsE)
})

displayCard(personajes)

const btnF= document.getElementById("letraF");

btnF.addEventListener("click", () => {
    const resultsF=filterbyCharacters("F",personajes)
    console.log(resultsF)
    displayCard(resultsF)
})

displayCard(personajes)

const btnG= document.getElementById("letraG");

btnG.addEventListener("click", () => {
    const resultsG=filterbyCharacters("G",personajes)
    console.log(resultsG)
    displayCard(resultsG)
})

displayCard(personajes)

const btnH= document.getElementById("letraH");

btnH.addEventListener("click", () => {
    const resultsH=filterbyCharacters("H",personajes)
    console.log(resultsH)
    displayCard(resultsH)
})

displayCard(personajes)

const btnI= document.getElementById("letraI");

btnI.addEventListener("click", () => {
    const resultsI=filterbyCharacters("I",personajes)
    console.log(resultsI)
    displayCard(resultsI)
})

displayCard(personajes)

const btnJ= document.getElementById("letraJ");

btnJ.addEventListener("click", () => {
    const resultsJ=filterbyCharacters("J",personajes)
    console.log(resultsJ)
    displayCard(resultsJ)
})

displayCard(personajes)

const btnK= document.getElementById("letraK");

btnK.addEventListener("click", () => {
    const resultsK=filterbyCharacters("K",personajes)
    console.log(resultsK)
    displayCard(resultsK)
})

displayCard(personajes)

const btnL= document.getElementById("letraL");

btnL.addEventListener("click", () => {
    const resultsL=filterbyCharacters("letraL",personajes)
    console.log(resultsL)
    displayCard(resultsL)
})

displayCard(personajes)

const btnM= document.getElementById("letraM");

btnM.addEventListener("click", () => {
    const resultsM=filterbyCharacters("M",personajes)
    console.log(resultsM)
    displayCard(resultsM)
})

displayCard(personajes)

const btnN= document.getElementById("letraN");

btnN.addEventListener("click", () => {
    const resultsB=filterbyCharacters("N",personajes)
    console.log(resultsN)
    displayCard(resultsN)
})

displayCard(personajes)

const btnO= document.getElementById("letraO");

btnO.addEventListener("click", () => {
    const resultsO=filterbyCharacters("O",personajes)
    console.log(resultsO)
    displayCard(resultsO)
})

displayCard(personajes)

const btnP= document.getElementById("letraP");

btnP.addEventListener("click", () => {
    const resultsP=filterbyCharacters("P",personajes)
    console.log(resultsP)
    displayCard(resultsP)
})

displayCard(personajes)

const btnQ= document.getElementById("letraQ");

btnQ.addEventListener("click", () => {
    const resultsQ=filterbyCharacters("Q",personajes)
    console.log(resultsQ)
    displayCard(resultsQ)
})

displayCard(personajes)

const btnR= document.getElementById("letraR");

btnR.addEventListener("click", () => {
    const resultsR=filterbyCharacters("R",personajes)
    console.log(resultsR)
    displayCard(resultsR)
})

displayCard(personajes)

const btnS= document.getElementById("letraS");

btnS.addEventListener("click", () => {
    const resultsS=filterbyCharacters("S",personajes)
    console.log(resultsS)
    displayCard(resultsS)
})

displayCard(personajes)

const btnT= document.getElementById("letraT");

btnT.addEventListener("click", () => {
    const resultsT=filterbyCharacters("T",personajes)
    console.log(resultsT)
    displayCard(resultsT)
})

displayCard(personajes)

const btnU= document.getElementById("letraU");

btnU.addEventListener("click", () => {
    const resultsU=filterbyCharacters("U",personajes)
    console.log(resultsU)
    displayCard(resultsU)
})

displayCard(personajes)

const btnV= document.getElementById("letraV");

btnV.addEventListener("click", () => {
    const resultsV=filterbyCharacters("V",personajes)
    console.log(resultsV)
    displayCard(resultsV)
})

displayCard(personajes)

const btnW= document.getElementById("letraW");

btnW.addEventListener("click", () => {
    const resultsW=filterbyCharacters("W",personajes)
    console.log(resultsW)
    displayCard(resultsW)
})

displayCard(personajes)

const btnX= document.getElementById("letraX");

btnX.addEventListener("click", () => {
    const resultsX=filterbyCharacters("X",personajes)
    console.log(resultsX)
    displayCard(resultsX)
})

displayCard(personajes)

const btnY= document.getElementById("letraY");

btnY.addEventListener("click", () => {
    const resultsY=filterbyCharacters("Y",personajes)
    console.log(resultsY)
    displayCard(resultsY)
})

displayCard(personajes)

const btnZ= document.getElementById("letraZ");

btnZ.addEventListener("click", () => {
    const resultsZ=filterbyCharacters("Z",personajes)
    console.log(resultsZ)
    displayCard(resultsZ)
})
