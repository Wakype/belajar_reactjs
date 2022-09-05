import React from "react";
import { Route, Routes, Link, NavLink, Navigate } from "react-router-dom";
import Button from "./komponen/button";
import {
  Home,
  Setting,
  About,
  Detail,
  Detail2,
  NotFound,
  Computer,
  Phone,
  Profile,
  Lenovo,
  Asus,
  Hp,
} from "./pages";

function App() {
  return (
    <React.Fragment>
      <section className="flex">
        <section className="flex flex-col space-y-10 py-5 w-[200px] h-screen bg-[#25316D] text-center">
          {/* <Link to={'/'}>Home</Link>
        <Link to={'/setting'}>Setting</Link>
        <Link to={'/about'}>About</Link> */}
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
            className=""
          >
            Home
          </NavLink>
          <NavLink
            to={"/palabapa"}
            className={({ isActive }) => (isActive ? "bg-red-500" : undefined)}
          >
            Setting
          </NavLink>
          <NavLink
            to={"/about"}
            style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
          >
            about
          </NavLink>
        </section>
        <section className="">
          <Routes>
            <Route path="/" element={<Home label={"klik ini"} />} />
            <Route path="/palabapa" element={<Setting />}>
              <Route path="profile" element={<Profile />} />
              <Route path="phone" element={<Phone />} />
              <Route path="computer" element={<Computer />}>
                <Route path="asus" element={<Asus />} />
                <Route path="lenovo" element={<Lenovo />} />
                <Route path="hp" element={<Hp />} />
              </Route>
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/about/:id/" element={<Detail />} />
            <Route path="about/:id/:nama/" element={<Detail2 />} />
            <Route path="/error404" element={<NotFound />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/error404" replace />} />
          </Routes>
        </section>
      </section>
    </React.Fragment>
  );
}

export default App;
