var app = document.getElementById("reactapp");
var root = ReactDOM.createRoot(app);

// state
// props
// components
// component re-rendering
// hooks - useState, useEffect
// /hide/show elements
// virtual DOM and performance optimization
// rendering lists

// function foo(arg1) {
//     console.log(arg1)
// }
// foo("Test");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div>
      <DescriptionComponent name="Valid Name"></DescriptionComponent>
      <LikesComponent></LikesComponent>
      <Likes2Component></Likes2Component>
      <ProductComponent></ProductComponent>
      <FormComponent></FormComponent>
    </div>
  );
}

function DescriptionComponent(props) {
  // props are immutable
  //   props.name = "Valid modified Name"; // Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
  return (
    <>
      <h1>React Managed code {props.name ?? "Guest User"}</h1>
      <p>Web site description here</p>
    </>
  );
}

// DOM update w.r.t. browser is equivalent to saying a component re-render
function LikesComponent(props) {
  //   let likes = 25;
  //   function setLikes() {
  //     likes = likes + 1;
  //     console.log("Likes", likes);
  //   }
  // SET STATE METHODS ARE ASYNCHRONOUS
  let [likes, setlikes] = React.useState(0);

  let likesLocal = 1;

  function updateLikes() {
    setlikes(likes + 1);
    console.log("Likes", likes);
    likesLocal = likesLocal + 1;
  }

  function updateDisLikes() {
    setlikes(likes + 1);
    console.log("Likes", likes);
  }

  return (
    <>
      <p>Likes {likes}</p>
      <Button label="Like" clickBehavior={updateLikes} />
      <Button label="DisLike" clickBehavior={updateDisLikes} />
      <br />
    </>
  );
}

function Likes2Component(props) {
  const [liked, setLiked] = React.useState("no");
  // let initialLikesCount = useRef(20);

  // No array
  React.useEffect(() => {
    // called on every re-render
  });

  // ---------------------------------------------------------
  // Empty array - Correct
  React.useEffect(() => {
    // fetch the backend data
    const data = fetchData();
    // initialLikesCount = data
    // return () => {}; // cleanup function
  }, []);
  function fetchData() {
    // code to fetch data from backend
  }
  fetchData(); // This will lead fetchData functiion being called on every re-render
  // let likes =20; // This will lead initilization of likes to 20 on every re-render
  // ---------------------------------------------------------

  // Array with dependencies
  React.useEffect(() => {
    // send liked data backend
  }, [liked]);

  const updateLiked = () => {
    if (liked === "no") {
      setLiked("yes");
    } else {
      setLiked("no");
    }
  };
  return (
    <>
      <br />
      <section>This is my first comment</section>
      <p>Liked - {liked}</p>
      <Button
        label={liked === "no" ? "Like" : "Dislike"}
        clickBehavior={updateLiked}
      ></Button>
    </>
  );
}

function ProductComponent(props) {
  const [productsList, setProductsList] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setProductsList(productsListFromServer);
    }, 2000);
  }, []);

  const [show, setShow] = React.useState(false);

  function toggleDisplayText() {
    show ? setShow(false) : setShow(true);
  }
  return (
    <>
      <h3>Products List</h3>
      {productsList.length === 0 ? (
        <p>Loading data from server...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((product, index) => {
              return (
                <tr key={`index-${product.name}`}>
                  <td>${index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      `{show ? <p> {show ? "Welcome user" : ""} </p> : ""}
      <Button label="Show Welcome text" clickBehavior={toggleDisplayText} />
    </>
  );
}

// Relevance of key prop in lists
function FormComponent(props) {
  const tempVariable = React.useRef(10);
  const [array1, setArray1] = React.useState([
    "Textbox1",
    "Textbox2",
    "Textbox3",
  ]);

  React.useEffect(() => {
    // fetchProductList();
  }, [array1]);

  const changeOrder = () => {
    const updatedArray1 = [...array1].reverse();
    setArray1(updatedArray1);

    // tempVariable = tempVariable + 10;
    tempVariable.current = tempVariable.current + 10;
    console.log("New value of temp variable", tempVariable);
  };

  return (
    <div>
      {array1.map((item, index) => {
        return (
          <div key={item}>
            <input placeholder={item} />
          </div>
        );
      })}

      <Button label="Change Order" clickBehavior={changeOrder}>
        <div>Hello World</div>
      </Button>
      <button></button>
    </div>
  );
}

function Button(props) {
  console.log("Butoon props", props);
  return (
    <button
      style={{
        margin: "5px",
        padding: "5px",
        border: "2px solid black",
        fontWeight: 500,
      }}
      onClick={props.clickBehavior}
    >
      {props.label}
    </button>
  );
}

// Component is updated / re-renderd in below 3 cases
// 1. Props change
// 2. State change
// 3. Parent component re-renders

/**
 * React hooks: These are the methods or functions provided by React in order to do something
 * custom while the component is rendering, re-rendering, unmounting etc, or even to trigger a render,
 * to manage when the components is flushed ouit of the DOM
 * - useState
 * - useEffect etc...
 * takes 2 argunets - 1st - what to do, 2nd - when to do
 * 2nd when to do has 3 variation decided by an array
 *   - empty array - [] - do it only once when the component is mounted
 *   - no array - do it everytime the component is rendered
 *   - array with variables - [var1, var2] - do it only when any of these variables change
 * - custom hooks .....
 *  */
//
// is flused ouit of these
//  - useState
//  - useEffect - takes 2 argunets - 1st - what to do, 2nd - when to do
