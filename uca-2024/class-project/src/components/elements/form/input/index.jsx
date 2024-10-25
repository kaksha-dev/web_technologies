export function Input(props) {
  const outer = () => {
    let innerFunctionValues;
    inner(
      (params) => {
        innerFunctionValues = params;
      },
      (params) => {
        innerFunctionValues = params;
      }
    );
    console.log("value from inner", innerFunctionValues);
  };

  const inner = (foo1, foo2) => {
    let x = 10;
    let y = 20;
    // return [x, y]
    foo1(x);
    foo2(y);
  };

  outer();

  return (
    <>
      <label htmlFor="productName" className="form-label">
        {props.label}
      </label>
      <input
        type="text"
        className="form-control"
        id={props.id}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
      />
    </>
  );
}
