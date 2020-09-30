import React from "react";

function Botton(props) {
  return (
    <button value={props.children} onClick={props.onClick} type="button">
      {props.children}
    </button>
  );
}
export default Botton;
