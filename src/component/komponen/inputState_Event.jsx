import React from "react";

export default function InputStateEvent({
  label,
  isError,
  textError,
  ...props
}) {
  return (
    <div className="input my-2">
      <h1>
        <label className="label cursor-pointer" htmlFor={label}>
          {label}
        </label>
      </h1>

      <input
        {...props}
        className="input-text border border-green-500 rounded w-[300px] py-[5px] hover:border-2 transition-all ease-in-out hover:border-green-600 bg-transparent"
        id={label}
      />
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
