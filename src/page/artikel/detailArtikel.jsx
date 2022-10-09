import React from "react";
import { getDetailArtikel } from "../../API/artikel_API/artikel";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button, InputStateEvent, UploadInput } from "../../component";
import ScaleLoader from "react-spinners/ScaleLoader";
import Swal from "sweetalert2";

const DetailArtikel = () => {
  let navigate = useNavigate();
  let { slug } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [artikel, setArtikel] = React.useState({
    id: "",
    judul: "",
    slug: "",
    thumbnail: "",
    artikel: "",
    user_id: "",
    created_at: "",
    updated_at: "",
  });

  const getDetailArtikelHandle = async () => {
    try {
      setIsLoading(true);
      let response = await getDetailArtikel(slug);
      setArtikel(response.data.data);
      console.log("response", response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getDetailArtikelHandle();
  }, []);

  return (
    <section className="w-screen">
      <div>
        <Button
          title={"tes"}
          onClick={() => {
            console.log(slug);
            console.log("artikel", artikel);
          }}
        />
      </div>
      <div className="flex justify-center flex-col items-center">
        <form
          action=""
          className="flex flex-col border rounded border-green-500 px-5 py-5 mt-5 shadow shadow-[#829460] form"
          // onSubmit={handleSubmit}
        >
          <div className="font8bit text-center">
            <h1>Detail Artikel</h1>
          </div>
          <div className="">
            <div className="flex space-x-12 my-7">
              <div className="flex justify-center items-center">
                <img
                  src={artikel.thumbnail}
                  alt={artikel.thumbnail}
                  className="w-[200px]"
                />
              </div>
              <div>
                <h1>judul {artikel.judul}</h1>
                <h1>id {artikel.id}</h1>
                <h1>user id {artikel.user_id}</h1>
                <h1>slug {artikel.slug}</h1>
                <h1>artikel {artikel.artikel}</h1>
                <h1>created {artikel.created_at}</h1>
                <h1>updated {artikel.updated_at}</h1>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                edit={"px-5"}
                title={
                  isLoading ? (
                    <ScaleLoader color="#36d7b7" height={12} width={2} />
                  ) : (
                    "Kembali"
                  )
                }
                type="submit"
                onClick={() => {
                  // Cookies.set("myapps_token", "ini isi token");
                  return navigate("/artikel", { replace: true });
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DetailArtikel;
