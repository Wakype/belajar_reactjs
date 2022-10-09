import React from "react";

export default function UploadInput({
  label,
  edit,
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
        className={`${edit} cursor-pointer border-green-500 rounded  py-[5px] transition-all ease-in-out bg-transparent`}
        id={label}
      />
      {isError && <p className="error border-red-500 rounded text-red-500 italic">{textError}</p>}
    </div>
  );
}
