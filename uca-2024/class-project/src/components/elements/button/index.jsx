export function Button(props) {
  return (
    <>
      <div style={{margin: '0px 5px'}}>
        <button className={`btn btn-${props.type}`} onClick={props.onClick}>
            {props.children}
        </button>
      </div>
    </>
  );
}
