import React from "react";
import {
  Outlet,
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

export default function Setting() {
  let navigate = useNavigate();
  let location = useLocation();
  let path = location.pathname.split("/")[1];
  let cekPath = location.pathname.split("/")[2];

  console.log("Location = ", location.pathname);
  console.log("split = ", location.pathname.split("/"));
  console.log("path = ", path);

  return (
    <div className="">
      <section className="">
        <div className="flex justify-around items-center flex-row h-screen w-[1166px] h-[70px] bg-[#25316D] gap-5">
          <div className="flex flex-row justify-between">
            <Link to={`/${path}/phone`}>
              <span style={{ color: cekPath === "phone" ? "red" : undefined }}>
                Phone
              </span>
            </Link>
            <Link to={`/${path}/profile`}>
              <span
                style={{ color: cekPath === "profile" ? "red" : undefined }}
              >
                Profile
              </span>
            </Link>
            <Link to={`/${path}/computer`}>
              <span
                style={{ color: cekPath === "computer" ? "red" : undefined }}
              >
                Computer
              </span>
            </Link>
          </div>

          <button
            className="border border-green-500 rounded py-2 px-4"
            onClick={() => {
              return navigate(-1);
            }}
          >
            Kembali
          </button>
        </div>
      </section>
      <section className="">
        <Outlet />
      </section>
    </div>
  );
}
