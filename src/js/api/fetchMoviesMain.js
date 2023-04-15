const fetchMoviesMain = async () => {
    try {
    const data = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd");

    const response = await data.json();
    const mostPopularFilms = response.results;
    
        return mostPopularFilms
    } catch (error) {
        console.log(error.message)
    }

}


fetchMoviesMain().then(films => {
    console.log(films)
    films.map(film => {
        let mainContainer = document.querySelector("#main");
        let markup = `<p>TITLE:${film.title || film.name}</p>`;
        mainContainer.innerHTML += markup;
    })
})

export {fetchMoviesMain }