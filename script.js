const allMovies = document.getElementById('movies-container');
const API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

//what we'll need: results.title, results.poster_path,results.overview,results.vote_average


const fetchTheMovies = async () => {
    const getMovieData = await fetch (`${API}`)
    const data = await getMovieData.json()

    const specificInfo = {
        image: results.poster_path,
        title: results.title,
        overview: results.overview,
        rating: results.vote_average
    }
}