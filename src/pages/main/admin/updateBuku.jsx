import React from "react";
import { Input, TextArea, Button } from "../../../component";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateBuku = () => {
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
  const [errors, setErrors] = React.useState({});
  const [formError, setFormError] = React.useState("");

  const handleChange = (e) => {
    e.preventDefault();

    setBooks((books) => {
      return {
        ...books,
        [e.target.name]: e.target.value,
      };
    });

    handleBlur(e);
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.put(
        `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=10101`,
        books
      );
      setIsLoading(false);
      return navigate("/admin/buku");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }

    if (
      books.judul_buku === "" ||
      books.nama_pengarang === "" ||
      books.nama_penerbit_buku === "" ||
      books.ketebalan_buku === 0 ||
      books.tahun_terbit_buku < 2000 ||
      books.tahun_terbit_buku > 2022 ||
      books.sinopsis.length < 30 ||
      books.kode_penulis === 10101
    ) {
      if (books.judul_buku === "") {
        setErrors((errors) => {
          return {
            ...errors,
            judul_buku: true,
          };
        });
      }
      if (books.nama_pengarang === "") {
        setErrors((errors) => {
          return {
            ...errors,
            nama_pengarang: true,
          };
        });
      }
      if (books.nama_penerbit_buku === "") {
        setErrors((errors) => {
          return {
            ...errors,
            nama_penerbit_buku: true,
          };
        });
      }
      if (books.ketebalan_buku === "") {
        setErrors((errors) => {
          return {
            ...errors,
            ketebalan_buku: true,
          };
        });
      }
      if (books.tahun_terbit_buku < 2020 || books.tahun_terbit_buku > 2022) {
        setErrors((errors) => {
          return {
            ...errors,
            tahun_terbit_buku: true,
          };
        });
      }
      if (books.sinopsis.length < 30) {
        setErrors((errors) => {
          return {
            ...errors,
            sinopsis: true,
          };
        });
      }
      if (books.kode_penulis === 10101) {
        setErrors((errors) => {
          return {
            ...errors,
            kode_penulis: true,
          };
        });
      }
      setFormError("Form wajid diisi");
      return;
    }

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

  const handleReset = (e) => {
    getDetailBook(id);

    setBooks(() => {
      return {
        judul_buku: books.judul_buku,
        nama_pengarang: books.nama_pengarang,
        nama_penerbit_buku: books.nama_penerbit_buku,
        ketebalan_buku: books.ketebalan_buku,
        tahun_terbit_buku: books.tahun_terbit_buku,
        sinopsis: books.sinopsis,
        kode_penulis: books.kode_penulis,
      };
    });
  };

  const handleBlur = (e) => {
    console.log("handleblur");

    if (e.target.value === "") {
      setErrors(() => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    } else {
      setErrors(() => {
        return {
          ...errors,
          [e.target.name]: false,
        };
      });
    }
  };

  React.useEffect(() => {
    getDetailBook(id);
  }, [id]);

  return (
    <section className="w-[1166px] p-5">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-center font-bold">
          <h1 className="uppercase text-center">Tambah Buku</h1>
        </div>

        <div>
          <div className="flex justify-between">
            <Input
              error={errors.judul_buku}
              onBlur={handleBlur}
              name={"judul_buku"}
              onChange={handleChange}
              value={books.judul_buku}
              styling={"w-[350px]"}
              label={"Judul"}
            />
            <Input
              error={errors.nama_pengarang}
              onBlur={handleBlur}
              name={"nama_pengarang"}
              onChange={handleChange}
              value={books.nama_pengarang}
              styling={"w-[350px]"}
              label={"Nama Pengarang"}
            />
            <Input
              error={errors.nama_penerbit_buku}
              onBlur={handleBlur}
              name={"nama_penerbit_buku"}
              onChange={handleChange}
              value={books.nama_penerbit_buku}
              styling={"w-[350px]"}
              label={"Nama Penerbit"}
            />
          </div>
          <div className="flex justify-between">
            <Input
              error={errors.ketebalan_buku}
              onBlur={handleBlur}
              name={"ketebalan_buku"}
              onChange={handleChange}
              value={books.ketebalan_buku}
              styling={"w-[550px]"}
              label={"Ketebalan Buku"}
              type="number"
            />
            <Input
              error={errors.tahun_terbit_buku}
              onBlur={handleBlur}
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
              error={errors.sinopsis}
              onBlur={handleBlur}
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
              error={errors.kode_penulis}
              onBlur={handleBlur}
              name={"kode_penulis"}
              onChange={handleChange}
              value={books.kode_penulis}
              styling={"w-[1130px]"}
              label={"kode_penulis"}
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
            <Button label={isLoading ? "Sedang Mengupdate" : "Update"} />
          </div>
        </div>
      </form>
      <Button label={"Reset"} onClick={handleReset} />
    </section>
  );
};

export default UpdateBuku;
