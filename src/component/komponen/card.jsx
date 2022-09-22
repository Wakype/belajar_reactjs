import React from "react";

export default function Card({ data, value, setData }) {
  console.log("data adalah", data);
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("deleted");

    let filter = data.filter((item) => {
      return item.id !== parseFloat(e.target.value);
    });
    console.log(filter);
    setData(() => {
      return filter
    })
  };

  return (
    <React.Fragment>
      {data?.map((item) => {
        return (
          <div className="card">
            <p>id : {item?.id}</p>
            <h3>DATA LIST</h3>
            <p>Username: {item.username}</p>
            <p>Email: {item.email}</p>
            <p>Password: {item.password}</p>
            <p>Confirm Password: {item.confirmPassword}</p>
            <button onClick={handleDelete}>Hapus</button>
          </div>
        );
      })}
    </React.Fragment>
  );
}
