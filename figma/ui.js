export function renderProducts(products) {
  const productContainer = document.querySelector("#product-list");
  productContainer.innerHTML = ""; // Önce listeyi temizle

  products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>Fiyat: <strong>${product.price} TL</strong></p>
      `;
      productContainer.appendChild(productElement);
  });
}
