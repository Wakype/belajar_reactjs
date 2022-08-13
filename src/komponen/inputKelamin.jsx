import React from "react";

export default function InputKelamin({ label, isError, textError, ...props }) {
  return (
    <div className="input">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <select {...props} className="input-text" id={label} >
        <option value="Pilih">Pilih Kelamin</option>
        <option value="Pria">Pria</option>
        <option value="Wanita">Wanita</option>
      </select>
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
