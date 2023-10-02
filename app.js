fetch("./listaProductos.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => localStorage.setItem("productos", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
  const gridProductos = document.getElementById("grid-productos");
  const datosProductos = JSON.parse(localStorage.getItem("productos"));
  if (datosProductos) {
    datosProductos.productos.forEach((producto) => {
      crearProducto(producto, gridProductos);

    });
  }
});

function productoDetallado(producto) {
  window.location.href = `productos.html?id=${producto.id}`;
}

function crearProducto(producto,contenedor){
  const articleItem = document.createElement("article");
  contenedor.appendChild(articleItem);
  const gridItem = document.createElement("div");
  articleItem.appendChild(gridItem);

  gridItem.classList.add("card0");
  const gridItem2 = document.createElement("div");
  gridItem2.classList.add("card-image");

  gridItem2.style.backgroundImage = "url(./img/descuento50.jpg)";
  gridItem.appendChild(gridItem2);
  gridItem.innerHTML += `<h2>${producto.nombre}</h2><p>${producto.descripcion}</p><a>Ver mas</a>`;
  eventoClick(gridItem, producto);

}

function eventoClick(contenedor,producto){
  var botonA = contenedor.querySelector('a');
  botonA.addEventListener("click", () => {
    productoDetallado(producto);
    localStorage.setItem("productoElejido", JSON.stringify(producto));

  });
}