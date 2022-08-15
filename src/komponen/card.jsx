import React from "react";

export default function Card({count, setCount}) {
    let handleTambah = () => {
        setCount(count + 1)
    }

  return (
    <React.Fragment>
      <p>ini Card.jsx</p>
      {count}
      <button onClick={handleTambah}>Tambah</button>
      <button>Kurang</button>
    </React.Fragment>
  );
}
