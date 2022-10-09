import React from "react";

// export default function Button({
//   title,
//   color = "red",
//   onClick,
//   name,
//   id,
//   disable = false,
// }) {
//   return (
//     <React.Fragment>
//       <button
//         name={name}
//         id={id}
//         disabled={disable}
//         onClick={onClick}
//         className="button"
//         style={{ backgroundColor: color }}
//       >
//         {title}
//       </button>
//     </React.Fragment>
//   );
// }

export default function Button({ title, disabled, edit, color = "red", ...props }) {
  return (
    <React.Fragment>
      <button
        {...props}
        className={`${edit} button border border-green-500 rounded px-3 py-1 hover:bg-green-500 transition-all ease-in-out hover:text-white hover:shadow-lg`}
        style={{ opacity: disabled ? 0.5 : 1 }}
      >
        {title}
      </button>
    </React.Fragment>
  );
}
