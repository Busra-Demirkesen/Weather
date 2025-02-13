import products from "./data.js";
import { renderProducts } from "./ui.js";

function filterProducts(category) {
    const filtered = products.filter(product => product.category === category);
    renderProducts(filtered);
}

// Checkbox’ları dinleyerek filtreleme yap
document.querySelectorAll("input[name='category']").forEach(checkbox => {
    checkbox.addEventListener("change", (event) => {
        const selectedCategory = event.target.value;
        filterProducts(selectedCategory);
    });
});


