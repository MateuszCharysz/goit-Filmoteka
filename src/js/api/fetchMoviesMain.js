
const fetchMoviesMain = (pageValue) => {
     pageValue = 1;
    const data = fetch("https://api.themoviedb.org/3/trending/all/day?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd&"+`page=${pageValue}`);

    data.then(response => {
        if (!response.ok) {
            console.log('Error: Failed to fetch data from API. Status code:', response.status)
        } else {
            return response.json()
        }
        
    }).then(response => {
        const mostPopularFilms = response.results;
        console.log(mostPopularFilms);

        mostPopularFilms.map((film) => {
            
        let mainContainer = document.querySelector("#main");
        let markup = `<p>TITLE:${film.title || film.name}</p>`;
            mainContainer.innerHTML += markup;
            
        })
        return mostPopularFilms;
    })

}


// fetchMoviesMain().then(films => {
//     console.log(films)
//     films.map(film => {
       
//     })
// })




// const fetchMoviesMain = async () => {
//     try {
//     const data = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd");

//     const response = await data.json();
//     const mostPopularFilms = response.results;
    
//         return mostPopularFilms
//     } catch (error) {
//         console.log(error.message)
//     }

// }




 export {fetchMoviesMain }