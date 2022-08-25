let elList = $(".js-movies-list");
let elMoviesTemplate = $("#template-element").content;

let elMoviesArr = movies.map(movie => {
  return{
    title: movie.Title,
    fulltitle:movie.fulltitle,
    language:movie.language,
    reting: movie.imdb_rating,
    img: `http://i3.ytimg.com/vi/${movie.ytid}/hqdefault.jpg`,
    categories: movie.Categories,
    summary: movie.summary,
    runtime: movie.runtime,


  }
})


let createMovieElement = (movie) => {
  let elNewElement = elMoviesTemplate.cloneNode(true);

  elNewElement.querySelector(".card-img").src = movie.img;
  elNewElement.querySelector(".card-img").alt = movie.title;

  elNewElement.querySelector(".card-title").textContent = movie.fulltitle;
  elNewElement.querySelector(".card-lantext").textContent = `Language: ${movie.language}`;
  elNewElement.querySelector(".card-text").textContent = `Reting: ${movie.reting}`;
  elNewElement.querySelector(".card-subtext").textContent = `Categories: ${movie.categories}`;
  elNewElement.querySelector(".card-runtext").textContent = `Runtime: ${movie.runtime}`;
  elNewElement.querySelector(".card-infotext").textContent = movie.summary.split(" ").slice(0 , 15).join(" ");


  return elNewElement;  
}

let renderMovies = (movies) => {
  elList.innerHTML = "";

  let elMoviesWrapperFragment = document.createDocumentFragment();

  movies.forEach(movie => {
    elMoviesWrapperFragment.appendChild(createMovieElement(movie));
  });
  elList.appendChild(elMoviesWrapperFragment);
}

renderMovies(elMoviesArr);









// pokemons.forEach(pokemon => {
//   let elNewItem = createElement("li", "card mb-3 text-center pb-2 card-item");

//   let elNewImg = createElement("img", "card-img-top card-img");
//   elNewImg.src = pokemon.img;
//   elNewImg.alt = pokemon.name;
//   elNewImg.width = 250;
//   elNewImg.height = 200;

//   let elNewTitle = createElement("h5", "card-title", pokemon.name);

//   let elNewText = createElement("p", "card-text", pokemon.weaknesses.join(", "));

//   elNewItem.append(elNewImg, elNewTitle, elNewText);

//   elList.appendChild(elNewItem);
// });