import React, { useState } from "react";
import { Button, Card, Input, TextArea } from "./component";

function App() {
  const [values, setValues] = React.useState({
    id: "",
    title: "",
    body: "",
    year: "",
    archived: false,
    createdAt: "",
  });
  const [catatan, setCatatan] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    // console.log('ada');
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
        id: new Date().getTime(),
        createdAt: new Date(),
      };
    });
    handleBlur(e);
    setFormError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("tersubmit");

    if (
      values.title === "" ||
      values.body === "" ||
      values.year < 2020 ||
      values.year > 2022
    ) {
      if (values.title === "") {
        setErrors((errors) => {
          return {
            ...errors,
            title: true,
          };
        });
      }
      if (values.body === "") {
        setErrors((errors) => {
          return {
            ...errors,
            body: true,
          };
        });
      }
      if (values.year < 2020 || values.year > 2022) {
        setErrors((errors) => {
          return {
            ...errors,
            year: true,
          };
        });
      }
      setFormError("Form wajid diisi");
      return;
    }

    setCatatan((catatan) => [...catatan, values]);
    setValues(() => {
      return {
        id: "",
        title: "",
        body: "",
        year: "",
        archived: false,
        createdAt: "",
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

  const handleDelete = (e) => {
    e.preventDefault();

    const hasilFilter = catatan.filter((item) => {
      return item.id !== parseInt(e.target.value);
    });
    setCatatan(() => {
      return hasilFilter;
    });
    console.log("filter", hasilFilter);
  };

  // console.log(values);
  console.log("error: ", errors);
  console.log("Catatan: ", catatan);
  return (
    <React.Fragment>
      {/* <h1 className="bg-red-500 text-white text-center mb-5">
        Pembahasan Remedial
      </h1> */}

      <div className="w-full min-h-screen text-grey-500 p-5 space-y-5">
        <div className="grid grid-cols-3 lg:grid-cols-5 md:grid-cols-4 border-b-2 py-2 border-green-700">
          <h1 className="text-2xl ">MyNotes</h1>
          <div className="col-start-3 lg:col-start-5 md:col-start-4">
            <Input placeholder="Cari Catatan..." />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-center justify-center"></div>
          <div className="col-span-1 flex items-center justify-center">
            <form className="space-y-2" onSubmit={handleSubmit}>
              <p className="text-red-500 text-lg italic font-semibold">
                {formError}
              </p>
              <label htmlFor="Judul">
                <h1 className="text-xl cursor-pointer ">
                  Buat Catatan <span className="text-red-600 text-2xl">*</span>
                </h1>
              </label>
              <Input
                name={"title"}
                value={values.title}
                title={"Judul"}
                placeholder="Judul"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.title}
              />
              <TextArea
                name={"body"}
                value={values.body}
                title={"Body"}
                placeholder="Catatan"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.body}
              />
              <Input
                name={"year"}
                value={values.year}
                title={"Tahun Terbit"}
                placeholder="Tahun Terbit (2020 s/d 2022)"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.year}
                type="number"
                maxLength={4}
              />
              <Button title="Simpan" />
            </form>
          </div>

          <div className="col-span-1 overflow-auto w-full px-5 py-3 border-2 h-96 rounded-md border-green-700 space-y-5">
            <h1 className="text-2xl border-b border-green-700 py-2 mb-5 ">
              Daftar Catatan
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {catatan.length === 0 ? (
                <div className=" ">Tidak ada catatan!</div>
              ) : (
                catatan.map((item, index) => {
                  return (
                    <div key={index}>
                      <Card
                        title={item.title}
                        body={item.body}
                        year={item.year}
                        createdAt={item.createdAt}
                        id={item.id}
                        handleDelete={handleDelete}
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
