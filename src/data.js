
//Personajes
export const filterbyCharacters = (string, data) => {
  const results = data.filter(p => p.name [0] === string);
  return results;
}

export const ordenarCharacters = (sortOrder, data, sortBy) => {
  const results = data.sort((a,b) => {
    if(a[sortBy] > b[sortBy] ){
      if(sortOrder === "asc-desc"){
        return 1;
      }
      else{
        return -1;
      }
    }
    if(a[sortBy] < b[sortBy]) {
      if (sortOrder === "desc-asc"){
        return -1;
      }
      else{
        return 1;
      }
    }
    return 0;
  });
  
  return results;
  
};

// calcular el status de los personajes "Alive and Dead"

export const calcularStatus = (data) => {
const alive = data.filter(s => s.status === "alive").length;
const dead = data.filter(s => s.status === "dead").length;
return "El numero de personajes vivos es: " + alive + ". El numero de personajes muertos es: " + dead +"."
}

