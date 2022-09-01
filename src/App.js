import React from "react";
import { Route, Routes, Link, NavLink, Navigate } from "react-router-dom";
import Button from "./komponen/button";
import {Home, Setting, About, Detail, Detail2, NotFound, Computer, Phone, Profile} from "./pages"

function App() {
  return (
    <React.Fragment>
      <section className="space-x-10 py-5 border-b-2 border-green-700">
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
          about
        </NavLink>
      </section>
      <section className="">
      <Routes>
        <Route path="/" element={<Home label={"klik ini"} />} />
        <Route path="/setting" element={<Setting />}>
          <Route path="profile" element={<Profile />}/>
          <Route path="phone" element={<Phone />}/>
          <Route path="computer" element={<Computer />}/>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/about/:id/" element={<Detail />} />
        <Route path="about/:id/:nama" element={<Detail2 />} />
        <Route path="/error404" element={<NotFound />} />
        <Route path="/home" element={<Navigate to="/" replace/>}/>
        <Route path="*" element={<Navigate to="/error404" replace/>}/>
      </Routes>
      </section>
    </React.Fragment>
  );
}

export default App;
