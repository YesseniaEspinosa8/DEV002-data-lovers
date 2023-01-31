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



describe('Prueba para la funcion de Filtrar personajes', () => {
  it('Debe filtrar a los personajes por letra', () => {
    const resultado = filterbyCharacters('M', data.results ) // como comparar con posicion [0]
    expect(resultado).toEqual([{"name": "Morty Smith", "status":"Alive", "created": "2017-11-04T18:50:21.651Z"}]); //aca comparo el resultado con la constante que contiene el personaje filtrado
  });

});



describe('Prueba para ordenar de forma ascendente y descendente en la fecha de creacion del personaje', () => {
  it('is a function', () => {
    const resultado = ordenarCharacters("desc-asc",data.results,"created")
    console.log(resultado)
    expect(resultado).toEqual([
      {
        "created": "2018-01-05T14:20:41.693Z",
        "name": "Scroopy Noopers",
        "status": "Alive"
        
      },
      {
        "created": "2017-11-04T18:50:21.651Z",
        "name": "Morty Smith",
        "status": "Alive"
      },
      {
        
        "created": "2017-11-04T18:48:46.250Z",
        "name": "Rick Sanchez",
        "status": "Alive"
      }
    ]);
  });

 
});


describe('Calcular status de personajes', () => {
  it('is a function', () => {
    const resultado = calcularStatus(data.results, 'Morty Smith')
    expect(resultado).toBe("El numero de personajes vivos es: 3. El numero de personajes muertos es: 0. El numero de personajes con status indefinido es: 0.");
  });

 
});
