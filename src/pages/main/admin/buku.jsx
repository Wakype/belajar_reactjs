import React from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "../../../component";

const Buku = () => {
  const [books, setBooks] = React.useState([]);
  const [booksID, setBooksID] = React.useState(0);
  let navigate = useNavigate();
  let { id } = useParams();

  const getUserHandle = async () => {
    try {
      const response = await axios.get(
        `https://api-react-2.herokuapp.com/api/perpustakaan?kode=10101`
      );
      console.log("Response =>", response.data.data.data);

      setBooks(response.data.data.data);
      // setPage(response.data.page);
    } catch (err) {}
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=10101`
      );
      getUserHandle();
    } catch (err) {}
  };

  React.useEffect(() => {
    getUserHandle();
  }, []);
  console.log("Buku =>", books);
  console.log("delete =>", deleteUser);
  return (
    <section className="p-5 w-[1166px]">
      <div className="mb-5">
        <NavLink
          to={`/admin/buku/tambah`}
          className="transition-all ease-in-out hover:text-white py-1 px-3 hover:border-[#645CAA] hover:bg-[#645CAA] text-center border border-[#A084CA] rounded bg-transparent"
        >
          <span>Tambah Buku</span>
        </NavLink>
      </div>
      <div className="flex flex-row">
        <table className="table-auto w-[100%] px-2">
          <thead>
            <tr className="border">
              <th className="px-1">No</th>
              <th className="px-1">ID</th>
              <th>Nama Buku</th>
              <th>Pengarang Buku</th>
              <th>Penerbit</th>
              <th>Dibuat Pada</th>
              <th>Diupdate Pada</th>
              <th className="px-1">utilities</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item, index) => {
              return (
                <tr key={index} className="border text-center">
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2">{item.id}</td>
                  <td>{item.judul_buku}</td>
                  <td>{item.nama_pengarang}</td>
                  <td>{item.nama_penerbit_buku}</td>
                  <td>{item.created_at}</td>
                  <td>{item.updated_at}</td>
                  <td>
                    <div className="flex justify-between">
                      <Button
                      styling={'hover:text-white hover hover:border-[#645CAA] hover:bg-[#645CAA]'}
                        label={"Detail"}
                        onClick={() => {
                          return navigate(`/admin/buku/${item.id}/view`);
                        }}
                      />
                      <Button
                      styling={'hover:text-white hover hover:border-[#1C6758] hover:bg-[#1C6758]'}
                        label={"Update"}
                        onClick={() => {
                          return navigate(`/admin/buku/${item.id}/update`);
                        }}
                      />
                      <Button
                      styling={'hover:text-white hover hover:border-[#EB1D36] hover:bg-[#EB1D36]'}
                        label={"Delete"}
                        onClick={() => {
                          deleteUser(item.id);
                        }}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Buku;
