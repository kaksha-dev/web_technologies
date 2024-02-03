import Navbar from "@/common/components/Navbar";
import "@nodemodules/bootstrap/dist/css/bootstrap.min.css";

function App({ Component }) {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="col">
          <Component></Component>
        </div>
      </div>
    </>
  );
}

export default App;
