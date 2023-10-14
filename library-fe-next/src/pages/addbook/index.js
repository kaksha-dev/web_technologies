import UAlert from "@/common/components/alert";
import UInput from "@/common/components/uInput";
import UButton from "@/common/components/ubutton";
import { useState } from "react";

function AddBook() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newbook = {
      name: event.currentTarget.name.value,
      author: event.currentTarget.author.value,
      title: event.currentTarget.title.value,
    };
    fetch("http://localhost:3001/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newbook),
    }).then(
      (response) => {
        debugger;
        if (response.ok) {
          setShowAlert(true);
        }
      },
      (error) => {}
    );
    debugger;
  };

  const toggleAlert = (value) => {
    setShowAlert(value);
  };

  return (
    <>
      <UAlert
        message="Book added successfully"
        show={showAlert}
        toggleAlert={toggleAlert}
      />
      <form onSubmit={handleSubmit}>
        <UInput
          id="name"
          placeholder="Enter Book Name"
          label="Book Name"
          type="text"
        />
        <UInput
          id="author"
          placeholder="Enter Author Name"
          label="Author Name"
          type="text"
        />
        <UInput
          id="title"
          placeholder="Enter Book Title"
          label="Book Title"
          type="text"
        />
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <UButton type="submit" variant="primary">
            Submit
          </UButton>
        </div>
      </form>
    </>
  );
}

export default AddBook;
