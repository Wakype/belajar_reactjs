import React from "react";
import { Input, TextArea, Button } from "../../../component";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailBuku = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [books, setBooks] = React.useState({
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: "",
    sinopsis: "",
    kode_penulis: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    setBooks((books) => {
      return {
        ...books,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleReset = () => {
    setBooks(() => {
      return {
        judul_buku: "",
        nama_pengarang: "",
        nama_penerbit_buku: "",
        ketebalan_buku: "",
        tahun_terbit_buku: "",
        sinopsis: "",
        kode_penulis: "",
      };
    });
  };

  const getDetailBook = async (id) => {
    try {
      const response = await axios.get(
        `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=10101`
      );

      console.log(response.data.data);
      const dataBook = response.data.data;

      setBooks(() => {
        return {
          judul_buku: dataBook.judul_buku,
          nama_pengarang: dataBook.nama_pengarang,
          nama_penerbit_buku: dataBook.nama_penerbit_buku,
          ketebalan_buku: dataBook.ketebalan_buku,
          tahun_terbit_buku: dataBook.tahun_terbit_buku,
          sinopsis: dataBook.sinopsis,
          kode_penulis: dataBook.kode_penulis,
        };
      });
    } catch (err) {}
  };

  React.useEffect(() => {
    getDetailBook(id);
  }, []);

  return (
    <section className="w-[1166px] p-5">
      <form action="">
        <div className="flex justify-center font-bold">
          <h1 className="uppercase text-center">Detail Buku</h1>
        </div>

        <div>
          <div className="flex justify-between">
            <Input
              disabled
              name={"judul_buku"}
              onChange={handleChange}
              value={books.judul_buku}
              styling={"w-[350px]"}
              label={"Judul"}
            />
            <Input
              disabled
              name={"nama_pengarang"}
              onChange={handleChange}
              value={books.nama_pengarang}
              styling={"w-[350px]"}
              label={"Nama Pengarang"}
            />
            <Input
              disabled
              name={"nama_penerbit_buku"}
              onChange={handleChange}
              value={books.nama_penerbit_buku}
              styling={"w-[350px]"}
              label={"Nama Penerbit"}
            />
          </div>
          <div className="flex justify-between">
            <Input
              disabled
              name={"ketebalan_buku"}
              onChange={handleChange}
              value={books.ketebalan_buku}
              styling={"w-[550px]"}
              label={"Ketebalan Buku"}
            />
            <Input
              disabled
              name={"tahun_terbit_buku"}
              onChange={handleChange}
              value={books.tahun_terbit_buku}
              styling={"w-[550px]"}
              label={"Tahun Terbit"}
              type="number"
            />
          </div>
          <div className="flex justify-between">
            <TextArea
              disabled
              name={"sinopsis"}
              onChange={handleChange}
              value={books.sinopsis}
              cols="151"
              rows="5"
              label={"Sinopsis"}
            />
          </div>
          <div className="flex justify-between">
            <Input
              disabled
              name={"kode_penulis"}
              onChange={handleChange}
              value={books.kode_penulis}
              styling={"w-[1130px]"}
              label={"Code Penulis"}
              type="number"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <Button
              label={"Kembali"}
              onClick={() => {
                return navigate("/admin/buku", { replace: true });
              }}
            />
          </div>
          <div className="flex justify-between space-x-5">
            <Button label={"Reset"} onClick={handleReset} />
            <Button label={isLoading ? "Sedang Mengupdate" : "Update"} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default DetailBuku;
