
// Codigo por IA para tener los gifts en la pagina
const obtenerGifs = async () => {
    // Contenedor principal donde van los GIFs
    const gifsContainer = document.getElementById("gifs");

    // Tomamos el primer GIF como plantilla
    const gifTemplate = document.getElementById("gif");

    // Llamada a la API de Giphy (elegi batman como tema)
    const request = await fetch("https://api.giphy.com/v1/gifs/search?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=Batman&limit=4");
    const respuesta = await request.json();

    // Iteramos los resultados (por ejemplo, los primeros 6 GIFs)
    respuesta.data.forEach(gif => {
        const newGifCard = gifTemplate.cloneNode(true); // Clonamos la plantilla
        const img = newGifCard.querySelector("img");    // Buscamos la etiqueta <img>
        img.src = gif.images.original.url;              // Asignamos la URL del GIF
        gifsContainer.appendChild(newGifCard);          // Agregamos el nuevo GIF al contenedor
    });

    // Removemos la plantilla inicial para que no quede vacía
    gifTemplate.remove();
};


obtenerGifs();
