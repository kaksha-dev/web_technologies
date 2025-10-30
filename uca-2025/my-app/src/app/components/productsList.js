import ProductCard from "./productCard";

function ProductsList({ products }) {
  return (
    <>
      <div style={{ display: "flex" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductsList;
