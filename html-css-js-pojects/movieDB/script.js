const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c989e7ac44ef8190145c58704f820f8c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const MOVIE_SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=c989e7ac44ef8190145c58704f820f8c&query="';

const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
  console.log(data.results);
}
function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <img
      src="${IMG_PATH + poster_path}"
      alt=""
    />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      <div class="overview">
        <h3>Overview</h3>
        <p>
         ${overview}
        </p>
      </div>
    </div>
    `;
    main.appendChild(movieEl);
  });
}
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(MOVIE_SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
