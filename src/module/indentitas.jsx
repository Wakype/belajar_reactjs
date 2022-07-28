import React from "react";

export default function Identitas({ nama = "siswa", kelas = "X", nilai = 0 }) {
  return (
    <React.Fragment>
      <div className="identitas">
        <p>Nama: {nama}</p>
        <p>Kelas: {kelas}</p>
        <p>Nilai: {nilai}</p>
      </div>
    </React.Fragment>
  );
}
