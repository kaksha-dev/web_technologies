import Header from "@/app/components/header";

export const metadata = {
  title: "Product Details Page | E-Commerce App",
};

function PDPLayout({ children }) {
  return (
    <>
      <PDPHeader></PDPHeader>
      {children}
    </>
  );
}

function PDPHeader({ children }) {
  return <div>PDP Header</div>;
}
export default PDPLayout;
