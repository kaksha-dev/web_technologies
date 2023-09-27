function Button(props) {
  return (
    <span style={{ padding: "5px" }}>
      <button className={`btn btn-${props.type}`}>{props.children}</button>
    </span>
  );
}

export default Button;
