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

export default function Button({ title, disabled, color = "red", ...props }) {
  return (
    <React.Fragment>
      <button
      disabled={disabled}
        {...props}
        className="button"
        style={{ backgroundColor: color, opacity: disabled ? 0.5 : 1 }}
      >
        {title}
      </button>
    </React.Fragment>
  );
}
