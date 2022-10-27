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
        className="input-text px-2 border border-green-500 rounded w-[300px] py-[5px] hover:border-1 transition-all ease-in-out hover:border-green-800 bg-transparent"
        id={label}
      />
      {isError && <p className="error border-red-500 rounded text-red-500 italic">{textError}</p>}
    </div>
  );
}
