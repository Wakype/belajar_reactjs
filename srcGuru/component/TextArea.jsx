import React from "react";

export default function TextArea({ title, error = false,...props }) {
  return (
    <div className="flex flex-col">
     
      <textarea
        rows="10"
        cols="50"
        {...props}
        id={title}
        className={` ${
            error ? "border-red-300 border-2" : ""
          } border w-full rounded-md px-2 py-1`}
      ></textarea>
       {error && <p className="text-red-500 text-sm italic ">Wajib disii</p>}
    </div>
  );
}
