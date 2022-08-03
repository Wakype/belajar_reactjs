import React from "react";

export default function DataProduk({ produk }) {
  return (
    <React.Fragment>
      {produk?.map((item, index) => {
        return (
          <div key={index}>
            <section>
              <div>
                <div className="jenis">
                  <h3>Jenis: {item.jenis}</h3>
                  <h3>Produk: {item.produk}</h3>
                </div>
                <h1 className="tipe">Tipe</h1>
                <div className="brand">
                  {item?.brand?.map((value, index2) => {
                    return (
                      <div key={index2}>
                        <div className="brand1">
                          <p>{value.nama}</p>
                          <p>{value.harga}</p>
                        </div>
                      </div>
                    );
                  })}

                  {/* <div className="brand1">
                    <p>{item.brand[0].nama}</p>
                    <p>{item.brand[0].harga}</p>
                  </div>
                  <div className="brand2">
                    <p>{item.brand[1].nama}</p>
                    <p>{item.brand[1].harga}</p>
                  </div> */}
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </React.Fragment>
  );
}
