import React from "react";
import DataProduk from "./module/produk";
import "./style/style.css"

function App() {
  let [produk, setProduk] = React.useState([
    {
      jenis: "elektronik",
      produk: "handphone",
      brand: [
        {
          nama: "Samsung",
          harga: "Rp. 1.000.000",
        },
        {
          nama: "Xiaomi",
          harga: "Rp. 500.000",
        },
      ],
    },
    {
      jenis: "Transportasi",
      produk: "Mobil",
      brand: [
        {
          nama: "Toyota",
          harga: "Rp. 1.000.000,000",
        },
        {
          nama: "Honda",
          harga: "Rp500.000.00",
        },
      ],
    },
  ]);
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Latihan1</h1>
      <h1 style={{ textAlign: "center" }}>Data produk di Indonesia</h1>

      <DataProduk produk={produk}/>
    </React.Fragment>
  );
}

export default App;
