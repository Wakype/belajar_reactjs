import React from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { deleteArtikel, getAllArtikel } from "../../API/artikel_API/artikel";
import Skeleton from "react-loading-skeleton";
import { Button } from "../../component";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const Artikel = () => {
  const [listArtikel, setListArtikel] = React.useState([]);
  const [fetchArtikel, setFetchArtikel] = React.useState(false);
  const navigate = useNavigate();

  const getArtikelHandle = async () => {
    try {
      setFetchArtikel(true);
      const response = await getAllArtikel();
      console.log("Response =>", response);
      setListArtikel(response.data.data.data);
    } catch (err) {
      console.log("error =>", err);
    } finally {
      setFetchArtikel(false);
    }
  };

  React.useEffect(() => {
    getArtikelHandle();
  }, []);

  console.log("artikel =>", listArtikel);

  return (
    <section>
      {/* <table className="table-auto w-screen px-2">
          <thead>
            <tr className="border">
              <th className="py-3 border-r">No</th>
              <th>ID</th>
              <th>Thumbnail</th>
              <th>Judul</th>
              <th>Slug</th>
              <th>Dibuat</th>
              <th>Diupdate</th>
            </tr>
          </thead>
          <tbody>
            {fetchArtikel ? (
              <tr key="">
                <td>
                  <Skeleton baseColor="red" highlightColor="blue" count={1} />
                </td>
              </tr>
            ) : (
              listArtikel?.map((artikel, index) => {
                return (
                  <tr className="border text-center" key={index}>
                    <td className="border-r">{index + 1}</td>
                    <td>{artikel?.id}</td>
                    <td><img src={artikel?.Thumbnail} alt="" /></td>
                    <td>{artikel?.judul}</td>
                    <td>{artikel?.slug}</td>
                    <td>{artikel.created_at}</td>
                    <td>{artikel.updated_at}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table> */}

      <div className="px-5 flex justify-between">
        <NavLink
          to={"/artikel/create"}
          className="px-6 text-center py-2 border border-green-500 rounded my-5 hover:bg-green-500 hover:text-white transition-all ease-in-out hover:shadow-lg hover:shadow-green-400"
        >
          Buat Artikel
        </NavLink>
        <Button
          edit="h-[40px] my-5 py-1 border-red-500 hover:border-red-500 hover:bg-red-500 hover:shadow-red-400"
          title={"Logout"}
          onClick={() => {
            Cookies.remove("myapps_token");
            return navigate("/login", { replace: true });
          }}
        />
      </div>

      <div className="grid grid-cols-1">
        {fetchArtikel ? (
          <tr key="">
            <td>
              <Skeleton baseColor="red" highlightColor="blue" count={1} />
            </td>
          </tr>
        ) : (
          listArtikel?.map((artikel, index) => {
            return (
              <div className="border rounded border-green-500 flex flex-col h-[300px] justify-between p-5 mb-2 mx-2">
                <div className="flex justify-between">
                  <h1 className="truncate font8bit w-[130px]">
                    {" "}
                    No. {index + 1}
                  </h1>

                  <div className="flex flex-col justify-center items-center">
                    <h1>{artikel.judul}</h1>
                    <h1>{artikel.slug}</h1>
                  </div>
                  <h1 className="truncate font8bit text-left">
                    Id. {artikel.id}
                  </h1>
                </div>

                <div className="flex justify-around items-center">
                  <Button
                    title={"Hapus"}
                    edit={
                      "h-[40px] hover:bg-red-500 hover:border-red-500 hover:shadow-red-400 border-red-500 px-7"
                    }
                    onClick={async () => {
                      const response = await deleteArtikel(artikel.id);

                      try {
                        if (response.data.status === "Fail") {
                          const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener(
                                "mouseenter",
                                Swal.stopTimer
                              );
                              toast.addEventListener(
                                "mouseleave",
                                Swal.resumeTimer
                              );
                            },
                          });

                          Toast.fire({
                            icon: "error",
                            title: response.data.message,
                          });
                        } else {
                          const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener(
                                "mouseenter",
                                Swal.stopTimer
                              );
                              toast.addEventListener(
                                "mouseleave",
                                Swal.resumeTimer
                              );
                            },
                          });

                          Toast.fire({
                            icon: "success",
                            title: "Artikel berhasil di Update!",
                          });
                        }
                      } catch (err) {
                        console.log("delete err =>", err);
                      } finally {
                      }
                    }}
                  />
                  <img
                    src={artikel.thumbnail}
                    alt=""
                    className="w-[150px] h-[150px]"
                  />
                  <Button
                    title={"Edit"}
                    edit={
                      "h-[40px] hover:shadow-blue-400 border-blue-400 hover:border-blue-400 hover:bg-blue-400 px-7"
                    }
                    onClick={() => {
                      return navigate(
                        `/artikel/update/${artikel.id}/${artikel.slug}`
                      );
                    }}
                  />
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h1 className="italic">Created At</h1>
                    <h1 className="w-[180px] truncate font8bit">
                      {artikel.created_at}
                    </h1>
                  </div>
                  <div className="flex items-center italic">
                    <Button
                      title={"Detail"}
                      edit={"h-[40px] hover:shadow-green-400 px-7"}
                      onClick={() => {
                        return navigate(`/artikel/detail/${artikel.slug}`);
                      }}
                    />
                  </div>

                  <div className="flex flex-col">
                    <h1 className="italic">Updated At</h1>
                    <h1 className="w-[180px] truncate font8bit">
                      {artikel.updated_at}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Artikel;
