import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css";

function ProductList() {
  const [productsList, setProductList] = useState([]);
  const [productsDetails, setProductsDetails] = useState([]);
  const [priceDetails, setPriceDetails] = useState([]);

  // Variation 1: Do this, Whenever component re-renders
  useEffect(() => {
    console.log("Component is re-renderd");
  });

  // Variation 2: Do this, only at initial render
  useEffect(() => {
    console.log("Component is re-renderd");
    // Fetch the details of the produict
    setProductsDetails([]);
  }, []);

  // Variation 3: Do this, based on the dependency update
  useEffect(() => {
    // Make an API/web service call to fetch the prices
    setPriceDetails([]);
    // Make an API/web service call to fetch reviews
  }, [productsDetails]);

  setTimeout(() => {
    setProductList([
      { name: "Product1 Name", price: 20.0 },
      { name: "Product2 Name", price: 30.0 },
      { name: "Product3 Name", price: 30.0 },
      { name: "Product4 Name", price: 30.0 },
    ]);
    setProductsDetails([]);
  }, 5000);

  return (
    <div>
      <table>
        <thead>
          <th>Product Name</th>
          <th>Product Price</th>
        </thead>
        <tbody>
          {productsList.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
          {priceDetails}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
