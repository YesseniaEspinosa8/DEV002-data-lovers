import { filterbyCharacters, ordenarCharacters, calcularStatus } from '../src/data.js';
const data = {
  "results": [
    {

      "name": "Rick Sanchez",
      "status": "Alive",
      "created": "2017-11-04T18:48:46.250Z"
    },
    {
      "name": "Scroopy Noopers",
      "status": "Alive",
      "created": "2018-01-05T14:20:41.693Z"
    },
    {
      "name": "Morty Smith",
      "status": "Alive",
      "created": "2017-11-04T18:50:21.651Z"
    }
  ]

}

const personajeUno = [{"name": "Morty Smith", "status":"Alive", "created": "2017-11-04T18:50:21.651Z"}]
const fechaDesc =  [
  {
    "name": "Scroopy Noopers",
    "status": "Alive",
    "created": "2018-01-05T14:20:41.693Z"
  },
  {
    "name": "Morty Smith",
    "status": "Alive",
    "created": "2017-11-04T18:50:21.651Z"
  },
  {

    "name": "Rick Sanchez",
    "status": "Alive",
    "created": "2017-11-04T18:48:46.250Z"
  }
]


describe('Prueba para la funcion de Filtrar personajes', () => {
  it('Debe filtrar a los personajes por letra', () => {
    const resultado = filterbyCharacters(data.results, 'M') // como comparar con posicion [0]
    expect(resultado).toEqual(personajeUno); //aca comparo el resultado con la constante que contiene el personaje filtrado
  });

});



describe('Prueba para ordenar de forma ascendente y descendente en la fecha de creacion del personaje', () => {
  it('is a function', () => {
    const resultado = ordenarCharacters(data.results)
    expect(resultado).toEqual(fechaDesc);
  });

 
});


describe('Calcular status de personajes', () => {
  it('is a function', () => {
    const resultado = calcularStatus(data.results, 'Morty Smith')
    expect(resultado).toEqual(Alive);
  });

 
});
