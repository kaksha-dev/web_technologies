import UAlert from "@/common/components/alert";
import DataTable from "@/common/components/dataTable";
import UModal from "@/common/components/uModal";
import "@nodemodules/bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function HomePage() {
  const [books, setBooks] = useState([]);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

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
    fetch("http://localhost:8080/books").then(
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

  const deleteAction = (selectedBook) => {
    console.log("The selected books inside delete is: ", selectedBook);
    setSelectedBook(selectedBook);
    setShowDeleteConfirmationModal(true);
  };

  const deleteBook = () => {
    // Delete the data from backend
    fetch(`http://localhost:8080/books/${selectedBook.id}`, {
      method: "DELETE",
    }).then(
      (response) => {
        // Close the pop up
        setShowDeleteConfirmationModal(false);
        if (response.ok) {
          // Refresh the data if delete is successfull
          setAlertMessage("Book deleted successfully");
          setShowAlert(true);
          fetchData();
        } else {
          setAlertMessage("Book deletion failed");
          setShowAlert(true);
        }
      },
      (error) => {
        // Close the pop up
        setShowDeleteConfirmationModal(false);
        setAlertMessage("Book deletion failed");
        setShowAlert(true);
      }
    );
  };

  return (
    <div className="container">
      <UAlert
        show={showAlert}
        message={alertMessage}
        toggleAlert={() => setShowAlert(!showAlert)}
      />
      <DataTable
        data={books}
        maxSize={10}
        editAction={editAction}
        // onAddBook={addbookHandler}
        deleteAction={deleteAction}
      ></DataTable>
      <UModal
        show={showDeleteConfirmationModal}
        heading={`Delete ?`}
        body={`Are you sure you want to delete ${selectedBook.name} who author is ${selectedBook.author}?`}
        acceptButtonText="Delete"
        handleClose={() => {
          setShowDeleteConfirmationModal(false);
        }}
        handleAccept={deleteBook}
      />
    </div>
  );
}

export default HomePage;
