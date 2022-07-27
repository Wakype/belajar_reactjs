import React from "react";
import "../style/style.css";

function Button() {
  return (
    <React.Fragment>
      <button
        style={{
          padding: "10px 100px",
          marginLeft: "10px",
        }}
        className="button"
      >
        Save
      </button>
    </React.Fragment>
  );
}

function Input() {
  return (
    <React.Fragment>
      <input type="text" placeholder="apaaaaaa..." className="input" />
    </React.Fragment>
  );
}

export { Button, Input };
