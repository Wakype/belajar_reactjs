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
      <div className="flex justify-center flex-col items-center">
        <form
          action=""
          className="flex flex-col px-10 border rounded border-green-500 py-5 mt-5 shadow shadow-[#829460] form"
          // onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="font8bit text-center">
              <h1>- Detail Artikel -</h1>
            </div>
            <div className="border w-[100px] flex justify-center mt-3 border-green-500"></div>
          </div>
          <div className="">
            <div className="flex flex-col my-3 space-y-7">
              <div className="flex justify-between font8bit items-center">
                <div>
                  <h1>ID</h1>
                  <h1>{artikel.id}</h1>
                </div>
                <h1>{artikel.judul}</h1>
                <div className="text-right">
                  <h1>User</h1>
                  <h1>{artikel.user_id}</h1>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={artikel.thumbnail}
                  alt={artikel.thumbnail}
                  className="w-[200px] h-[200px]"
                />
              </div>
              <div className="text-center">
                <h1>{artikel.artikel}</h1>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="italic">Created At</h1>
                  <h1 className="w-[180px] truncate font8bit">
                    {artikel.created_at}
                  </h1>
                </div>
                <h1 className="font8bit text-center w-[700px]">
                  {artikel.slug}
                </h1>
                <div>
                  <h1 className="italic text-right">Updated At</h1>
                  <h1 className="w-[180px] truncate font8bit">
                    {artikel.updated_at}
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                edit={"px-5 mt-10"}
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
