import React from "react";

export default function GetButton(props) {
  return (
    <div>
      <button className="get-btn" onClick={props.onClick}>
        Get new users
      </button>
    </div>
  );
}
