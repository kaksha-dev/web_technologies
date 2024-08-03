import style from "./style.module.css";

function UAlert({ message, show, toggleAlert }) {
  return (
    <>
      {show && (
        <div className={style["container"]}>
          <div className="alert alert-success alert-dismissible" role="alert">
            <div>{message}</div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                toggleAlert(false);
              }}
            ></button>
          </div>
        </div>
      )}
    </>
  );
}

export default UAlert;
