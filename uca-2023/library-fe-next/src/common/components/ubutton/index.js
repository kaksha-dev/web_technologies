function UButton({ type, variant, onClick, children }) {
  return (
    <span style={{ padding: "5px" }}>
      <button className={`btn btn-${variant}`} type={type} onClick={onClick}>
        {children}
      </button>
    </span>
  );
}

export default UButton;
