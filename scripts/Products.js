import { getProducts } from "./database.js"


const products = getProducts()

/* 
-//todo @ 2:12pm 9.20.22: pull in event listener code from Dogg-Walking
-//todo refactor for this project
*/


export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>` //*solved product.name, not product.title
    }

    html += `</ul>`

    return html
}

document.addEventListener(
    "click", 
    (clickEvent) => {
      const itemClicked = clickEvent.target;
  
      if (itemClicked.id.startsWith("product")) {
        const [, productId] = itemClicked.id.split("--");
  
        for (const product of products) {
          if (product.id === parseInt(productId)) {
            window.alert(`A(n) ${product.name} costs ${product.price} dollars. This is a very upperclass establishment.`);
          }
        }
      }
    }
  );