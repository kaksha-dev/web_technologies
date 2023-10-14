import DataTable from "@/common/components/dataTable";
import "@nodemodules/bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function HomePage() {
  const [books, setBooks] = useState([]);
  const router = useRouter();
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

  const editAction = (selectedBook) => {
    console.log("The selected data is : ", selectedBook);
    router.push({ pathname: "/editbook", query: selectedBook }, "/editbook");
    // router.push("/editbook");
  };

  return (
    <div className="container">
      <DataTable
        data={books}
        maxSize={10}
        editAction={editAction}
        // onAddBook={addbookHandler}
      ></DataTable>
      <div style={{ margin: "20px", paddingLeft: "300px" }}></div>
    </div>
  );
}

export default HomePage;
