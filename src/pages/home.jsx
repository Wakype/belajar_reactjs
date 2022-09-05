import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ label }) {
  const [msg, setMsg] = React.useState('belum login');
  const navigate = useNavigate();

  const handleLogin = (() => {
    setMsg('proses login');
    return navigate("setting/computer/asus", {replace: true});
  })

  return (
    <div>
      <h1>ini Home</h1>
        <button className="border border-green-500 rounded py-2 px-4 mt-3">{label}</button>
        {msg}
        <button className="border border-green-500 rounded py-2 px-4 mt-3" onClick={handleLogin}>Login</button>
    </div>
  );
}
