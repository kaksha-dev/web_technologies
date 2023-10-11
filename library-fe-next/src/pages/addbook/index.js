import UInput from "@/common/components/uInput";

function AddBook() {
  const handleSubmit = (event) => {
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
          alert("Books added succesfully");
        }
      },
      (error) => {}
    );
    debugger;
  };

  return (
    <>
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
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </>
  );
}

export default AddBook;
