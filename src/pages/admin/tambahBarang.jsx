import React from 'react';
import { CustomButton, CustomInput, CustomTextArea } from '../../components';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { actionTambahBarang } from '../../redux/action/barangAction';

const TambahBarang = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let location = useLocation();
  let path1 = location.pathname.split('/')[1];
  let path2 = location.pathname.split('/')[2];
  let path3 = location.pathname.split('/')[3];
  let path4 = location.pathname.split('/')[4];
  const redux = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      namaBarang: '',
      hargaAwal: '',
      deskripsiBarang: '',
      id_petugas: redux?.id,
    },
    validationSchema: Yup.object().shape({
      namaBarang: Yup.string()
        .min(10, 'Nama Barang minimal 10 huruf')
        .required('Nama Barang wajib diisi'),
      deskripsiBarang: Yup.string()
        .min(20, 'Deskripsi Barang minimal 20 huruf')
        .required('Deskripsi Barang wajib diisi'),
      hargaAwal: Yup.number()
        .moreThan(1000, 'Harga harus lebih dari Rp1.000,-')
        .required('Harga Awal wajib diisi'),
    }),
    onSubmit: (values) => {
      console.log('object', values);
      const handleSubmit = async (e) => {
        try {
          // alert(JSON.stringify(values, null, 2));

          const response = await dispatch(actionTambahBarang(values));
          console.log('responnya', response);
          if (response?.data?.status === 'Success') {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: 'success',
              title: response?.data?.msg,
            });
            return navigate('/admin/dashboard/barang', { replace: true });
          }

          // if (response?.response?.data?.status === 'Fail') {
          //   const Toast = Swal.mixin({
          //     toast: true,
          //     position: 'top-end',
          //     showConfirmButton: false,
          //     timer: 3000,
          //     timerProgressBar: true,
          //     didOpen: (toast) => {
          //       toast.addEventListener('mouseenter', Swal.stopTimer);
          //       toast.addEventListener('mouseleave', Swal.resumeTimer);
          //     },
          //   });

          //   Toast.fire({
          //     icon: 'error',
          //     title: response?.response?.data?.msg,
          //   });
          // }
        } catch (err) {
          console.log('authregisterErr =>', err);
        } finally {
        }
      };
      handleSubmit();
    },
  });
  return (
    <section className="w-full h-screen bg-[#092742] py-[50px] px-[50px]">
      <div className="mb-[70px]">
        <h1 className="text-[25px] font-semibold">Tambah Barang</h1>
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mb-5">
          <div>
            <p>
              {path1} &gt; {path2} &gt; {path3} &gt;{' '}
              <span className="text-[#00c29f]">{path4}</span>
            </p>
          </div>
        </div>

        <div className="w-full ">
          <form action="" className="space-y-10 flex flex-col w-full" onSubmit={formik.handleSubmit}>
            <CustomInput
              inputStyle={'w-full border-[#00c29a] border bg-black'}
              maxLength={25}
              placeholder={'Nama Barang (Max: 25 Huruf)'}
              id={'namaBarang'}
              name={'namaBarang'}
              value={formik.values.namaBarang}
              onChange={formik.handleChange}
              isError={formik.touched.namaBarang && formik.errors.namaBarang}
              textError={formik.errors.namaBarang}
              onBlur={formik.handleBlur}
            />
            <div className="w-full flex space-x-3">
              <div className="border border-[#00c29a] px-5 rounded bg-black flex items-center">
                <p className="font-bold">Rp</p>
              </div>
              <CustomInput
                inputStyle={'w-full border-[#00c29a] border bg-black'}
                placeholder={'Harga Barang'}
                inputType={'number'}
                id={'hargaAwal'}
                name={'hargaAwal'}
                value={formik.values.hargaAwal}
                onChange={formik.handleChange}
                isError={formik.touched.hargaAwal && formik.errors.hargaAwal}
                textError={formik.errors.hargaAwal}
                onBlur={formik.handleBlur}
              />
            </div>
            <CustomTextArea
              inputStyle={'w-full border-[#00c29a] border bg-black'}
              placeholder={'Deskripsi Barang (Max: 100 Huruf)'}
              maxLength={100}
              id={'deskripsiBarang'}
              name={'deskripsiBarang'}
              value={formik.values.deskripsiBarang}
              onChange={formik.handleChange}
              isError={
                formik.touched.deskripsiBarang && formik.errors.deskripsiBarang
              }
              textError={formik.errors.deskripsiBarang}
              onBlur={formik.handleBlur}
            />
            <CustomButton
              label={'Tambah Barang'}
              stylingButton={'border border-[#00c29a] py-3 hover:bg-[#00c29a]'}
              stylingP={'hover:text-black'}
              type={'submit'}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default TambahBarang;
