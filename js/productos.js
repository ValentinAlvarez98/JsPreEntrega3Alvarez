let productos = [];
let productosCreados = [];
const contenedorProductos = document.querySelector('#contenedorProductos');
const creadorAdmin = document.querySelector('#creadorAdmin');

function Producto(nombreProd, precioProd, categoriaProd, marcaProd, codigoProd) {

    this.nombreProd = nombreProd;
    this.precioProd = precioProd;
    this.categoriaProd = categoriaProd;
    this.marcaProd = marcaProd;
    this.codigoProd = codigoProd;

}

const producto1 = new Producto("ZOTAC GEFORCE RTX 2060", 619, "TARJETAS DE VIDEO", "NVIDIA", "BFXZON02");
const producto2 = new Producto("AMD PROCESADOR RYZEN 5 5600", 224, "PROCESADORES", "AMD", "BFX56");
const producto3 = new Producto("GIGABYTE PLACA A520M-H", 98, "MOTHERBOARD", "GIGABYTE", "BFXGBP98");
const producto4 = new Producto("NETAC MEMORIA SHADOW DDR4-3200 16GB GREY NTSDD4P32SP-16E", 55, "MEMORIA RAM", "NETAC", "BFX32SP1");
const producto5 = new Producto("GIGABYTE FUENTE 1000W GP-P1000GM 80 PLUS GOLD", 208, "FUENTES", "GIGABYTE", "BFXGBTP1000");
const producto6 = new Producto("WESTERN DIGITAL SSD M.2 BLACK NVME SN750 SE 1TB", 157, "SSD M.2", "WESTERN DIGITAL", "BFX1TB1");

for (let i = 0; i < 6; i++) {
    productos.push(eval
        (`producto${i + 1}`));
    
}

console.log(productos);

// creador de productos en HTML

productos.forEach((producto) => {
    
    contenedorProductos.innerHTML += 
        `<div class="col">
            <div class="card h-100 border-0">
                <img class="card-img-top ratio ratio-1x1" src="assets/images/productosNuevos/${producto.codigoProd}.jpg" alt="${producto.nombreProd}">
                <div class="card-body text-center mb-0 mt-0">
                    <p class="card-text mb-2 nombreProd">${producto.nombreProd}</p>
                    <h6 class="card-text mt-0 fw-bold precioProd"> USD ${producto.precioProd}</h6>
                </div>
            <div class="card-footer text-center border-0 mb-4">
                <a href="#titulosProductosNuevos" class="btn ">Añadir</a>
            </div>
        </div>`;
});

productosCreados.forEach((producto) => {

    creadorAdmin.innerHTML +=
        `<div class="col">
            <div class="card h-100 border-0">
                <img class="card-img-top ratio ratio-1x1" src="assets/images/productosNuevos/${producto.codigoProd}.jpg" alt="${producto.nombreProd}">
                <div class="card-body text-center mb-0 mt-0">
                    <p class="card-text mb-2 nombreProd">${producto.nombreProd}</p>
                    <h6 class="card-text mt-0 fw-bold precioProd"> USD ${producto.precioProd}</h6>
                </div>
            <div class="card-footer text-center border-0 mb-4">
                <a href="#titulosProductosNuevos" class="btn ">Añadir</a>
            </div>
        </div>`;

});
    
