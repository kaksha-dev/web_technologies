import Button from "./button";

function ProductCard({ product }) {
  return (
    <div style={{ border: "2px solid black", margin: "10px", padding: "5px" }}>
      <img src={product.image} alt="Product Image" />
      <div className="text-center text-sm">{product.name}</div>
      <div
        style={{ display: "flex", justifyContent: "center", lineHeight: "2" }}
        className="text-xs py-1"
      >
        <div>{product.price}</div> &nbsp; &nbsp;
        {/* <div>{product.category}</div> */}
        <div className="rounded-md bg-slate-800 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
          {product.category}
        </div>
      </div>
      <div style={{ textAlign: "center", paddingTop: "5px" }}>
        <Button variant="light">Add to Cart</Button>
      </div>
    </div>
  );
}
export default ProductCard;
