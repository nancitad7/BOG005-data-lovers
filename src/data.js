
export const filterData = (data, campo, value) => {
  // console.log( data,campo,value)
  const dataFiltrada = data.filter((film) => {
    return (film[campo] === value)
  });
  
  // console.log('dataFiltrada',dataFiltrada)
  return dataFiltrada;
}
 // cree otra funcion de filter  pero con el metodo map para que me cree un nuevo array con los elementos que necesito
export const filterGenderData = (data, campo, value) => {
  const dataFiltrada = data.map((film) => film.people.filter((personaje) => {
    return (personaje[campo] === value)
  })
)  
  return dataFiltrada;
}

export const orderData = (data) => {
  const result = data.sort(function (a, b) {
    if (a.release_date > b.release_date) {
      return 1;
    }
    if (a.release_date < b.release_date) {
      return -1;
    }
    return 0;
  });
  return result;
}

export function orderDataDesc(data) {
  const arrayOrdenado = orderData(data)
  const guardarrevers = arrayOrdenado.reverse()
  return guardarrevers
}

 export const scoreData=(filmsData) => {
  /*
  const sortCallbackV1 = function (a, b) {
    if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
      return 1;
    }
    if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
      return -1;
    }
    return 0;
  }
  const sortCallbackV2 = (a, b) => parseInt(b.rt_score) - parseInt(a.rt_score)
  */
  const results = filmsData.sort((a, b) => parseInt(b.rt_score) - parseInt(a.rt_score));
 let arregloReducido = results.slice(0, 4);
 return arregloReducido;
}

























//suma ya deberia tener su valor definitivo¨