"use client";

import UAlert from "@/common/components/alert";
import DataTable from "@/common/components/dataTable";
import UModal from "@/common/components/uModal";
import { setBooksData, setBooksCount } from "@/redux/feature/books/slice";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const booksDataFromRedux = useSelector((state) => {
    return state.books.booksData;
  });

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
    fetch("http://localhost:8080/books", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    }).then(
      async (response) => {
        try {
          let booksData = await response.json();
          dispatch(setBooksData(booksData));
          dispatch(setBooksCount(booksData?.length));
        } catch (error) {}
      },
      (error) => {
        alert("Some error occured while fetching data");
      }
    );
  };

  const editAction = (selectedBook) => {
    router.push(`/editbook?id=${selectedBook._id}`, {});
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
        data={booksDataFromRedux}
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

export default Home;
