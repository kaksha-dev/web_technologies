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
    fetch("http://localhost:3001/books")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBooks(data);
        console.log("The books data is: ", books);
      });
  };

  return (
    <div className="container">
      <Navbar />
      <DataTable data={books} maxSize={10}></DataTable>
    </div>
  );
}

export default HomePage;
