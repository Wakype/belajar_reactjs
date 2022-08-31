import React from "react";
export default function Produk({ data }) {
  return (
    <React.Fragment>
      <h1>Data Produk di Indonesia</h1>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <h3>Jenis : {item.jenis}</h3>
            <h3>produk : {item.produk}</h3>
            <div>
              <h2>Tipe</h2>
              <div>
                {item?.brand?.map((value, index) => {
                  return (
                    <div>
                      <p>{value.nama}</p>
                      <p>{value.harga}</p>
                      <p></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
