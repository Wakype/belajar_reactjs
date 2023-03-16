import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CustomButton, CustomInput, SearchButton } from '../../components';
import { deleteBarang, getBarang, getDetailBarang } from '../../api/barangApi';
import * as Yup from 'yup';
import * as dayjs from 'dayjs';
import rupiahFormat from 'rupiah-format';
import { useQuery, useQueryClient } from 'react-query';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { actionUpdateBarang } from '../../redux/action/barangAction';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const Laporan = () => {
  const dispatch = useDispatch();
  const redux = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [barang, setBarang] = useState([]);
  const convertRupiah = require('rupiah-format');
  let navigate = useNavigate();
  let location = useLocation();
  const [path1, path2, path3] = location.pathname.split('/').slice(1);

  const handleGetBarang = async () => {
    try {
      setIsLoading(true);
      let response = await getBarang(
        formikFilter.values.keyword,
        formikFilter.values.hargaMinimal,
        formikFilter.values.hargaMaximum,
        formikFilter.values.isMine,
        formikFilter.values.page,
        formikFilter.values.pageSize
      );
      setBarang(response?.data?.data?.rows);
    } catch (err) {
      console.log('barangerr', err);
    } finally {
      setIsLoading(false);
    }
  };

  const formikFilter = useFormik({
    initialValues: {
      isMine: '',
      hargaMaximum: '',
      hargaMinimal: '',
      keyword: '',
      page: 1,
      pageSize: 7,
    },
  });

  function replaceSpacesWithDash(text) {
    return text.trim().replace(/\s+/g, '-');
  }

  useEffect(() => {
    handleGetBarang();
  }, [formikFilter.values.page]);
  return (
    <section className="w-full h-screen bg-[#092742] py-[50px] px-[50px]">
      <div className="mb-[70px]">
        <h1 className="text-[25px] font-semibold">Laporan</h1>
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mb-5">
          <div>
            <p>
              {path1} &gt; {path2} &gt;{' '}
              <span className="text-[#00c29f]">{path3}</span>
            </p>
          </div>

          <div className="flex">
            <SearchButton />
          </div>
        </div>
        <table class="table-auto w-full border border-[#00c29a] rounded">
          <tr className="border border-[#00c29a] h-[50px] rounded bg-[#00c29a]">
            <th className="w-[50px]">#</th>
            <th className="text-left">Gambar</th>
            <th className="text-left">Nama Barang</th>
            <th className="text-left">Tanggal Lelang</th>
            <th className="text-left">Harga Awal</th>
            <th className="text-left">Deskripsi Barang</th>
            <th className="text-left">Aksi</th>
          </tr>

          {isLoading ? (
            <td
              colSpan={7}
              rowSpan={7}
              className="w-full py-10 pl-10 flex justify-center"
            >
              <div>
                <ScaleLoader color="#00c29a" height={30} width={800} />
              </div>
            </td>
          ) : (
            <>
              {barang?.map((item, index) => {
                return (
                  <tr key={index} className="mb-5">
                    <td className="text-center">{item.id}</td>
                    <td className="w-[100px]">
                      <img
                        src="https://www.thewindowsclub.com/wp-content/uploads/2018/06/Broken-image-icon-in-Chrome.gif"
                        alt=""
                        width={20}
                        className="ml-5"
                      />
                    </td>
                    <td>
                      <p className="line-clamp-2 w-[250px]">
                        {item.namaBarang}
                      </p>
                    </td>
                    <td>{dayjs(item.tanggal).format('DD MMM YYYY')}</td>
                    <td>{convertRupiah.convert(item.hargaAwal)}</td>
                    <td className="">
                      <p className="w-[300px] line-clamp-2">
                        {item.deskripsiBarang}
                      </p>
                    </td>
                    <td className="mb-5 ">
                      {item?.id_petugas === redux?.id ? (
                        <div className="flex pr-5 py-5 w-full justify-center space-x-3">
                          <NavLink
                            to={`/admin/dashboard/laporan/detail-laporan/${
                              item.barangMilik.id
                            }/${item.lelang.id}/${
                              item.id
                            }/${replaceSpacesWithDash(item.namaBarang)}`}
                          >
                            <CustomButton
                              onClick={() => {}}
                              label={'Detail Laporan'}
                              stylingButton={
                                'w-full border-yellow-500 hover:bg-yellow-500'
                              }
                            />
                          </NavLink>
                        </div>
                      ) : (
                        <div className="pr-5 py-5 w-full">
                          <CustomButton
                            onClick={() => {
                              toast.error(
                                'Anda tidak memiliki akses untuk melihat detail laporan ini, karena barang ini bukan milik anda',
                                {
                                  position: 'top-right',
                                  autoClose: 2000,
                                  hideProgressBar: false,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                  theme: 'colored',
                                }
                              );
                            }}
                            type={'button'}
                            label={'Tidak memiliki akses'}
                            stylingButton={
                              'w-full border-red-500 hover:bg-red-500 cursor-not-allowed'
                            }
                          />
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </table>
      </div>

      <div className="w-full mt-[20px]">
        <div className="flex space-x-3 items-center">
          <>
            {formikFilter.values.page > 1 ? (
              <div
                className="cursor-pointer"
                onClick={() =>
                  formikFilter.setValues({
                    page: formikFilter.values.page - 1,
                  })
                }
              >
                <BiLeftArrow color="#00c29a" size={22} />
              </div>
            ) : (
              <div className="cursor-not-allowed">
                <BiLeftArrow color="grey" size={22} />
              </div>
            )}
          </>
          <div className="text-white font-bold text-[18px]">
            <input
              type="number"
              value={formikFilter.values.page}
              onChange={formikFilter.handleChange}
              name="page"
              id="page"
              className="w-[50px] bg-black text-center border-[#00c29a] rounded"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              formikFilter.setValues({ page: formikFilter.values.page + 1 })
            }
          >
            <BiRightArrow color="#00c29a" size={22} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Laporan;
