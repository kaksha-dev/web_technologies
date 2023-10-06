import DataTable from "@/common/components/dataTable";
import Navbar from "@/common/components/Navbar";
import "@nodemodules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function HomePage() {
  const [books, setBooks] = useState([]);
  // let name = "Vaibhav";
  // const books = [
  //   { name: "Book1Name", author: "Book1Author", title: "UCA Web Technologies" },
  //   { name: "Book2Name", author: "Book2Author", title: "UCA Web Technologies" },
  //   { name: "Book3Name", author: "Book3Author", title: "UCA Web Technologies" },
  // ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3001/books").then(
      async (response) => {
        try {
          let booksData = await response.json();
          setBooks(booksData);
        } catch (error) {}
      },
      (error) => {
        alert("Some error occured while fetching data");
      }
    );
  };

  return (
    <div className="container">
      <Navbar />
      <DataTable
        data={books}
        maxSize={10}
        // onAddBook={addbookHandler}
      ></DataTable>
    </div>
  );
}

export default HomePage;
