import UAlert from "@/common/components/alert";
import UInput from "@/common/components/uInput";
import UButton from "@/common/components/ubutton";
import { useRouter } from "next/router";
import { useState } from "react";

function EditBook() {
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();
  console.log("The selected book in edit books is: ", router.query);

  const selectedBook = router.query;
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBook = {
      name: event.currentTarget.name.value,
      author: event.currentTarget.author.value,
      title: event.currentTarget.title.value,
    };

    fetch(`http://localhost:3001/books/${selectedBook.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
    <>
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
    </>
  );
}

export default EditBook;
