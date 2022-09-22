import React from "react";

export default function Select({
  label,
  isError,
  textError,
  children,
  ...props
}) {
  return (
    <div className="input my-2">
      <h1>
        <label className="label cursor-pointer" htmlFor={label}>
          {label}
        </label>
      </h1>

      <select {...props} className="input-text border border-green-500  rounded w-[300px] py-[5px] hover:border-green-600 hover:border-2 transition-all ease-in-out bg-transparent">
        {children}
      </select>
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
