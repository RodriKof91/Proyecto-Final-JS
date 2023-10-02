document.addEventListener("DOMContentLoaded", () => {
    const productoDetallado = document.getElementById("container-producto");
  
    const urlParams = new URLSearchParams(window.location.search);
    const idProducto = urlParams.get("id");
  
    const datosProductos = JSON.parse(localStorage.getItem("productos"));
    const productoElejido = JSON.parse(localStorage.getItem("productoElejido"));
  
    if (productoElejido) {
      const containerProductoElegido = document.createElement("div");
      const containerImagenes = document.createElement("div");
      containerProductoElegido.classList.add("detalles-producto");
      containerImagenes.classList.add("container-imagenes");
      containerProductoElegido.innerHTML = `
      <h1 class= "h1Titulo">Producto: ${productoElejido.nombre}</h1>
      <img class="productoImagen" src=${productoElejido.imagenPortada} >
      <p class="parrafoProducto">Descripcion: ${productoElejido.descripcion}</p>
      <p class="parrafoProducto ">Detalles: ${productoElejido.detalles}</h2>
      <p class="parrafoProducto ">Precio: ${productoElejido.precio}</h2>
      <p class="parrafoProducto ">Puntuacion: ${productoElejido.puntuacion}</p>

      `;
      productoDetallado.appendChild(containerProductoElegido);
      const tiutlo2 = document.createElement("h2");
      tiutlo2.classList.add("h2fotos");
      tiutlo2.textContent = "MAS FOTOS";
      productoDetallado.appendChild(tiutlo2);

      containerImagenes.innerHTML = `
      <img class="masImagenes" src=${productoElejido.imagen1} >
      <img class="masImagenes" src=${productoElejido.imagen2} >
      <img class="masImagenes" src=${productoElejido.imagen3} >
      `;
      productoDetallado.appendChild(containerImagenes);
    }
  });

