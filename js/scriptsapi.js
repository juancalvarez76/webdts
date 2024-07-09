/* FETCH INICIAL */
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((respuesta) => respuesta.json())
//   .then((datos) => {
//       console.log(datos);
//       let titulo = document.querySelector(".titulo").textContent = datos[1].title;
//       let contenido = document.querySelector(".contenido").textContent = datos[1].body;

// });


fetch('https://jsonplaceholder.typicode.com/posts')
  .then((respuesta) => respuesta.json())
  .then((datos) => {
      console.log(datos);
      datos.forEach((post) => {
        document.querySelector(".contenedor-padre").innerHTML += `<div class="tarjeta">
                                  <div class="titulo">${post.title}</div>
                                  <p class="contenido">${post.body}</p></div>` 
      })
});


// let titulo = document.querySelector(".titulo").textContent = "Titulo desde JS";
// let contenido = document.querySelector(".contenido").textContent = "Contenido desde JS";
//   ` ` ALTGR + } 
