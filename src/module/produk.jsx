import React from "react";

export default function DataProduk({ produk }) {
  return (
    <React.Fragment>
      {produk?.map((item) => {
        return (
          <React.Fragment>
            <h3>Jenis: {item.jenis}</h3>
            <h3>Produk: {item.produk}</h3>
            <h1>Tipe</h1>
            <p>{item.brand[0].nama}</p>
            <p>{item.brand[0].harga}</p>
            <p>{item.brand[1].nama}</p>
            <p>{item.brand[1].harga}</p>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}
