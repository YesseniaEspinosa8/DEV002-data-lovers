import data from './data/rickandmorty/rickandmorty.js';
import { filterbyCharacters } from './data.js';
console.log(data.results)
const personajes = data.results
const contenedor = document.getElementById("contenedor");
console.log(contenedor)


const displayCard =(dataRam) => {
    contenedor.innerHTML= ""
    dataRam.forEach(personaje => {
        console.log(personaje.name)
        console.log(personaje.image)
        console.log(personaje.species)
        console.log(personaje.gender)
        console.log(personaje.status)
        contenedor.innerHTML += `
        <div class="card">
        <img class="imagen" src="${personaje.image}"  alt="imagen del personaje"/>
        <p>${personaje.name}</p>
        <p>${personaje.species}</p>
        <p>${personaje.gender}</p>
        <p>${personaje.status}</p>
        
        </div>  
        `    
    })

} 



const btnA= document.getElementById("letraA");

btnA.addEventListener("click", () => {
    const resultsA=filterbyCharacters("A",personajes)
    //console.log(resultsA)
    displayCard(resultsA)
})



const btnB= document.getElementById("letraB");

btnB.addEventListener("click", () => {
    const resultsB=filterbyCharacters("B",personajes)
   // console.log(resultsB)
    displayCard(resultsB)
})



const btnC= document.getElementById("letraC");

btnC.addEventListener("click", () => {
    const resultsC=filterbyCharacters("C",personajes)
    //console.log(resultsC)
    displayCard(resultsC)
})



const btnD= document.getElementById("letraD");

btnD.addEventListener("click", () => {
    const resultsD=filterbyCharacters("D",personajes)
    //console.log(resultsD)
    displayCard(resultsD)
})



const btnE= document.getElementById("letraE");

btnE.addEventListener("click", () => {
    const resultsE=filterbyCharacters("E",personajes)
    //console.log(resultsE)
    displayCard(resultsE)
})



const btnF= document.getElementById("letraF");

btnF.addEventListener("click", () => {
    const resultsF=filterbyCharacters("F",personajes)
    //console.log(resultsF)
    displayCard(resultsF)
})



const btnG= document.getElementById("letraG");

btnG.addEventListener("click", () => {
    const resultsG=filterbyCharacters("G",personajes)
    //console.log(resultsG)
    displayCard(resultsG)
})



const btnH= document.getElementById("letraH");

btnH.addEventListener("click", () => {
    const resultsH=filterbyCharacters("H",personajes)
    //console.log(resultsH)
    displayCard(resultsH)
})



const btnI= document.getElementById("letraI");

btnI.addEventListener("click", () => {
    const resultsI=filterbyCharacters("I",personajes)
    //console.log(resultsI)
    displayCard(resultsI)
})



const btnJ= document.getElementById("letraJ");

btnJ.addEventListener("click", () => {
    const resultsJ=filterbyCharacters("J",personajes)
    //console.log(resultsJ)
    displayCard(resultsJ)
})



const btnK= document.getElementById("letraK");

btnK.addEventListener("click", () => {
    const resultsK=filterbyCharacters("K",personajes)
    //console.log(resultsK)
    displayCard(resultsK)
})



const btnL= document.getElementById("letraL");

btnL.addEventListener("click", () => {
    const resultsL=filterbyCharacters("L",personajes)
    //console.log(resultsL)
    displayCard(resultsL)
})



const btnM= document.getElementById("letraM");

btnM.addEventListener("click", () => {
    const resultsM=filterbyCharacters("M",personajes)
    //console.log(resultsM)
    displayCard(resultsM)
})



const btnN= document.getElementById("letraN");

btnN.addEventListener("click", () => {
    const resultsN=filterbyCharacters("N",personajes)
    //console.log(resultsN)
    displayCard(resultsN)
})



const btnO= document.getElementById("letraO");

btnO.addEventListener("click", () => {
    const resultsO=filterbyCharacters("O",personajes)
    //console.log(resultsO)
    displayCard(resultsO)
})



const btnP= document.getElementById("letraP");

btnP.addEventListener("click", () => {
    const resultsP=filterbyCharacters("P",personajes)
    //console.log(resultsP)
    displayCard(resultsP)
})



const btnQ= document.getElementById("letraQ");

btnQ.addEventListener("click", () => {
    const resultsQ=filterbyCharacters("Q",personajes)
    //console.log(resultsQ)
    displayCard(resultsQ)
})



const btnR= document.getElementById("letraR");

btnR.addEventListener("click", () => {
    const resultsR=filterbyCharacters("R",personajes)
    //console.log(resultsR)
    displayCard(resultsR)
})



const btnS= document.getElementById("letraS");

btnS.addEventListener("click", () => {
    const resultsS=filterbyCharacters("S",personajes)
    //console.log(resultsS)
    displayCard(resultsS)
})



const btnT= document.getElementById("letraT");

btnT.addEventListener("click", () => {
    const resultsT=filterbyCharacters("T",personajes)
    //console.log(resultsT)
    displayCard(resultsT)
})



const btnU= document.getElementById("letraU");

btnU.addEventListener("click", () => {
    const resultsU=filterbyCharacters("U",personajes)
    //console.log(resultsU)
    displayCard(resultsU)
})



const btnV= document.getElementById("letraV");

btnV.addEventListener("click", () => {
    const resultsV=filterbyCharacters("V",personajes)
    //console.log(resultsV)
    displayCard(resultsV)
})



const btnW= document.getElementById("letraW");

btnW.addEventListener("click", () => {
    const resultsW=filterbyCharacters("W",personajes)
    //console.log(resultsW)
    displayCard(resultsW)
})



const btnX= document.getElementById("letraX");

btnX.addEventListener("click", () => {
    const resultsX=filterbyCharacters("X",personajes)
    //console.log(resultsX)
    displayCard(resultsX)
})



const btnY= document.getElementById("letraY");

btnY.addEventListener("click", () => {
    const resultsY=filterbyCharacters("Y",personajes)
    //console.log(resultsY)
    displayCard(resultsY)
})



const btnZ= document.getElementById("letraZ");

btnZ.addEventListener("click", () => {
    const resultsZ=filterbyCharacters("Z",personajes)
    //console.log(resultsZ)
    displayCard(resultsZ)
})
