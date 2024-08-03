import style from "./style.module.css";

function UInput({ id, label, placeholder, type, defaultValue }) {
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
        defaultValue={defaultValue}
      ></input>
    </>
  );
}

export default UInput;
