import React from "react";

export default function Card({ data, value, setValue, setData }) {
  console.log("data adalah", data);

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("deleted");

    let filter = data.filter((item) => {
      return item.id !== parseFloat(e.target.value);
    });
    console.log("ini filter ", filter);
    setData(() => {
      return filter;
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault()
    console.log('updated');
  }

  return (
    <React.Fragment>
      {data?.map((item) => {
        return (
          <div className="card">
            <h3>DATA LIST</h3>
            <p>id : {item?.id}</p>
            <p>Username: {item.username}</p>
            <p>Email: {item.email}</p>
            <p>Tempat Lahir: {item.tempatLahir}</p>
            <p>Tanggal Lahir: {item.tanggalLahir}</p>
            <p>Jenis Kelamin: {item.jenisKelamin}</p>
            <p>Password: {item.password}</p>
            <p>Confirm Password: {item.confirmPassword}</p>
            <button value={item?.id} onClick={handleDelete}>Hapus</button>
            <button onClick={handleUpdate}>Update</button>
          </div>
        );
      })}
    </React.Fragment>
  );
}
