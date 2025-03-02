document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        { nombre: "Tomates Orgánicos", precio: "$3/lb", paypal: "https://paypal.com/pay?tomates", venmo: "https://venmo.com/pay?tomates", card: "https://card.com/pay?tomates" },
        { nombre: "Zanahorias Frescas", precio: "$2/lb", paypal: "https://paypal.com/pay?zanahorias", venmo: "https://venmo.com/pay?zanahorias", card: "https://card.com/pay?zanahorias" },
        { nombre: "Lechuga Hidropónica", precio: "$1.5/unidad", paypal: "https://paypal.com/pay?lechuga", venmo: "https://venmo.com/pay?lechuga", card: "https://card.com/pay?lechuga" }
    ];

    const listaProductos = document.getElementById("lista-productos");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalPrice = document.getElementById("modal-price");
    const paypalLink = document.getElementById("paypal-link");
    const venmoLink = document.getElementById("venmo-link");
    const cardLink = document.getElementById("card-link");
    const closeModal = document.querySelectorAll(".close");

    productos.forEach(prod => {
        let div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `<h3>${prod.nombre}</h3><p>Precio: ${prod.precio}</p>`;
        div.onclick = () => {
            modal.style.display = "block";
            modalTitle.textContent = prod.nombre;
            modalPrice.textContent = `Precio: ${prod.precio}`;
            paypalLink.href = prod.paypal;
            venmoLink.href = prod.venmo;
            cardLink.href = prod.card;
        };
        listaProductos.appendChild(div);
    });

    closeModal.forEach(btn => btn.onclick = () => {
        modal.style.display = "none";
        document.getElementById("sugerencias-modal").style.display = "none";
    });

    document.getElementById("contacto").href = "https://wa.me/14359949014";

    document.getElementById("sugerencias-btn").onclick = () => {
        document.getElementById("sugerencias-modal").style.display = "block";
    };
});