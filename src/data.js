// estas funciones son de ejemplo
export default class API {
  getCharacter(id) {
    fetch("https://rickandmortyapi.com/api/character/2/${id}")
    .then ((response) =>response.json())
    .then((data) => console.log(data))
  }
}

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
