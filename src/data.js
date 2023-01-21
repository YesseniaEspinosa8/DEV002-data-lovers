
//Personajes
export const filterbyCharacters = (string, data) => {
  const results = data.filter(p => p.name [0] === string);
  return results;
}


