import { useState } from "react";

function ProductList({l1}) {
    console.log(l1)
  var [productsList, setProductList] = useState([]);

  setTimeout(() => {
    setProductList([
      { name: "Product1 Name", price: 20.0 },
      { name: "Product2 Name", price: 30.0 },
      { name: "Product3 Name", price: 30.0 },
      { name: "Product4 Name", price: 30.0 },
    ]);
  }, 5000);

  return (
    <div>
      <table style={{ border: "2px solid black", borderCollapse: "collapse" }}>
        <thead>
          <th style={{ border: "2px solid black" }}>Product Name</th>
          <th style={{ border: "2px solid black" }}>Product Price</th>
        </thead>
        <tbody>
          {productsList.map((item, index) => {
            return (
              <tr key={index}>
                <td style={{ border: "2px solid black" }}>{item.name}</td>
                <td style={{ border: "2px solid black" }}>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
