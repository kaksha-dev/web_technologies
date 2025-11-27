import Link from "next/link";
import Button from "./button";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "grey",
        padding: "1px 20px",
        margin: "0px -20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link href="/">
        <h1>E-Com</h1>
      </Link>
      <div style={{ margin: "5px" }}>
        <Button variant="primary">
          <Link href="/login">
            <h2>Login</h2>
          </Link>
        </Button>
        <Button variant="primary">
          <Link href="/addproduct">
            <h2>Add Product</h2>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Header;
