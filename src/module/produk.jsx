import React from "react";

export default function DataProduk({ produk }) {
  return (
    <React.Fragment>
      {produk?.map((item) => {
        return (
          <React.Fragment>
            <section>
              <div>
                <div className="jenis">
                  <h3>Jenis: {item.jenis}</h3>
                  <h3>Produk: {item.produk}</h3>
                </div>
                <h1 className="tipe">Tipe</h1>
                <div className="brand">
                  <div className="brand1">
                    <p>{item.brand[0].nama}</p>
                    <p>{item.brand[0].harga}</p>
                  </div>
                  <div className="brand2">
                    <p>{item.brand[1].nama}</p>
                    <p>{item.brand[1].harga}</p>
                  </div>
                </div>
              </div>
            </section>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}
