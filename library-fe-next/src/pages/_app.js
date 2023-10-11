import Navbar from "@/common/components/Navbar";
import "@nodemodules/bootstrap/dist/css/bootstrap.min.css";

function App({ Component }) {
  return (
    <>
      <Navbar></Navbar>
      <Component></Component>
    </>
  );
}

export default App;
