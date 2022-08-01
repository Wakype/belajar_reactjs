import React from "react";
import "./styles/style.css";
import Identitas from "./module/indentitas";
import Nilai from "./module/nilai";
import DataSiswa from "./module/datasiswa";

function App() {
  let [data, setData] = React.useState([10, 20, 30, 40, 50]);
  const [dataSiswa, setDataSiswa] = React.useState([
    {
      nama: "Hilmi",
      kelas: "XI RPL",
      nilai: 100,
    },
    {
      nama: "Harry",
      kelas: "XI TKJ",
      nilai: 90,
    },
    {
      nama: "Abi",
      kelas: "XI RPL",
      nilai: 80,
    },
  ]);
  const [nilaiSiswa, setNilaiSiswa] = React.useState({
    nama: 'Waky',
    kelas: 'XII RPL',
    nilai: [80, 90, 100, 90, 80, 90]
  })

  return (
    <React.Fragment>
      <h1 className="header">Latihan Props</h1>
      <section>
        <Identitas nama={"Hilmi"} kelas={"XI RPL"} nilai={100} />
        <Identitas nama={"Radhy"} kelas={"XI TKJ"} nilai={90} />
        <Identitas nama={"Nabil"} kelas={"XI RPL"} nilai={100} />
        <Identitas nama={"Harry"} kelas={"XI TKJ"} nilai={80} />
        <Identitas />
      </section>

      <Nilai nama={"waky"} data={data} />

      <h1 className="header">Komponen data siswa</h1>
      <section>
        <DataSiswa data1={dataSiswa} nilai={nilaiSiswa} />
      </section>
    </React.Fragment>
  );
}

export default App;
