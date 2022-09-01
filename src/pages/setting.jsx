import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Setting() {
  return (
    <div>
      <section className="">
        <div className="flex flex-col h-screen border-r-2 w-[200px] border-green-700">
          <Link to="/setting/phone">Phone</Link>
          <Link to="/setting/profile">Profile</Link>
          <Link to="/setting/computer">Computer</Link>
        </div>
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
