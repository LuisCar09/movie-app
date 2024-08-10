const allMovies = document.getElementById('movies-container');
const API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const imageBase = 'https://image.tmdb.org/t/p/w1280'
//what we'll need: results.title, results.poster_path,results.overview,results.vote_average



const fetchTheMovies = async () => {
    try {
        const getMovieData = await fetch(API)
        const data = await getMovieData.json()
        
        const movies =  data.results.map(movie => {
            const specificInfo = {
                image: `https:image.tmdb.org/t/p/w1280${movie.poster_path}`,
                title: movie.title,
                overview: movie.overview,
                rating: movie.vote_average
            }
            return specificInfo
        })
        
    
        return  movies
     
    } catch (error) {
     console.log(`Error fetching at ${error.message}`)
    }
 }

const addMovies = async () => {
    const movies = await fetchTheMovies()
    
    
    movies.forEach(movie => {
        const {image,title,overview,rating} = movie
        const template = `
        <div id = ${crypto.randomUUID()} class="movie">
            <div class="image-container"><img src="${image}" alt="poster"></div>
            <article class='info'>
                <div class="title"><h2>${title}</h2></div>
                <div class="rating"><p>${rating}</p></div>
            </article>
            <div class="overview">
            <h2>Overview</h2>
            ${overview}
            </div>
            
        </div>
    `
    allMovies.innerHTML += template;
    })
    
    
    
   // addEventListener()
}
// const addEventListener = () =>{
//     const allMovieContainers = document.querySelectorAll(".movie")
    
//     allMovieContainers.forEach(movie => movie.addEventListener('mouseenter', (e)=>{
        
//         const id = e.target.id

//         addOverViewClass(id);
        
//     }))

//     allMovieContainers.forEach(movie => movie.addEventListener('mouseleave', (e)=>{
        
//         const id = e.target.id

//         addOverViewClass(id);
        
        
//     }))

// }
// const addOverViewClass = (id) =>{
//     const divContainer = document.getElementById(`${id}`)
//     const overview = divContainer.querySelector('.overview');
//     console.log(overview.style.height);
    
//     overview.classList.toggle('showOverview')
  
// }


addMovies()