import React from 'react';
import { CustomButton, CustomInput, CustomTextArea } from '../../components';

const TambahBarang = () => {
  return (
    <section className="w-full h-screen bg-[#092742] py-[50px] px-[50px]">
      <div className="mb-[70px]">
        <h1 className="text-[25px] font-semibold">Tambah Barang</h1>
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mb-5">
          <div>
            <p>
              Admin &gt; Dashboard &gt; Barang &gt;{' '}
              <span className="text-[#00c29f]">Tambah Barang</span>
            </p>
          </div>
        </div>

        <div className="w-full ">
          <form action="" className="space-y-10 flex flex-col w-full">
            <CustomInput
              inputStyle={'w-full border-[#00c29a] border bg-black'}
              placeholder={'Nama Barang'}
            />
            <CustomInput
              inputStyle={'w-full border-[#00c29a] border bg-black'}
              placeholder={'Harga Barang'}
              inputType={'number'}
            />
            <CustomTextArea
              inputStyle={'w-full border-[#00c29a] border bg-black'}
              placeholder={'Deskripsi Barang'}
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
