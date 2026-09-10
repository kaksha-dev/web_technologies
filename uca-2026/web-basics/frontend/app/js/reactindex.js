const app = document.getElementById("reactapp");
const root = ReactDOM.createRoot(app);

root.render(
  <>
    <ReactTitle title="React Application"></ReactTitle>

    <ManualLikes></ManualLikes>
    <RenderProducts></RenderProducts>
    <Form></Form>
  </>,
);

function ReactTitle(props) {
  console.log("ReactTitle props: ", props);
  return <h2>{props.title}</h2>;
}

function RenderProducts() {
  const [productsList, setProductsList] = React.useState([]);
  const [likes, setLikes] = React.useState(0);

  let localLikes = 0;

  React.useEffect(() => {
    setTimeout(() => {
      setProductsList(productListFromServer);
    }, 2000);
  }, []);

  function updateLocalVariableLikes() {
    localLikes = localLikes + 1;
    setLikes(likes + 1);
    console.log("State Likes after incrementing", likes);
    console.log("Local Likes after incrementing", localLikes);
  }

  return (
    <>
      {productsList.length === 0 ? (
        <h3>Loading data from server...</h3>
      ) : (
        <table>
          <thead>
            <th>Sr. No.</th>
            <th>Product Name</th>
            <th>Price</th>
          </thead>
          <tbody>
            {productsList.map((item) => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <Button
        clickEventHandler={updateLocalVariableLikes}
        text="Update local variable Likes"
      ></Button>
    </>
  );
}

function Form() {
  const [formElements, setFormElements] = React.useState(["id1", "id2", "id3"]);

  function reverseOrderOfFormElements() {
    const reversedFormElements = [...formElements].reverse();
    setFormElements(reversedFormElements);
  }

  return (
    <>
      <form>
        {formElements.map((item) => {
          return (
            <div style={{ padding: "10px" }} key={item}>
              <input type="text" placeholder={`Place holder for - ${item}`} />
            </div>
          );
        })}
      </form>
      <Button
        clickEventHandler={reverseOrderOfFormElements}
        text="Reverse Order of Form Elements"
      ></Button>
    </>
  );
}

function Button(props) {
  // Props: text, eventhandler,
  // style (mostly generic and not part of the prod )

  return (
    <div style={{ padding: "10px" }}>
      <button onClick={props.clickEventHandler}>{props.text}</button>;
    </div>
  );
}

// DOM update w.r.t. the browser is kind of equivalent to saying a component re-render
// Step1: Update the local state of the component
// Step2: React will re-render the component and update the DOM w.r.t. the browser
// Step3: React to send the state updates to backend apis
function ManualLikes() {
  const [likes, setLikes] = React.useState(0);

  // Accepts 2 arguments
  // Arg1: Callback function to be executed
  // Arg2: Array of dependencies, if any of the dependencies change, then the callback function will be executed
  React.useEffect(() => {
    // fetch api calls to update the likes count in the backend
  }, [likes]);

  // let likes = 0;

  // function incrementLikes() {
  //   console.log("Incrementing likes");
  //   likes = likes + 1;
  // }

  // State updates are always asynchronous
  function incrementLikes() {
    setLikes(likes + 1);
    // fetch api calls to update the likes count in the backend
    console.log("Likes after incrementing", likes);
  }

  return (
    <>
      <div>Likes: {likes}</div>
      <Button
        text="Increment Likes"
        clickEventHandler={incrementLikes}
      ></Button>
    </>
  );
}

// Updating the UI on some event
// Strict mode dicussion
// React hooks

// Version 1: Call the useEffect on every re-render
// React.useEffect(() => {
//   // Do something on every re-render, e.g. how many data is updated
// });

// // Version 2: Call the useEffect once only when the component is mounted, and not on every re-render
// // E.g. getch the productList at the time of initlization of the component
// React.useEffect(() => {
//   // Do something when the component is mounted, e.g. fetch the productList from the backend
// }, []);

// // Version 3: Using useEffect to update the backend when likes change
// // It can accepts multiple dependencies (state variables), and the callback function will be executed when any of the dependencies change
// React.useEffect(() => {
//   // fetch api calls to update the likes count in the backend
// }, [likes, prop2]);
