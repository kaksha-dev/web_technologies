import Link from "next/link";

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
      <Link href="/login">
        <h2>Login</h2>
      </Link>
    </div>
  );
}

export default Header;
