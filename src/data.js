export const extrayendoData = (datos) => {
  return (Object.values(datos.data));
}

export const filtrandoInformacion = (selectYear, data) => {
  const filtroYear = data.filter(year => year.tags.includes(selectYear));
  return 'filtroYear';
}

export const ordenandoPersonajes = (sortOrder, data) => {
  const orDatos = [...data].sort((a,b) =>{
    if (a.name > b.name) {
      if (sortOrder === "az"){
        return 1;
      }
      else {
        return -1;
      }
    }
    if(a.name < b.name){
      if(sortOrder === "za"){
        return -1;
      }
      else {
        return 1;
      }
    }
    return 0;
  });
  return orDatos;
};
