// const productos = [
//     {nombreProducto:"Arroz", precio: 156 },
//     {nombreProducto:"Palmitos", precio: 280 },
//     {nombreProducto:"Queso", precio: 460 },
//     {nombreProducto:"Gaseosa", precio: 190 },
//     {nombreProducto:"Galletitas", precio: 120 }
// ]



const productos = []
let cantidadProductos = 5

do {
    let nombreProducto = prompt("Ingrese nombre del producto");
    productos.push(nombreProducto.toUpperCase());

} while (productos.length != cantidadProductos)

document.write(productos)