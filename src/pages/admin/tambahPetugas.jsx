import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { authRegister } from '../../redux/action/authAction';
import { useLocation, useNavigate } from 'react-router-dom';
import { CustomButton, CustomInput, CustomSelect } from '../../components';

const TambahPetugas = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let location = useLocation();
  let path1 = location.pathname.split('/')[1];
  let path2 = location.pathname.split('/')[2];
  let path3 = location.pathname.split('/')[3];
  let path4 = location.pathname.split('/')[4];
  const formikPetugas = useFormik({
    initialValues: {
      namaPetugas: '',
      username: '',
      password: '',
      confirmPasswordPetugas: '',
      role: '',
    },
    validationSchema: Yup.object().shape({
      namaPetugas: Yup.string()
        .min(2, 'Nama minimal 2 huruf')
        .required('Nama Lengkap wajib diisi'),
      username: Yup.string()
        .min(4, 'Username minimal 4 huruf')
        .required('Username wajib diisi'),
      password: Yup.string()
        .min(8, 'Password minimal 8 huruf')
        .required('Password wajib diisi'),
      confirmPasswordPetugas: Yup.string()
        .min(8, 'Password minimal 8 huruf')
        .required('Password wajib diisi')
        .oneOf([Yup.ref('password'), null], 'Password harus sama'),
    }),
    onSubmit: (values) => {
      const handleSubmit = async (e) => {
        try {
          const response = await dispatch(authRegister(values));
          if (response?.status === 'Success') {
            toast.success(response?.msg, {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
            return navigate('/admin/dashboard/petugas', { replace: true });
          }
          if (response?.response?.data?.status === 'Fail') {
            toast.error(response?.response?.data?.msg, {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
          }
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
      <div className="mb-[70px] bg-[#00c29f] rounded w-[25%]">
        <h1 className="text-[20px] font-semibold text-center py-1 text-black">
          Tambah Petugas
        </h1>
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
        <div className="w-full">
          <form
            action=""
            className="space-y-10 w-full"
            onSubmit={formikPetugas.handleSubmit}
          >
            <CustomInput
              placeholder={'Nama Petugas'}
              inputStyle={'w-full border-[#00c29a] border bg-black'}
              inputType={'text'}
              id={'namaPetugas'}
              name={'namaPetugas'}
              value={formikPetugas.values.namaPetugas}
              onChange={formikPetugas.handleChange}
              isError={
                formikPetugas.touched.namaPetugas &&
                formikPetugas.errors.namaPetugas
              }
              textError={formikPetugas.errors.namaPetugas}
              onBlur={formikPetugas.handleBlur}
            />
            <CustomInput
              placeholder={'Username'}
              inputStyle={'w-full border-[#00c29a] border bg-black'}
              inputType={'text'}
              id={'username'}
              name={'username'}
              value={formikPetugas.values.username}
              onChange={formikPetugas.handleChange}
              isError={
                formikPetugas.touched.username && formikPetugas.errors.username
              }
              textError={formikPetugas.errors.username}
              onBlur={formikPetugas.handleBlur}
            />
            <div className="flex w-full space-x-10">
              <CustomInput
                placeholder={'Password'}
                inputStyle={'w-full border-[#00c29a] border bg-black'}
                inputType={'password'}
                id={'password'}
                name={'password'}
                value={formikPetugas.values.password}
                onChange={formikPetugas.handleChange}
                isError={
                  formikPetugas.touched.password &&
                  formikPetugas.errors.password
                }
                textError={formikPetugas.errors.password}
                onBlur={formikPetugas.handleBlur}
              />
              <CustomInput
                placeholder={'Konfirmasi Password'}
                inputStyle={'w-full border-[#00c29a] border bg-black'}
                inputType={'password'}
                id={'confirmPasswordPetugas'}
                name={'confirmPasswordPetugas'}
                value={formikPetugas.values.confirmPasswordPetugas}
                onChange={formikPetugas.handleChange}
                isError={
                  formikPetugas.touched.confirmPasswordPetugas &&
                  formikPetugas.errors.confirmPasswordPetugas
                }
                textError={formikPetugas.errors.confirmPasswordPetugas}
                onBlur={formikPetugas.handleBlur}
              />
            </div>
            <CustomSelect
              id={'role'}
              name={'role'}
              value={formikPetugas.values.role}
              onBlur={formikPetugas.handleBlur}
              onChange={formikPetugas.handleChange}
              selectStyle={'w-full border-[#00c29a] border bg-black'}
            >
              <option value="">Pilih Role</option>
              <option value="administrator">Administrator</option>
              <option value="petugas">Petugas</option>
            </CustomSelect>
            <div className="flex justify-between space-x-20">
              <CustomButton
                onClick={() => {
                  formikPetugas.resetForm();
                }}
                type={'button'}
                label={'Bersihkan form'}
                stylingP={'hover:text-white text-red-500'}
                stylingButton={
                  'border border-red-500 py-3 hover:bg-red-500 w-full'
                }
              />
              <CustomButton
                type={'submit'}
                label={'Tambah Petugas'}
                stylingP={'hover:text-black'}
                stylingButton={
                  'border border-[#00c29a] py-3 bg-[#00c29a] w-full'
                }
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TambahPetugas;
