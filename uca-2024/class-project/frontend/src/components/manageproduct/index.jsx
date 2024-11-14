import { useEffect, useRef, useState } from "react";
import { PageTitle } from "../elements/pageTitle";
import { useLocation } from "react-router-dom";
import { Input } from "../elements/form/input";

export function ManageProduct({ type = "add" }) {
  // type can be add or edit
  const routerData = useLocation();

  // const productName = useRef(null);
  // const productPrice = useRef(null);

  const [selectedproduct, setSelectedProduct] = useState({});
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);

  const [productName, setProductName] = useState(
    type === "add" ? "" : selectedproduct?.productName
  );
  const [productPrice, setProductPrice] = useState(
    type === "add" ? "" : selectedproduct?.productPrice
  );

  // ----------------------------------------------------------------
  const [count, setCount] = useState(0);
  let numberOfRerenders = 0;
  let numberOfRerendersWithRef = useRef(0);

  useEffect(() => {
    numberOfRerenders = numberOfRerenders + 1;
    numberOfRerendersWithRef.current = numberOfRerendersWithRef.current + 1;
    // console.log("numberOfRerenders: ", numberOfRerenders);
    // console.log("numberOfRerendersWithRef: ", numberOfRerendersWithRef.current);

    setTimeout(() => {
      // do complex calculation
      setCount(count + 1);
    }, 1000);
  });

  // ----------------------------------------------------------------

  useEffect(() => {
    if (type !== "edit") return;
    console.log("Location data is: ", routerData);
    // const selectedProductFromStorage =
    //   sessionStorage.getItem("selectedProduct");
    // setSelectedProduct(JSON.parse(selectedProductFromStorage));

    const selectedProductLocal = routerData?.state?.selectedProduct;
    setSelectedProduct(selectedProductLocal);

    setProductName(type === "add" ? "" : selectedProductLocal?.productName);
    setProductPrice(type === "add" ? "" : selectedProductLocal?.productPrice);
  }, [type, routerData]);

  const manageProductHandler = async (event) => {
    event.preventDefault();

    if (type === "add") {
      addProductHandler();
    } else {
      editProductHandler();
    }
  };

  const addProductHandler = async () => {
    var formValuesObject = {
      productName: productName,
      productPrice: productPrice,
    };

    console.log("The event is: ", event);
    console.log("The form values are  is: ", formValuesObject);

    if (formValuesObject.productName && formValuesObject.productPrice) {
      console.log("Submit this form");

      // Make an api/web service call to submit the user details
      var response = await fetch("http://localhost:8080/products", {
        method: "POST",
        body: JSON.stringify({ ...formValuesObject }),
        headers: { "Content-Type": "application/json" },
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

  const editProductHandler = async () => {
    var formValuesObject = {
      productName: productName,
      productPrice: productPrice,
    };

    console.log("The event is: ", event);
    console.log("The form values are  is: ", formValuesObject);

    if (formValuesObject.productName && formValuesObject.productPrice) {
      console.log("Submit this form");

      // Make an api/web service call to submit the user details
      var response = await fetch(`http://localhost:8080/products`, {
        method: "PUT",
        body: JSON.stringify({ _id: selectedproduct._id, ...formValuesObject }),
        headers: { "Content-Type": "application/json" },
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

  const getProductName = (event) => {
    console.log(event.target.value);
    setProductName(event.target.value);
  };

  const getProductPrice = (event) => {
    console.log(event.target.value);
    setProductPrice(event.target.value);
  };

  return (
    <>
      <div key={count}>Sample Key Element</div>
      <div key={count + 1}>Sample Key Element + 1</div>
      <div key={count + 2}>Sample Key Element + 2</div>

      {type === "add" ? (
        <PageTitle>Add Product Page</PageTitle>
      ) : (
        <PageTitle>Edit Product Page</PageTitle>
      )}

      {showSuccessAlert && (
        <div className="alert alert-success" role="alert">
          Product Added/Updated successfully
        </div>
      )}

      {showFailureAlert && (
        <div className="alert alert-danger" role="alert">
          Error creating/updating product
        </div>
      )}

      <form className="row g-3" onSubmit={manageProductHandler}>
        <div className="col-md-6">
          <Input
            id="productName"
            label="Product name"
            onChange={getProductName}
            defaultValue={type === "add" ? "" : selectedproduct?.productName}
          ></Input>
        </div>
        <div className="col-md-6">
          <Input
            id="productPrice"
            label="Product price"
            onChange={getProductPrice}
            defaultValue={type === "add" ? "" : selectedproduct?.productPrice}
          ></Input>
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
