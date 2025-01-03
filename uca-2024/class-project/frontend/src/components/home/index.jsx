import { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Button } from "../elements/button";
import { useNavigate } from "react-router-dom";
import { setProductList } from "../../redux/productsSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [productsList, setProductList] = useState([]);
  const productsList = useSelector((state) => {
    return state.products.productsList;
  });
  const [productsDetails, setProductsDetails] = useState([]);
  const [, setPriceDetails] = useState([]);
  const [selectedProductForDelete, setSelectedProductForDelete] =
    useState(null);

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);

  // Variation 1: Do this, Whenever component re-renders
  useEffect(() => {
    // console.log("Component is re-renderd");
  });

  // Variation 2: Do this, only at initial render
  useEffect(() => {
    // console.log("Component is re-renderd");
    // Fetch the details of the produict
    setProductsDetails([]);
  }, []);

  // Variation 2: Do this, only at initial render
  useEffect(() => {
    // console.log("Component is re-renderd");
    // Fetch the details of the produict
    fetchProductData();
  }, []);

  // Sample code for performance improvements
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log("Count before update is: ", count);
      setCount(count + 1);
      console.log("Count after update is: ", count);
    }, 1000);
  });

  const fetchProductData = useCallback(async () => {
    var productsResponse = await fetch(
      `${import.meta.env.VITE_NODEJS_BACKEND}/products`
    );
    var productsList = await productsResponse.json();

    console.log("The products list is: ", productsList);
    if (
      productsResponse.ok &&
      (productsResponse.status == "201" || productsResponse.status == "200")
    ) {
      // setProductList(productsList);
      dispatch(setProductList(productsList));
    } else {
      // setShowFailureAlert(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Variation 3: Do this, based on the dependency update
  useEffect(() => {
    // Make an API/web service call to fetch the prices
    setPriceDetails([]);
    // Make an API/web service call to fetch reviews
  }, [productsDetails]);

  // setTimeout(() => {
  //   setProductList([
  //     { name: "Product1 Name", price: 20.0 },
  //     { name: "Product2 Name", price: 30.0 },
  //     { name: "Product3 Name", price: 30.0 },
  //     { name: "Product4 Name", price: 30.0 },
  //   ]);
  //   setProductsDetails([]);
  // }, 1000);

  const navigateToEditProduct = (item) => {
    // sessionStorage.setItem("selectedProduct", JSON.stringify(item));
    // navigate("editproduct", { state: item });
    navigate("/editproduct", { state: { selectedProduct: item } });
  };

  const deleteProduct = (item) => {
    setSelectedProductForDelete(item);
  };

  const deleteProductHandlerTemp = async () => {
    // Make an api/web service call to submit the user details
    var response = await fetch(
      `${import.meta.env.VITE_NODEJS_BACKEND}/products`,
      {
        method: "DELETE",
        body: JSON.stringify({ _id: selectedProductForDelete._id }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok && (response.status == "201" || response.status == "200")) {
      setShowFailureAlert(false);
      setShowSuccessAlert(true);
      setSelectedProductForDelete(null);
      fetchProductData();
    } else {
      setShowSuccessAlert(false);
      setShowFailureAlert(true);
    }
    console.log("The response of POST API call is ", response);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const deleteProductHandler = useCallback(deleteProductHandlerTemp, [
    selectedProductForDelete?._id,
  ]);

  return (
    <div>
      {count}
      {showSuccessAlert && (
        <div className="alert alert-success" role="alert">
          Product deleted successfully
        </div>
      )}

      {showFailureAlert && (
        <div className="alert alert-danger" role="alert">
          Error deleting product
        </div>
      )}
      <>
        {selectedProductForDelete && (
          <div style={{ display: "flex" }}>
            <p>Are you sure, want to delete</p>
            <Button type="primary" onClick={deleteProductHandler}>
              Yes
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setSelectedProductForDelete(null);
              }}
            >
              No
            </Button>
          </div>
        )}
      </>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.productName}</td>
                <td>{item.productPrice}</td>
                <td>
                  <div style={{ display: "flex" }}>
                    <Button
                      type="primary"
                      onClick={() => {
                        navigateToEditProduct(item);
                      }}
                    >
                      Edit Product
                    </Button>
                    <Button
                      type="primary"
                      onClick={() => {
                        deleteProduct(item);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
