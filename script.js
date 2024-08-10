const allMovies = document.getElementById('movies-container');
const API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

//what we'll need: results.title, results.poster_path,results.overview,results.vote_average


const fetchTheMovies = async () => {
    const getMovieData = await fetch (API)
    const data = await getMovieData.json()
    const movies = data.results

    movies.forEach(movie => {
    const specificInfo = {
        image: movies.poster_path,
        title: movies.title,
        overview: movies.overview,
        rating: movies.vote_average
    }
    addMovies(specificInfo)
})

const addMovies = (moviesInfo) => {
    const {image,title,overview,rating} = moviesInfo;

    const template = `
    <div class="movie">
        <div class="image"><img src="${image}" alt="poster"></div>
        <div class="title"><h2>${title}</h2></div>
        <div class="overview"><p>${overview}</h2></div>
        <div class="rating"><p>${rating}</p></div>
    </div>
    `
    allMovies.innerHTML += template;
    }
}

fetchTheMovies();