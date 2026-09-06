let productList = [];
function setProductListFromServer(products, callbackFn) {
  productList = products;
  callbackFn(productList);
}

// Load the data as soon page is loading starts
loadDataFromServer(renderProducts);

function loadDataFromServer(callbackFn) {
  setTimeout(() => {
    setProductListFromServer(productListFromServer, callbackFn);
    console.log("Data from server: ", productListFromServer);
    // renderProducts(productListFromServer);
  }, 2000);
}

function renderProducts(productList) {
  if (productList.length === 0) {
    document.getElementById("appcontent").innerHTML = `
            <h3>Loading data from server...</h3>
        `;
    return;
  }

  document.getElementById("appcontent").innerHTML = `
        <table>
            <thead>
                <th>Sr. No.</th>
                <th>Product Name</th>
                <th>Price</th>
            </thead>
            <tbody>
                ${productList
                  .map((item) => {
                    return `
                       <tr id="product-${item.name.replace(/\s+/g, "-")}" style="cursor: pointer" onclick='selectProduct(this)' data-item='${JSON.stringify(item)}'>
                            <td>${item.name}</td>
                            <td>${item.price}</td>
                            <td>${item.description}</td>
                        </tr> 
                    `;
                  })
                  .join("")}
            </tbody>
        </table>
        <div id="productdetails"></div>
    `;
}

function selectProduct(productElement) {
  console.log("The selected product element is", productElement);

  const product = JSON.parse(productElement.dataset.item);
  console.log("The selected product is", product);

  if (document.getElementById("productdetails")) {
    document.getElementById("productdetails").innerHTML =
      `<img src="${product.image}" alt="${product.name}">`;
    return;
  }
}

/**
 * How basic web handles UI update scenarios as compared to React
 */
let likes = 0;
function renderDyanamicTextNode() {
  document.getElementById("dynamicTextNode").innerHTML = `Likes - ${likes}`;
  setTimeout(() => {
    likes = likes + 1;
    renderDyanamicTextNode();
  }, 2000);
}

renderProducts(productList); // Element 1/ Component 1
renderDyanamicTextNode(); // Element 2/ Component 2
