// Manejor del DOM
import data from './data/rickandmorty/rickandmorty.js';
import { filterbyCharacters, ordenarCharacters, calcularStatus } from './data.js';

console.log(data.results)
const personajes = data.results
const contenedor = document.getElementById("contenedor");
console.log(contenedor)

const calcular = document.getElementById("calcular");


//Imprimiendo cards en la categoria personajes
const displayCard =(dataRam) => {
    contenedor.innerHTML= ""
    dataRam.forEach(personaje => {
        
        console.log(personaje.created)
        contenedor.innerHTML += `
        <div class="card">
        <img class="imagen" src="${personaje.image}"  alt="imagen del personaje"/>
        <p>${personaje.name}</p>
        <p>${personaje.species}</p>
        <p>${personaje.gender}</p>
        <p>${personaje.status}</p>
        <p>${personaje.created.slice(0,10)}</p>
        
        </div>  
        `    
    })   
}


let personajesaMostrar;
const ordenar= document.getElementById("ordenar");
ordenar.addEventListener("change", (evento)=> {
    const orderData =  ordenarCharacters(evento.target.value, personajesaMostrar,"created")
    console.log(evento.target.value, data.results)
    displayCard(orderData)
  
});


const btnA= document.getElementById("letraA");

btnA.addEventListener("click", () => {
    const resultsA=filterbyCharacters("A",personajes)
    personajesaMostrar=resultsA
    //console.log(resultsA)
    displayCard(resultsA)
    calcular.innerHTML = calcularStatus(resultsA);
    
})




const btnB= document.getElementById("letraB");

btnB.addEventListener("click", () => {
    const resultsB=filterbyCharacters("B",personajes)
    personajesaMostrar=resultsB
   // console.log(resultsB)
    displayCard(resultsB)
    calcular.innerHTML = calcularStatus(resultsB);
})



const btnC= document.getElementById("letraC");

btnC.addEventListener("click", () => {
    const resultsC=filterbyCharacters("C",personajes)
    personajesaMostrar=resultsC
    //console.log(resultsC)
    displayCard(resultsC)
    calcular.innerHTML = calcularStatus(resultsC);
})



const btnD= document.getElementById("letraD");

btnD.addEventListener("click", () => {
    const resultsD=filterbyCharacters("D",personajes)
    personajesaMostrar=resultsD
    //console.log(resultsD)
    displayCard(resultsD)
    calcular.innerHTML = calcularStatus(resultsD);
})



const btnE= document.getElementById("letraE");

btnE.addEventListener("click", () => {
    const resultsE=filterbyCharacters("E",personajes)
    personajesaMostrar=resultsE
    //console.log(resultsE)
    displayCard(resultsE)
    calcular.innerHTML = calcularStatus(resultsE);
})



const btnF= document.getElementById("letraF");

btnF.addEventListener("click", () => {
    const resultsF=filterbyCharacters("F",personajes)
    personajesaMostrar=resultsF
    //console.log(resultsF)
    displayCard(resultsF)
    calcular.innerHTML = calcularStatus(resultsF);
})



const btnG= document.getElementById("letraG");

btnG.addEventListener("click", () => {
    const resultsG=filterbyCharacters("G",personajes)
    personajesaMostrar=resultsG
    //console.log(resultsG)
    displayCard(resultsG)
    calcular.innerHTML = calcularStatus(resultsG);
})



const btnH= document.getElementById("letraH");

btnH.addEventListener("click", () => {
    const resultsH=filterbyCharacters("H",personajes)
    personajesaMostrar=resultsH
    //console.log(resultsH)
    displayCard(resultsH)
    calcular.innerHTML = calcularStatus(resultsH);
})



const btnI= document.getElementById("letraI");

btnI.addEventListener("click", () => {
    const resultsI=filterbyCharacters("I",personajes)
    personajesaMostrar=resultsI
    //console.log(resultsI)
    displayCard(resultsI)
    calcular.innerHTML = calcularStatus(resultsI);
})



const btnJ= document.getElementById("letraJ");

btnJ.addEventListener("click", () => {
    const resultsJ=filterbyCharacters("J",personajes)
    personajesaMostrar=resultsJ
    //console.log(resultsJ)
    displayCard(resultsJ)
    calcular.innerHTML = calcularStatus(resultsJ);
})



const btnK= document.getElementById("letraK");

btnK.addEventListener("click", () => {
    const resultsK=filterbyCharacters("K",personajes)
    personajesaMostrar=resultsK
    //console.log(resultsK)
    displayCard(resultsK)
    calcular.innerHTML = calcularStatus(resultsK);
})



