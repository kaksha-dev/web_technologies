import { useEffect, useRef, useState } from "react";
import { PageTitle } from "../elements/pageTitle";

// eslint-disable-next-line react/prop-types
export function ManageProduct({ type = "add" }) {
  // type can be add or edit

  const productName = useRef(null);
  const productPrice = useRef(null);

  const [selectedproduct, setSelectedProduct] = useState({});

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);

  useEffect(() => {
    if (type !== "edit") return;
    const selectedProductFromStorage =
      sessionStorage.getItem("selectedProduct");
    setSelectedProduct(JSON.parse(selectedProductFromStorage));
  }, [type]);

  const addProductHandler = async (event) => {
    event.preventDefault();

    var formValuesObject = {
      productName: productName.current.value,
      productPrice: productPrice.current.value,
    };

    console.log("The event is: ", event);
    console.log("The form values are  is: ", formValuesObject);

    if (formValuesObject.productName && formValuesObject.productPrice) {
      console.log("Submit this form");

      // Make an api/web service call to submit the user details
      var response = await fetch("http://localhost:3001/products", {
        method: "POST",
        body: JSON.stringify({ ...formValuesObject }),
      });
      if (
        response.ok &&
        (response.status == "201" || response.status == "200")
      ) {
        setShowFailureAlert(false);
        setShowSuccessAlert(true);
      } else {
        setShowSuccessAlert(false);
        setShowFailureAlert(true);
      }
      console.log("The response of POST API call is ", response);
    } else {
      setShowFailureAlert(true);
    }
  };

  return (
    <>
      {type === "add" ? (
        <PageTitle>Add Product Page</PageTitle>
      ) : (
        <PageTitle>Edit Product Page</PageTitle>
      )}

      {showSuccessAlert && (
        <div className="alert alert-success" role="alert">
          Product Added successfully
        </div>
      )}

      {showFailureAlert && (
        <div className="alert alert-danger" role="alert">
          Error creating product
        </div>
      )}

      <form className="row g-3" onSubmit={addProductHandler}>
        <div className="col-md-6">
          <label htmlFor="productName" className="form-label">
            Product name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            ref={productName}
            defaultValue={type === "add" ? "" : selectedproduct.productName}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="productPrice" className="form-label">
            Product price
          </label>
          <input
            type="text"
            className="form-control"
            id="productPrice"
            ref={productPrice}
            defaultValue={type === "add" ? "" : selectedproduct.productPrice}
          />
        </div>

        <div className="col-12" style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
