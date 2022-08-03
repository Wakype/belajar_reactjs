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

export default function Button({ title, color = "red", ...props }) {
  return (
    <React.Fragment>
      <button {...props} className="button" style={{ backgroundColor: color }}>
        {title}
      </button>
    </React.Fragment>
  );
}
