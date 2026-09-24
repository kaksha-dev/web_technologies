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
  props.title = "React Application Updated";
  console.log("ReactTitle props: ", props);
  return <h2>{props.title}</h2>;
}
// DOM update w.r.t. the browser is kind of equivalent to saying a component re-render
// Step1: Update the local state of the component
// Step2: React will re-render the component and update the DOM w.r.t. the browser
// Step3: React to send the state updates to backend apis
function ManualLikes() {
  const [likes, setLikes] = React.useState(0);
  const [date, setDate] = React.useState(new Date());
  // const [result, setResult] = React.useState(0);

  // Try with ref first
  // const refInput = React.useRef(null);
  // Try with useState
  const [number, setNumber] = React.useState(5);

  // Accepts 2 arguments
  // Arg1: Callback function to be executed
  // Arg2: Array of dependencies, if any of the dependencies change, then the callback function will be executed
  React.useEffect(() => {
    // fetch api calls to update the likes count in the backend
  }, [likes]);

  // If a state is dependent on another state then do not create the state and do not use the useEffect()
  // as this leads increase in number of re-renders
  // We should use a normal JS reference variable together useMemo
  // React.useEffect(() => {
  //   calculateFibLastValue();
  // }, [number]);

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

  function getInputValue(event) {
    console.log("The input element is : ", event.target.value);
    setNumber(event.target.value);
  }

  // function calculateFibLastValue() {
  //   console.log("Calculating fibonacci number");
  //   // logic to impemlent
  //   // console.log("ref Input", refInput.current.value);
  //   // const num = refInput.current.value;
  //   let previous1 = 0;
  //   let previous2 = 1;
  //   let result = 0;
  //   for (let i = 2; i <= number; i++) {
  //     result = previous1 + previous2;
  //     previous2 = previous1;
  //     previous1 = result;
  //   }
  //   return result;
  //   // setResult(result);
  // }

  // function calculateFibLastValue() {
  //   console.log("Calculating fibonacci number");
  //   // logic to impemlent
  //   // console.log("ref Input", refInput.current.value);
  //   // const num = refInput.current.value;
  //   let previous1 = 0;
  //   let previous2 = 1;
  //   let result = 0;
  //   for (let i = 2; i <= number; i++) {
  //     result = previous1 + previous2;
  //     previous2 = previous1;
  //     previous1 = result;
  //   }
  //   return result;
  //   // setResult(result);
  // }

  const calculateFibLastValue = React.useCallback(
    function () {
      console.log("Calculating fibonacci number");
      // logic to impemlent
      // console.log("ref Input", refInput.current.value);
      // const num = refInput.current.value;
      let previous1 = 0;
      let previous2 = 1;
      let result = 0;
      for (let i = 2; i <= number; i++) {
        result = previous1 + previous2;
        previous2 = previous1;
        previous1 = result;
      }
      return result;
      // setResult(result);
    },
    [number],
  );

  // Impementation 2 - without state and without useEffect
  // const result = calculateFibLastValue();

  // Impementation 3 - without state and without useEffect but with useMemo now
  const result = React.useMemo(calculateFibLastValue, [number]);

  return (
    <>
      <div>Likes: {likes}</div>
      <div style={{ border: "1px solid black", padding: "5px" }}>
        <input
          type="number"
          placeholder="Enter the Number"
          onChange={getInputValue}
          value={number}
          // ref={refInput}
        ></input>
        <div style={{ padding: "5px" }}>Result : {result}</div>
        <Button
          clickEventHandler={calculateFibLastValue}
          text="Calculate Fibonacci Number"
        ></Button>
      </div>
      <Button
        text="Increment Likes"
        clickEventHandler={incrementLikes}
      ></Button>
    </>
  );
}

function RenderProducts() {
  const [productsList, setProductsList] = React.useState([]);
  const [likes, setLikes] = React.useState(0);

  let localLikes = 0;
  const localLikesUsingRef = React.useRef(0);
  const elementRefUsingRef = React.useRef({});

  React.useEffect(() => {
    console.log("State Likes after incrementing", likes);
    setTimeout(() => {
      setProductsList(productListFromServer);
    }, 2000);
  }, []);

  React.useMemo(() => {
    // generate value / compute the value depending on the defination of this function
  }, []);

  function updateLocalVariableLikes() {
    localLikes = localLikes + 1;
    setLikes(likes + 1);
    localLikesUsingRef.current = localLikesUsingRef.current + 1;
    // console.log("State Likes after incrementing", likes);
    console.log("Local Likes after incrementing", localLikes);
    console.log(
      "Local Likes using Ref after incrementing",
      localLikesUsingRef.current,
    );
    console.log(
      "elementRefUsingRef value is: ",
      elementRefUsingRef.current.innerHTML,
    );
  }

  return (
    <>
      {productsList.length === 0 ? (
        <h3>Loading data from server...</h3>
      ) : (
        <RTable productsList={productsList}></RTable>
      )}
      <Button
        clickEventHandler={updateLocalVariableLikes}
        text="Update local variable Likes"
      ></Button>
      <p ref={elementRefUsingRef}>Hello p tag</p>
    </>
  );
}

function Form() {
  const [formElements, setFormElements] = React.useState(["id1", "id2", "id3"]);

  function reverseOrderOfFormElements() {
    console.log("Reversing order of form elements");
    // const reversedFormElements = [...formElements].reverse();
    // setFormElements(reversedFormElements);

    setFormElements((currentFormElements) => {
      currentFormElements.push("id4");
      return currentFormElements;
    });
  }

  const reverseOrderOfFormElementsMemoized = React.useCallback(
    reverseOrderOfFormElements,
    [],
  );

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
      {/* <Button
        clickEventHandler={reverseOrderOfFormElements}
        text="Reverse Order of Form Elements"
      ></Button> */}
      <MemoizedButton
        clickEventHandler={reverseOrderOfFormElementsMemoized}
        text="Reverse Order of Form Elements"
      ></MemoizedButton>
    </>
  );
}

function Button(props) {
  // Props: text, eventhandler,
  // style (mostly generic and not part of the prod )
  console.log("Button component rerendering with props: ", props);

  return (
    <div style={{ padding: "10px" }}>
      <button onClick={props.clickEventHandler}>{props.text}</button>;
    </div>
  );
}

function RTable(props) {
  return (
    <>
      <table>
        <thead>
          <th>Sr. No.</th>
          <th>Product Name</th>
          <th>Price</th>
        </thead>
        <tbody>
          {props.productsList.map((item) => {
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
    </>
  );
}

const MemoizedButton = React.memo(Button);

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
