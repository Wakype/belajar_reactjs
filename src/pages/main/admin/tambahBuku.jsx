import React from "react";
import { Input, TextArea, Button } from "../../../component";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TambahBuku = () => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://api-react-2.herokuapp.com/api/perpustakaan",
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
      books.kode_penulis !== 10101
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
      if (books.kode_penulis !== 10101) {
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

  const handleBlur = (e) => {
    console.log("handleblur");

    if (books.sinopsis.length < 30) {
      setErrors((errors) => {
        return {
          ...errors,
          sinopsis: true,
        };
      });
      setFormError('Sinopsis minimal 30 karakter!')
    }

    if (books.kode_penulis !== 10101) {
      setErrors((errors) => {
        return {
          ...errors,
          kode_penulis: true,
        };
      });
      setFormError('Kode Penulis salah!')
    }

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
              errorText="Sinopsis minimal 30 karakter!"
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
              styling={
                "hover:text-white hover hover:border-[#645CAA] hover:bg-[#645CAA]"
              }
              label={"Kembali"}
              onClick={() => {
                return navigate(-1);
              }}
            />
          </div>
          <div className="flex justify-between space-x-5">
            <Button
              styling={
                "hover:text-white hover hover:border-[#645CAA] hover:bg-[#645CAA]"
              }
              label={"Reset"}
              onClick={handleReset}
            />
            <Button
              label={isLoading ? "Sedang Menyimpan" : "Simpan"}
              styling={
                "hover:text-white hover hover:border-[#645CAA] hover:bg-[#645CAA]"
              }
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default TambahBuku;
