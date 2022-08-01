import React from "react";

export default function DataSiswa({ data1, nilai }) {
  return (
    <React.Fragment>
      {data1?.map(function (item, index) {
        return (
            <div className="identitas">
              <p>Nama: {item.nama}</p>
              <p>Kelas: {item.kelas}</p>
              <p>Nilai: {item.nilai}</p>
            </div>
        );
      })}
        <div className="identitas"  >
            <p>Nama: {nilai.nama}</p>
            <p>Kelas: {nilai.kelas}</p>
            <p>Nilai: {nilai.nilai?.map((item) => {
                return <p>{item}</p>
            })}</p>
        </div>
    </React.Fragment>
  );
}
