import React from "react";
import Input from "./component/Input";
import TextArea from "./component/TextArea";
import Button from "./component/Button";
import Card from "./component/Card";

export default function App() {
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
  const [fromError, setFormError] = React.useState("");
  const handleChange = (e) => {
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
        id: new Date().getTime(),
        createdAt: new Date(),
      };
    });
    setFormError("");

    handleBlur(e);
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setErrors((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    } else {
      setErrors((errors) => {
        return {
          ...errors,
          [e.target.name]: false,
        };
      });
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("jalan");
    const hasilFilter = catatan.filter((item) => {
      return item.id !== parseInt(e.target.value);
    });

    setCatatan(() => {
      return hasilFilter;
    });
    // setCatatan(() => {
    //   return [...hasilFilter]
    // });

    console.log("hasil filter", hasilFilter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.title === "" || values.body === "") {
      setFormError("Form Wajib di isi");
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
      return;
    }

    setCatatan((catatan) => {
      return [...catatan, values];
    });

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
    console.log("form ini sudah di submit");
  };

  console.log("catatan", catatan);
  console.log("error", errors);
  return (
    <div className=" w-full min-h-screen text-gray-500 p-5 space-y-5">
      <div className="grid grid-cols-5 border-b-2 py-2">
        <h1 className="text-2xl">Notes</h1>
        <div className="col-start-5">
          <Input placeholder="Cari Catatan ..." />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5">
        <div className="flex items-center justify-center"></div>
        <div className="col-span-1   flex items-center justify-center">
          <form onSubmit={handleSubmit} className="space-y-2">
            <p className="text-red-500 text-lg">{fromError}</p>
            <h1 className="text-xl">Buat Catatan</h1>
            <Input
              name={"title"}
              id="title"
              value={values.title}
              title={"Judul"}
              placeholder="Judul"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.title}
            />
            <TextArea
              name={"body"}
              id="body"
              value={values.body}
              title={"Body"}
              placeholder="Catatan"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.body}
            />
           <Input
              name={"year"}
              id="year"
              value={values.year}
              title={"Judul"}
              placeholder="Judul"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.year}
              type="number"
            />
            <Button title="Simpan" />
          </form>
        </div>

        <div className="col-span-1 overflow-auto w-full  px-5 py-3 border h-96">
          <h1 className="text-xl font-bold ">Daftar Catatan</h1>
          <div className="grid grid-cols-4 gap-5">
            {catatan.length === 0 ? (
              <div>Tidak Ada Catatan</div>
            ) : (
              catatan.map((item, index) => {
                return (
                  <div key={index}>
                    <Card
                      handleDelete={handleDelete}
                      title={item.title}
                      body={item.body}
                      year={item.year}
                      createdAt={item.createdAt}
                      id={item.id}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
