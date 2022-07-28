import React from "react";
import "./styles/style.css";
import Identitas from "./module/indentitas";
import Nilai from "./module/nilai";

function App() {
  let [data, setData] = React.useState([10, 20, 30, 40, 50]);

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
    </React.Fragment>
  );
}

export default App;
