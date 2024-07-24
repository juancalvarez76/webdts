const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "live_LhtHyP2RVbiyr58q2eSaZyObsWq0Van0AtgwhtVf1KEdJqZKVmJL1cbnUvS0za1x"
});

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has0_breeds=true&order=RANDOM&page=0&limit=12", requestOptions)
  .then(response => response.json())
  .then((result) => {
                console.log(result);
                     result.forEach((cat) => {
                        document.querySelector(".contenedor-cat").innerHTML += `<div class="iconocat"> 
                                <img src="${cat.url}" alt="Imagen de gato" width="80%" height="80%" ></div>` 
   })
});
