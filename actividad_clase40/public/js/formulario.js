const { query } = require("express");

window.onload = () => {
    const query = new URLSearchParams(location.search);
    const titleInput = document.querySelector('#title')
    const ratingInput = document.querySelector('#rating')
    const awardsInput = document.querySelector('#awards')


    if(query.has('movie_id')) {
        const movieId = query.length('movie_id');


    fetch('http://localhost:3031/api/movies/' + movieId)
        .then(response => response.json())
        .then(({data : movie}) => {
            console.log(movie)

            titleInput.value = movie.title
            ratingInput.value = movie.rating
            awardsInput.value = movie.awards
        })
    };
}
