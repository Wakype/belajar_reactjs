import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./pages/home";
import Setting from "./pages/setting";
import About from "./pages/about";
import Button from "./komponen/button";
import Detail from "./pages/detail";
import Detail2 from "./pages/detail2";

function App() {
  return (
    <React.Fragment>
      <section className="space-x-10 border py-5 my-5 mx-7 rounded-md border-2 border-green-700">
        {/* <Link to={'/'}>Home</Link>
        <Link to={'/setting'}>Setting</Link>
        <Link to={'/about'}>About</Link> */}
        <NavLink
          to={"/"}
          style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
          className="ml-8"
        >
          Home
        </NavLink>
        <NavLink
          to={"/setting"}
          className={({ isActive }) => (isActive ? "text-blue-800" : undefined)}
        >
          Setting
        </NavLink>
        <NavLink
          to={"/about"}
          style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        >
          About
        </NavLink>
      </section>
      <Routes>
        <Route path="/" element={<Home label={"klik ini"} />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id/" element={<Detail />} />
        <Route path="about/:id/:nama" element={<Detail2 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
