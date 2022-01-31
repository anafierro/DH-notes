window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
    let errores = {};
    let campoTitulo = document.querySelector('#title');
    let campoRating = document.querySelector('#rating');
    let campoAwards = document.querySelector('#awards');
    let campoReleaseDate = document.querySelector('#release_date');
    let campoLength = document.querySelector('#length');
    let campoGenre = document.querySelector('#genre_id');

    campoTitulo.focus();

    function validateIsRequired(input) {
        const inputName = input.name;

        if(input.value === "") {
            input.classList.add('is-invalid');
            console.log('value is required');
            errores[inputName] = `${inputName} is required`
        } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            console.log('value is valid');
            delete errores[inputName]
        }
    }

    function validateIsInteger(input) {
        const inputName = input.name;
        
        if(!Number.isInteger(parseInt(input.value, 10))) {
            input.classList.add('is-invalid');
            console.log('is not a number');
            errores[inputName] = `${inputName} is not a number`
        } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            console.log('is a number');
            delete errores[inputName]
        }
    }

    function validateIsIntegerInRange(input, min, max) {
        const value = parseInt(input.value, 10);
        const inputName = input.name;

        if(value >= min && value <= max) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            console.log('is in range');
            delete errores[inputName]
            
        } else {
            input.classList.add('is-invalid');
            console.log('is not in range');
            errores[inputName] = `${inputName} must be between ${min} and ${max}`
        }
    }

    function validateTitle() {
        validateIsRequired(campoTitulo);
    }

    function validateRating() {
        validateIsRequired(campoRating);
        validateIsInteger(campoRating);
        validateIsIntegerInRange(campoRating, 0, 10);
    }

    function validateAwards() {
        validateIsRequired(campoAwards);
        validateIsInteger(campoAwards);
        validateIsIntegerInRange(campoAwards, 0, 10);
    }

    function validateForm() {
        validateTitle()
        validateRating()
        validateAwards()
    }

    campoTitulo.addEventListener("blur", function(){
        validateTitle()
    })
            
    campoRating.addEventListener("blur", function(){
        validateRating()
    })
    
    campoAwards.addEventListener("blur", function(){
        validateAwards()
    })
    
    campoReleaseDate.addEventListener("blur", function(){
        console.log(campoReleaseDate.value);
        if(campoReleaseDate.value == "") {
            campoReleaseDate.classList.add('is-invalid');
            errores.push("El campo de fecha de estreno tiene que estar completo")
        } else {
            campoReleaseDate.classList.add('is-valid');
        }
    })
    
    campoLength.addEventListener("blur", function(){
        if(campoLength.value == "") {
            campoLength.classList.add('is-invalid');
            errores.push("El campo de duración tiene que estar completo")
        } else {
            campoLength.classList.add('is-valid');
        }
    })
    
    campoGenre.addEventListener("blur", function(){
        if(campoGenre.value == "") {
            campoGenre.classList.add('is-invalid');
            errores.push("Se debe de seleccionar un género")
        } else {
            campoGenre.classList.add('is-valid');
        }
    })

    formulario.addEventListener("submit", function(e) {

        validateForm()
        
        if(Object.keys(errores).length) {
            e.preventDefault();
            let ulErrores = document.querySelector("ul.errores");
            ulErrores.classList.add('alert-warning');
            ulErrores.innerHTML += `<pre><code>${JSON.stringify(errors, null, 4)}</pre></code>`
        } else {
            console.log('Todo bien')
        }
    })

}