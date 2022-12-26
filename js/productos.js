const productos = [];
const contenedorProductos = document.querySelector('#contenedorProductos');
const formularioAgregarProductos = document.querySelector('#formularioAgregarProductos');
const btnCrearProducto = document.querySelector('#btnCrearProducto');
const formularioEliminarProductos = document.querySelector('#formularioEliminarProductos');
const btnEliminarProducto = document.querySelector('#btnEliminarProducto');

function Producto(nombreProd, precioProd, categoriaProd, marcaProd, codigoProd) {

    this.nombreProd = nombreProd;
    this.precioProd = precioProd;
    this.categoriaProd = categoriaProd;
    this.marcaProd = marcaProd;
    this.codigoProd = codigoProd;

}

function crearProducto() {

    let nombreProducto = document.querySelector('#nombreProducto').value;
    let precioProducto = document.querySelector('#precioProducto').value;
    let categoriaProducto = document.querySelector('#categoriaProducto').value;
    let marcaProducto = document.querySelector('#marcaProducto').value;
    let codigoProducto = document.querySelector('#codigoProducto').value;

    nombreProducto, precioProducto, categoriaProducto, marcaProducto, codigoProducto == "" ?
        [completarTodo.classList.remove("hidden")] :

        [completarTodo.classList.add("hidden"),
            productoACrear = {
            numeroProd: "Producto " + (productos.length + 1),
            producto: new Producto(`${nombreProducto}`, `${precioProducto}`, `${categoriaProducto}`, `${marcaProducto}`, `${codigoProducto}`),
        },

            localStorage.setItem(productoACrear.numeroProd, JSON.stringify(productoACrear.producto)), location.reload()];

}


function eliminarProducto() {

    codigoProductoAEliminar = document.querySelector('#codigoProductoAEliminar').value;

    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
        let producto = JSON.parse(valor);
        producto.codigoProd == codigoProductoAEliminar ? [localStorage.removeItem(clave),
        filterdObjects = productos.filter(producto => producto.codigoProd !== codigoProductoAEliminar)] : null;
    }

    cargarProductos();

}

function cargarProductos() {


    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
        let producto = JSON.parse(valor);
        producto.codigoProd != undefined ?
            productos.push(producto) : () => {
            return;
        };
    }

    sessionStorage.setItem("productos", JSON.stringify(productos));

}

function mostrarProductos() {

    creadorProductos.classList.contains("hidden") ? 
        JSON.parse(sessionStorage.getItem("productos", JSON.stringify(productos))).forEach((producto) => {
            contenedorProductos.innerHTML +=
                `<div class="col">
            <div class="card h-100 border-0">
                <img class="card-img-top ratio ratio-1x1" src="assets/images/productosNuevos/${producto.codigoProd}.jpg" alt="${producto.nombreProd}">
                <div class="card-body text-center mb-0 mt-0">
                    <p class="card-text mb-2 nombreProd">${producto.nombreProd}</p>
                    <h6 class="card-text mt-0 fw-bold precioProd"> USD ${producto.precioProd}</h6>
                </div>
            <div class="card-footer text-center border-0 mb-4">
                <a href="#titulosProductosNuevos" class="btn rounded-0">Añadir</a>
            </div>
        </div>`;
    }) : 
        JSON.parse(sessionStorage.getItem("productos", JSON.stringify(productos))).forEach((producto) => {

    contenedorProductos.innerHTML += 
        `<div class="col">
            <div class="card h-100 border-0">
                <img class="card-img-top ratio ratio-1x1" src="assets/images/productosNuevos/${producto.codigoProd}.jpg" alt="${producto.nombreProd}">
                <div class="card-body mb-0 mt-0">
                    <p class="card-text mb-2">Nombre:</p>
                    <p class="card-text mb-2 fw-bold nombreProd">${producto.nombreProd}</p>
                    <p class="card-text mb-2">Precio:</p>
                    <p class="card-text mb-2 fw-bold precioProd">USD ${producto.precioProd}</p>
                    <p class="card-text mb-2">Categoria:</p>
                    <p class="card-text mb-2 fw-bold categoriaProd">${producto.categoriaProd}</p>
                    <p class="card-text mb-2">Marca:</p>
                    <p class="card-text mb-2 fw-bold marcaProd">${producto.marcaProd}</p>
                    <p class="card-text mb-2">Código:</p>
                    <p class="card-text mb-2 fw-bold codigoProd">${producto.codigoProd}</p>
                </div>
        </div>`;
    })

}

cargarProductos();
mostrarProductos();


formularioAgregarProductos.addEventListener("submit", (e) => {
    e.preventDefault();
    crearProducto();
})

btnCrearProducto.addEventListener("click", (e) => {
    e.preventDefault();
    crearProducto();
})

formularioEliminarProductos.addEventListener("submit", (e) => {
    e.preventDefault();
    eliminarProducto();
    location.reload();
})

btnEliminarProducto.addEventListener("click", (e) => {
    e.preventDefault();
    eliminarProducto();
    location.reload();
})



    
