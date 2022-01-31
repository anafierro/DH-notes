window.addEventListener("load", function(){
    let body = document.querySelector('body');
    let titulo = document.querySelector('.moviesListTitulo');

    let modo = confirm("¿Desea modo oscuro?");
    console.log(modo);

    if(modo) {
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }

    titulo.innerHTML += "LISTADO DE PELICULAS";
    titulo.style.color = 'white';
    titulo.style.backgroundColor = 'teal';
    titulo.style.padding = '20px';

})