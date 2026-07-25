// document.getElementById("appcontent").innerHTML = `
//     <div>
//         <h1>Heading of multiline contnet</h2>
//         <h2>Dynamic Content ${7 + 18}</h2>
//         <p>Multiline contnet</p>
//     </div>
// `;

// This data will come from the server
let productListFromServer = [];

// Load the data as soon page is loading starts
loadDataFromServer();
renderProducts(productListFromServer);

async function loadDataFromServer() {
  setTimeout(() => {
    productListFromServer = [
      {
        name: "Product 1",
        price: "$10.00",
        description: "This is a great product.",
      },
      {
        name: "Product 2",
        price: "$20.00",
        description: "This product is even better.",
      },
      {
        name: "Product 3",
        price: "$20.00",
        description: "This product is even better.",
      },
    ];
    console.log("Data from server: ", productListFromServer);
    renderProducts(productListFromServer);
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
                ${productList.map((item) => {
                  return `
                       <tr>
                            <td>${item.name}</td>
                            <td>${item.price}</td>
                            <td>${item.description}</td>
                        </tr> 
                    `;
                })}
            </tbody>
        </table>
    `;
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
