import style from "./style.module.css";

function UInput({ id, label, placeholder, type, value }) {
  return (
    <>
      <label htmlFor={id} className={style["label"]}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        value={value}
      ></input>
    </>
  );
}

export default UInput;
