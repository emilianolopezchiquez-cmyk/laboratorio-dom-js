// Definición de la clase Producto
class Producto {
    constructor(nombre, precio, descuento, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento; // Porcentaje de descuento (ej. 20 para 20%)
        this.imagen = imagen;
    }

    calcularPrecioFinal() {
        let montoDescuento = (this.precio * this.descuento) / 100;
        return (this.precio - montoDescuento).toFixed(2);
    }
}

const prod1 = new Producto("Laptop Gamer", 1200, 15, "https://picsum.photos/seed/laptop/300/200");
const prod2 = new Producto("Mouse Inalámbrico", 45, 10, "https://picsum.photos/seed/mouse/300/200");
const prod3 = new Producto("Teclado Mecánico", 85, 20, "https://picsum.photos/seed/keyboard/300/200");

const catalogo = [prod1, prod2, prod3];

function renderizarCatalogo() {
    contenedor.innerHTML = ""; // Limpiar contenedor

    catalogo.forEach((producto, index) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-producto");

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio base: <span class="precio-original">$${producto.precio}</span></p>
            <p>Descuento: ${producto.descuento}%</p>
            <p>Precio final: <span id="precio-${index}" class="precio-final">$${producto.precio}</span></p>
            <button class="btn-descuento" data-index="${index}">Aplicar Descuento</button>
        `;

        contenedor.appendChild(tarjeta);
    });

    activarEventos();
}

function activarEventos() {
    const botones = document.querySelectorAll(".btn-descuento");

    botones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            const productoSeleccionado = catalogo[index];

            const precioFinal = productoSeleccionado.calcularPrecioFinal();

            const spanPrecio = document.getElementById(`precio-${index}`);
            spanPrecio.textContent = `$${precioFinal}`;
        });
    });
}

renderizarCatalogo();