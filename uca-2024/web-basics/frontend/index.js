function fooOuter() {
    let value = "valOuter"
    let result;
    fooInner(value, getResult)
    function getResult(res1) {
        console.log("The result is : ", res1)
        result = res1;
    }
}

function fooInner(arg1, getResult) {
    console.log(arg1)
    let x = 10;
    let resultsInner = 20;
    getResult(20)
}

function renderProducts() {
  let productsListFromServer = [];

  function getProductsList() {
    productsListFromServer = productsList;
    initProductsListTable();
  }

  function initProductsListTable() {
    if (!productsListFromServer || productsListFromServer?.length === 0) {
      document.getElementById("productMenu").innerHTML = `${getLoader()}`;
      return;
    }
    document.getElementById("productMenu").innerHTML = `
        <div class="row center">
          <div class="col-6">
            <table class="table-bordered">
              <thead>
                <tr>
                  <th>Sr. No. </th>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              ${getProductListHTMLUsingMap()}
            </table>
          </div>
        </div>
      `;
  }

  function getProductListHTMLUsingMap() {
    if (!productsListFromServer || productsListFromServer?.length === 0) {
      return ``;
    }
    var rowsOfProducts = productsListFromServer?.map((item, index) => {
      return `<tr>
              <td>${index + 1}</td>
              <td>${item.name}</td>
              <td>${item.description}</td>
              <td>${item.price}</td>
            </tr>`;
    });

    return `
      <tbody>
        ${rowsOfProducts?.join("")}
      </tbody>
    `;
  }

  function getLoader() {
    if (!productsListFromServer || productsListFromServer?.length === 0) {
      return `
        <div class="row">
          <div class="col">
            Loading Data
          </div>
        </div>
      `;
    } else return ``;
  }

  initProductsListTable();
  setTimeout(getProductsList, 1000);
}

renderProducts();