document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("product-container");
    const themeToggle = document.getElementById("theme-toggle");

    // Theme toggle
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });

    // Load products
    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const card = document.createElement("div");
                card.className = "product-card";
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <a href="${product.amazon_link}" target="_blank">Buy on Amazon</a>
                    ${product.youtube_link ? `<iframe src="https://www.youtube.com/embed/${product.youtube_link.split('v=')[1]}" frameborder="0" allowfullscreen></iframe>` : ""}
                `;
                container.appendChild(card);
            });
        });
});
