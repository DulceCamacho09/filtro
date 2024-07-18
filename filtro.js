// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./src/public/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./src/public/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./src/public/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./src/public/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./src/public/zapato-rojo.jpg"}
];

const li = document.querySelector("#lista-de-productos");
const inputFiltro = document.querySelector('input');

function displayProductos(listaProductos) {
  // Limpia la lista de productos
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  // Crea y agrega los productos a la lista
  for (let i = 0; i < listaProductos.length; i++) {
    let d = document.createElement("div");
    d.classList.add("producto");

    let ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = listaProductos[i].nombre;

    let imagen = document.createElement("img");
    imagen.setAttribute('src', listaProductos[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);
    li.appendChild(d);
  }
}

displayProductos(productos);

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  const texto = inputFiltro.value.toUpperCase();
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
};

const filtrado = (productos, texto) => {
  return productos.filter(item => item.tipo.toUpperCase().includes(texto) || item.color.toUpperCase().includes(texto));
};