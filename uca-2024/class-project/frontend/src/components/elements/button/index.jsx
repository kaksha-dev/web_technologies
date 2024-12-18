/* eslint-disable react/display-name */
import { memo } from "react";

export const Button = memo(function (props) {
  return (
    <>
      <div style={{ margin: "0px 5px" }}>
        <button className={`btn btn-${props.type}`} onClick={props.onClick}>
          {props.children}
        </button>
      </div>
    </>
  );
});

// Button component is re-rendering because:
// - Parent is re-rendering - Fix using memo function
// - function props is updating

// To memoise components - memo
// To memoise values - useMemo
// To memoise function - useCallback
