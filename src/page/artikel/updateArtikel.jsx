import React from "react";
import { Button, InputStateEvent, UploadInput } from "../../component";
import ScaleLoader from "react-spinners/ScaleLoader";
import Swal from "sweetalert2";
import {
  createArtikel,
  getDetailArtikel,
  updateArtikel,
} from "../../API/artikel_API/artikel";
import { useNavigate, useParams } from "react-router-dom";
import Resizer from "react-image-file-resizer";
import { updateUser } from "../../API/user_API/user";

const UpdateArtikel = () => {
  let navigate = useNavigate();
  let { slug, id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [payload, setPayload] = React.useState({
    slug: "",
    judul: "",
    artikel: "",
    thumbnail: "",
    imagePreview: null,
  });

  const handleChange = (e) => {
    setPayload(() => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await updateArtikel(id, payload);
      console.log("respon update =>", response)

      if (response.data.status === "Fail") {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
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
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Artikel berhasil di Update!",
        });
      }
      return navigate("/artikel", { replace: true });
    } catch (err) {
      console.log("update =>", err);

      const response = await getDetailArtikel(slug, payload);
      const dataArtikel = response.data.data;
      setPayload(() => {
        return {
          judul: payload.judul,
          slug: payload.slug,
          thumbnail: payload.thumbnail,
          imagePreview: payload.thumbnail,
          artikel: payload.artikel,
          created_at: payload.created_at,
        };
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getArtikel = async () => {
    try {
      const response = await getDetailArtikel(slug, payload);
      console.log("artikel detail =>", response.data.data);
      const dataArtikel = response.data.data;
      setPayload((e) => {
        return {
          ...payload,
          judul: dataArtikel.judul,
          slug: dataArtikel.slug,
          thumbnail: dataArtikel.thumbnail,
          id: dataArtikel.id,
          imagePreview: null,
          artikel: dataArtikel.artikel,
          created_at: dataArtikel.created_at,
        };
      });
    } catch (err) {
      console.log("err getartikel =>", err);
    }
  };

  React.useEffect(() => {
    getArtikel(id);
  }, []);

  return (
    <section>
  

      <div className="flex justify-center flex-col items-center">
        <form
          action=""
          className="flex flex-col border rounded border-green-500 px-5 py-5 mt-5 shadow shadow-[#829460] form"
          onSubmit={handleSubmit}
        >
          <div className="font8bit text-center">
            <h1>Buat Artikel</h1>
          </div>
          <div className="">
            <div className="flex space-x-12 my-7">
              <div>
                <InputStateEvent
                  onChange={handleChange}
                  name="judul"
                  value={payload.judul}
                  placeholder="Judul"
                  label={"Judul"}
                  type="text"
                  //   isError={isError}
                  textError="input salah"
                />
                <InputStateEvent
                  onChange={handleChange}
                  name="artikel"
                  value={payload.artikel}
                  placeholder="Artikel"
                  label={"Artikel"}
                  type="text"
                />
                <UploadInput
                  name="thumbnail"
                  edit={""}
                  value={payload?.file}
                  placeholder="Thumbnail"
                  label={"Thumbnail"}
                  type="file"
                  onChange={(e) => {
                    console.log("event", e.target.files[0]);
                    let file = e.target.files[0];

                    if (file.size >= 1000000) {
                      const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener("mouseenter", Swal.stopTimer);
                          toast.addEventListener(
                            "mouseleave",
                            Swal.resumeTimer
                          );
                        },
                      });
                      Toast.fire({
                        icon: "error",
                        title: "Ukuran file lebih dari 1 Mb!",
                      });
                    }

                    if (
                      file.type === "image/png" ||
                      file.type === "image/jpeg" ||
                      file.type === "image/jpg"
                    ) {
                      let reader = new FileReader();

                      reader.readAsDataURL(file);
                      reader.onloadend = () => {
                        console.log(reader);
                        setPayload((payload) => {
                          return {
                            ...payload,
                            imagePreview: reader.result,
                            thumbnail: file,
                          };
                        });
                      };
                    } else {
                      const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener("mouseenter", Swal.stopTimer);
                          toast.addEventListener(
                            "mouseleave",
                            Swal.resumeTimer
                          );
                        },
                      });
                      Toast.fire({
                        icon: "error",
                        title: "Gambar harus bertipe .png .jpg .jpeg",
                      });
                    }
                  }}
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={payload.imagePreview}
                  alt={payload.imagePreview}
                  className="w-[200px]"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                edit={"px-5"}
                title={
                  isLoading ? (
                    <ScaleLoader color="#36d7b7" height={12} width={2} />
                  ) : (
                    "Buat Artikel"
                  )
                }
                type="submit"
                onClick={() => {
                  // Cookies.set("myapps_token", "ini isi token");
                  // return navigate("/user", { replace: true });
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateArtikel;
