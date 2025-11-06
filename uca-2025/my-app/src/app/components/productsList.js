import ProductCard from "./productCard";

function ProductsList({ products }) {
  return (
    <>
      <div className="flex">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductsList;
