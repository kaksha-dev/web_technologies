"use client";

import UAlert from "@/common/components/alert";
import AuthGuard from "@/common/components/authGuard";
import UInput from "@/common/components/uInput";
import UButton from "@/common/components/ubutton";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function EditBook() {
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedBookId = searchParams.get("id");

  const [selectedBook, setSelectedBook] = useState({});
  const booksDataFromRedux = useSelector((state) => {
    return state.books.booksData;
  });

  useEffect(() => {
    if (selectedBookId && booksDataFromRedux.length > 0) {
      const selectedBook = booksDataFromRedux.find(
        (item) => item._id === selectedBookId
      );
      setSelectedBook(selectedBook);
    }
  }, [booksDataFromRedux, selectedBookId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBook = {
      name: event.currentTarget.name.value,
      author: event.currentTarget.author.value,
      title: event.currentTarget.title.value,
    };

    fetch(`http://localhost:8080/books/${selectedBook._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("authToken"),
      },
      body: JSON.stringify(updatedBook),
    }).then(
      (response) => {
        if (response.ok) {
          setShowAlert(true);
          setTimeout(() => {
            router.push("/");
          }, 2000);
        }
      },
      (error) => {}
    );
  };

  const toggleAlert = (value) => {
    setShowAlert(value);
  };

  return (
    <AuthGuard>
      <div>
        <UAlert
          message="Book updated successfully"
          show={showAlert}
          toggleAlert={toggleAlert}
        />
        <form onSubmit={handleSubmit}>
          <UInput
            id="name"
            placeholder="Enter Book Name"
            label="Book Name"
            type="text"
            defaultValue={selectedBook?.name}
          />
          <UInput
            id="author"
            placeholder="Enter Author Name"
            label="Author Name"
            type="text"
            defaultValue={selectedBook?.author}
          />
          <UInput
            id="title"
            placeholder="Enter Book Title"
            label="Book Title"
            type="text"
            defaultValue={selectedBook?.title}
          />
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <UButton type="submit" variant="primary">
              Submit
            </UButton>
            <UButton type="reset" variant="secondary">
              Reset
            </UButton>
          </div>
        </form>
      </div>
    </AuthGuard>
  );
}

export default EditBook;
