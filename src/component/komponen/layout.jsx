import React from "react";

export default function Layout({children, title}) {
  return (
    <div className="layout">
      <p>{title}</p>
      {children}
    </div>
  );
}
