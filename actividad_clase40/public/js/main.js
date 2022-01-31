window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  const favorites = JSON.parse(localStorage.getItem('favorites')) || []

  // Aqui debemos agregar nuestro fetch
  fetch('http://localhost:3031/api/movies')
    .then(response => response.json())
    .then(({data : movies}) => {
      movies.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h1 = document.createElement("h1");
        h1.textContent = movie.title;

        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);

        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre.name}`;
          card.appendChild(genero);
        }

        card.appendChild(duracion);

        const star = document.createElement("span");
        star.innerHTML = '⭐️'
        card.appendChild(star)

        star.addEventListener('click', (e) => {
          e.stopPropagation()

          favorites.push(movie)
          localStorage.setItem('favorites', JSON.stringify(favorites))
        })

        card.addEventListener('click', () => {
          location.href = location.href.replace('home.html', `formulario.html?movie_id=${movie.id}`)
        })
      });
    })    
}
