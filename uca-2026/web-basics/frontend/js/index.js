// document.getElementById("appcontent").innerHTML = `
//     <div>
//         <h1>Heading of multiline contnet</h2>
//         <h2>Dynamic Content ${7 + 18}</h2>
//         <p>Multiline contnet</p>
//     </div>
// `;

// This data will come from the server
// let productListFromServer = [];
function setProductListFromServer(productList, callbackFn) {
  // productListFromServer = productList;
  callbackFn(productListFromServer);
}

// Load the data as soon page is loading starts
loadDataFromServer(renderProducts);
// renderProducts(productListFromServer);

// document.body.addEventListener("click", (event) => {
//   console.log("The target is", event.target);
//   console.log("The current target is", event.currentTarget);
// });

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
    document.getElementById("productdetails").innerHTML = `<img src="${product.image}" alt="${product.name}">`;
    return;
  }
  // const element = document.createElement("div");
  // element.id = "productdetails";
  // element.appendChild(document.createTextNode(product.description));
  // element.innerHTML = product.description;
  // document.body.appendChild(element);
}

// document.getElementById("appcontent").innerHTML = `
//     <table>
//       <thead>
//         <th>Sr. No.</th>
//         <th>Product Name</th>
//         <th>Price</th>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mobile Phone</td>
//           <td>20</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Washing Machine</td>
//           <td>10</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td>Washing Machine</td>
//           <td>10</td>
//         </tr>
//       </tbody>
//     </table>
// `;
