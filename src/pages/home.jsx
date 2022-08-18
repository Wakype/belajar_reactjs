import React from "react";

export default function Home({ label }) {
  return (
    <div>
      <h1>ini home</h1>
      <a href="/about">
        <button className="border border-green-500 rounded py-2 px-4 mt-3">{label}</button>
      </a>
    </div>
  );
}
