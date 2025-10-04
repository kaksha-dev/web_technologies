var productsList = [];
var x = 20;

function loadProducts(renderProductListsWithData) {
  setTimeout(() => {
    productsList = productsListFromServer;
    renderProductListsWithData();
  }, 500);
}

const foo = (arg1) => {
  console.log(arg1);
};

function foo1(arg1) {
  console.log(arg1);
}

function renderProducts() {
  // Fetch the data from server
  // Conert the data into html and render it on UI

  function renderProductListsWithData() {
    if (productsList.length === 0) {
      document.getElementById("data").innerHTML = "Loading data from server...";
      return;
    }
    document.getElementById("data").innerHTML = `
    <table>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                ${productsList
                  .map((product, index) => {
                    return `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>${product.description}</td>
                    </tr>
                    `;
                  })
                  .join("")}
            </tbody>
        </table>`;
  }

  loadProducts(renderProductListsWithData);
  renderProductListsWithData();
}
renderProducts();

/**
 * How basic web handles UI update scenarios as compared to React
 */
let likes = 25
function renderDyanamicTextNode() {
  document.getElementById("dynamicTextNode").innerHTML = `Likes - ${likes}`;
  setTimeout(() => {
    likes = likes + 1;
    renderDyanamicTextNode();
  }, 2000);
}

renderDyanamicTextNode()
