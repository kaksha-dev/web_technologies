async function ProductDetailsPage({ params }) {
  const paramsLocal = await params;
  const dynamicProductName = paramsLocal.dynamicProductName.join("/");  
  console.log("---------Page params-----------", paramsLocal); // Access the dynamic slug parameter
  return <>PDP page for : {dynamicProductName}</>;
}

export default ProductDetailsPage;
