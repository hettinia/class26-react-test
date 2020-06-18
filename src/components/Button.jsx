import React from "react";

export default function Button(props) {
  return (
    <div>
      <button className={props.calssName} onClick={props.onClick}>
        {props.buttonTitle}
      </button>
    </div>
  );
}
