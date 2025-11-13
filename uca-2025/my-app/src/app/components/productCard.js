import Button from "./button";

function ProductCard({ product }) {
  return (
    <div style={{ border: "2px solid black", margin: "10px", padding: "5px" }}>
      <img src={product.image} alt="Product Image" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>{product.name}</div> &nbsp; &nbsp;
        <div>{product.price}</div> &nbsp; &nbsp;
        <div>{product.tag}</div>
      </div>
      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        <Button variant="light">Add to Cart</Button>
      </div>
    </div>
  );
}
export default ProductCard;
