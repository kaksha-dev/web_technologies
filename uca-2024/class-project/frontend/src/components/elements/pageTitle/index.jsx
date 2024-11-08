export function PageTitle(props) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>
          <span className="badge text-bg-secondary">{props.children}</span>
        </h2>
      </div>
    </>
  );
}