const btnL= document.getElementById("letraL");

btnL.addEventListener("click", () => {
    const resultsL=filterbyCharacters("L",personajes)
    personajesaMostrar=resultsL
    //console.log(resultsL)
    displayCard(resultsL)
    calcular.innerHTML = calcularStatus(resultsL);
})



const btnM= document.getElementById("letraM");

btnM.addEventListener("click", () => {
    const resultsM=filterbyCharacters("M",personajes)
    personajesaMostrar=resultsM
    //console.log(resultsM)
    displayCard(resultsM)
    calcular.innerHTML = calcularStatus(resultsM);
})



const btnN= document.getElementById("letraN");

btnN.addEventListener("click", () => {
    const resultsN=filterbyCharacters("N",personajes)
    personajesaMostrar=resultsN
    //console.log(resultsN)
    displayCard(resultsN)
    calcular.innerHTML = calcularStatus(resultsN);
})



const btnO= document.getElementById("letraO");

btnO.addEventListener("click", () => {
    const resultsO=filterbyCharacters("O",personajes)
    personajesaMostrar=resultsO
    //console.log(resultsO)
    displayCard(resultsO)
    calcular.innerHTML = calcularStatus(resultsO);
})



const btnP= document.getElementById("letraP");

btnP.addEventListener("click", () => {
    const resultsP=filterbyCharacters("P",personajes)
    personajesaMostrar=resultsP
    //console.log(resultsP)
    displayCard(resultsP)
    calcular.innerHTML = calcularStatus(resultsP);
})



const btnQ= document.getElementById("letraQ");

btnQ.addEventListener("click", () => {
    const resultsQ=filterbyCharacters("Q",personajes)
    personajesaMostrar=resultsQ
    //console.log(resultsQ)
    displayCard(resultsQ)
    calcular.innerHTML = calcularStatus(resultsQ);
})



const btnR= document.getElementById("letraR");

btnR.addEventListener("click", () => {
    const resultsR=filterbyCharacters("R",personajes)
    personajesaMostrar=resultsR
    //console.log(resultsR)
    displayCard(resultsR)
    calcular.innerHTML = calcularStatus(resultsR);
})



const btnS= document.getElementById("letraS");

btnS.addEventListener("click", () => {
    const resultsS=filterbyCharacters("S",personajes)
    personajesaMostrar=resultsS
    //console.log(resultsS)
    displayCard(resultsS)
    calcular.innerHTML = calcularStatus(resultsS);
})



const btnT= document.getElementById("letraT");

btnT.addEventListener("click", () => {
    const resultsT=filterbyCharacters("T",personajes)
    personajesaMostrar=resultsT
    //console.log(resultsT)
    displayCard(resultsT)
    calcular.innerHTML = calcularStatus(resultsT);
})



const btnU= document.getElementById("letraU");

btnU.addEventListener("click", () => {
    const resultsU=filterbyCharacters("U",personajes)
    personajesaMostrar=resultsU
    //console.log(resultsU)
    displayCard(resultsU)
    calcular.innerHTML = calcularStatus(resultsU);
})



const btnV= document.getElementById("letraV");

btnV.addEventListener("click", () => {
    const resultsV=filterbyCharacters("V",personajes)
    personajesaMostrar=resultsV
    //console.log(resultsV)
    displayCard(resultsV)
    calcular.innerHTML = calcularStatus(resultsV);
})



const btnW= document.getElementById("letraW");

btnW.addEventListener("click", () => {
    const resultsW=filterbyCharacters("W",personajes)
    personajesaMostrar=resultsW
    //console.log(resultsW)
    displayCard(resultsW)
    calcular.innerHTML = calcularStatus(resultsW);
})



const btnX= document.getElementById("letraX");

btnX.addEventListener("click", () => {
    const resultsX=filterbyCharacters("X",personajes)
    personajesaMostrar=resultsX
    //console.log(resultsX)
    displayCard(resultsX)
    calcular.innerHTML = calcularStatus(resultsX);
})



const btnY= document.getElementById("letraY");

btnY.addEventListener("click", () => {
    const resultsY=filterbyCharacters("Y",personajes)
    personajesaMostrar=resultsY
    //console.log(resultsY)
    displayCard(resultsY)
    calcular.innerHTML = calcularStatus(resultsY);
})



const btnZ= document.getElementById("letraZ");

btnZ.addEventListener("click", () => {
    const resultsZ=filterbyCharacters("Z",personajes)
    personajesaMostrar=resultsZ
    //console.log(resultsZ)
    displayCard(resultsZ)
    calcular.innerHTML = calcularStatus(resultsZ);
})



