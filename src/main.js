

import data from './data/ghibli/ghibli.js';
import { filterData, filterGenderData, orderData, orderDataDesc, scoreData } from './data.js';


console.log(data.films);
let mainRoot = document.getElementById("root")
const imgDefault = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZYHaNxyZOOv7uziEDnMjxTsPmwzED3HBIQ&usqp=CAUnpms"

function pintarData(data) {
  //limpia el contenedor
  mainRoot.innerHTML = ""
  data.map(function (film) {
    mainRoot.innerHTML += `<div class="card-movie">
    <h3>${film.title}</h3>
    <img src="${film.title == "The Secret World of Arrietty" ? imgDefault : film.poster}" alt="" srcset="">
    <p>${film.director}</p>
    <p> año${film.release_date}</p>
    <p> score ${film.rt_score}</p>
  </div>`
  })
}
pintarData(data.films)
//funcion filtrar
const selectDirector = document.getElementById("selectDirector");
selectDirector.addEventListener("change", (event) => {
  if (event.target.value == 'Elija') {
    pintarData(data.films)
    return
  }
  const arregloFiltradoDirector = filterData(data.films, "director", event.target.value)// invocacion = esperamos el valor de retorno [10 cosas]
  pintarData(arregloFiltradoDirector)
})
 //esta  funcion es la de escribir el score
const score = document.getElementById("score");
score.addEventListener("keyup", (event) => {
  console.log(event)
  console.log(event.target)
  const loEscrito = filterData(data.films, "rt_score", event.target.value)
  pintarData(loEscrito)
})

//esta funcion es de filtrado nueva 
const selectYears = document.getElementById("filterData");
selectYears.addEventListener("change", (event) => {
  if (event.target.value == 'Elija') {
    pintarData(data.films)
    return
  }
  const arregloFiltradoYear = filterData(data.films, "release_date", event.target.value)// invocacion = esperamos el valor de retorno [10 cosas]
  pintarData(arregloFiltradoYear)
})
//funcion ordenar
const release_Date = document.getElementById("release_Date");
release_Date.addEventListener("change", (event) => {
  if (event.target.value == 'Elija') {
    pintarData(data.films)
    return
  }

  const opcionElejida = document.getElementById("release_Date").value
  if (opcionElejida == "Año_Ascendente") {
    const ordenFechAño = orderData(data.films)
    pintarData(ordenFechAño)
  } else {
    const ordenFechAño = orderDataDesc(data.films)
    pintarData(ordenFechAño)
  }
  console.log(opcionElejida)

})
//funcion calcular
const botonCalcular = document.getElementById("calcular")
botonCalcular.addEventListener("click", () => {
  const dataReducida = scoreData(data.films)
  pintarData(dataReducida)
})

const botonPersonajes = document.getElementById("personajes");
botonPersonajes.addEventListener("click", (event) => {
  mainRoot.innerHTML = ""
  const fitroPersonajes = document.getElementById("filtro_Personajes");
  fitroPersonajes.style.display = "flex"

  const fitroPeliculas = document.getElementById("Filtro_Peliculas");
  fitroPeliculas.style.display = "none"

})

//aca inicia la pagina nueva
const botonPeliculas = document.getElementById("peliculas");
botonPeliculas.addEventListener("click", (event) => {
  const fitroPersonajes = document.getElementById("filtro_Personajes");
  fitroPersonajes.style.display = "none"
  pintarData(data.films)
  const fitroPeliculas = document.getElementById("Filtro_Peliculas");
  fitroPeliculas.style.display = "block"
})


//aca creo un select con los titulos de las peliculas
const persona = document.getElementById("personas");
data.films.forEach(film => {
  persona.insertAdjacentHTML("afterbegin", ` <option value="${film.title}">${film.title} </option>`);
});


//aca traigo la imagen de los personajes, el genero y el nombre
const contenedorPersonajes = document.getElementById("contenedor_Personajes");
data.films.forEach(film => {
  contenedorPersonajes.insertAdjacentHTML("beforeend", ` <div class="card-movie"> <h3>${film.title}</h3> 
  <img class="prueba" src="${film.people[0].img}"> <h3>${film.people[0].name}</h3> <h3> ${film.people[0].gender} </h3> </div>`);
});
// esta funcion pinta los personajes por genero
const printGeneros = (personajes) => {
  contenedorPersonajes.innerHTML = '';
  personajes.forEach(personaje => {
    // console.log(personaje[0].img == "404", personaje[0].name)
    contenedorPersonajes.insertAdjacentHTML("beforeend", ` <div class="card-movie">
    <img class="prueba" src="${personaje[0].img}" />   
    <h3>${personaje[0].name}</h3>
    <h3>${personaje[0].gender }</h3>
    </div>`);
  });
}
//esta funcion pinta los personajes de las peliculas
const printPersonaje = (personajes) => {
  contenedorPersonajes.innerHTML = '';
  personajes.forEach(personaje => {
    contenedorPersonajes.insertAdjacentHTML("beforeend", ` <div class="card-movie">
    <img class="prueba" src="${personaje.img}"> ${personaje.name}  ${personaje.gender}`);
  });
}

//aca imprime personajes de la peliculas
const selectPeople = document.getElementById("personas");
selectPeople.addEventListener("change", (event) => {
  console.log(event.target.value)
  if (event.target.value == 'film.title') {
    printPersonaje(data.films);
    return
  }
  const arregloFiltradoPeople = filterData(data.films, "title", event.target.value);
  printPersonaje(arregloFiltradoPeople[0].people)
});

// esta funcion es la de el select del genero 
const generos = document.getElementById("generos");
generos.addEventListener("change", (event) => {
  if (event.target.value == "seleccione") {
    printGeneros(data.films);
    return
  }
  const genero = filterGenderData(data.films, "gender", event.target.value)
  printGeneros(genero)
});


//los botones de estos select estan en la parte final de la pagina personajes
