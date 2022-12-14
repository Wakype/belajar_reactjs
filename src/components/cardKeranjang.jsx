import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { DeleteKeranjang, GetKeranjang } from '../api/homeAPI';

const CardKeranjang = ({
  gambar,
  jumlah,
  handle,
  nama,
  stok,
  rating,
  harga,
  key,
  id,
}) => {
  const [product, setProduct] = React.useState([]);
  const [status, setStatus] = React.useState(false);

  const hapusKeranjanghandle = async (id) => {
    // e.preventDefault();
    try {
      let response = await DeleteKeranjang(id);
      console.log('hapusKeranjanghandle =>', response);
      getKeranjang();
    } catch (err) {
      console.log('hapusKeranjanghandle err =>', err);
    }
  };

  const getKeranjang = async () => {
    try {
      let response = await GetKeranjang();
      console.log('responseKeranjang =>', response);
      setProduct(response.data.data);
    } catch (err) {
      console.log('errGetKeranjang =>', err);
    } finally {
    }
  };
  React.useEffect(() => {
    getKeranjang();
  }, []);

  return (
    <section
      className={`${
        status ? 'hidden' : 'block'
      } w-full h-[200px] rounded-[10px] border-2 border-black bg-[#395144] p-5 mb-5`}
      key={key}
    >
      <div className="flex h-full w-full">
        <div className="w-[220px] h-full mr-5 border-2 border-black rounded-[10px] flex items-center">
          <img src={gambar} alt="" className="rounded-[10px] w-full h-full" />
        </div>

        <div className="flex flex-col h-full justify-between w-full">
          <div>
            <h1 className="text-white font-semibold text-[20px]">{nama}</h1>
            <div className="flex  justify-between">
              <p className="text-white">Stok tersisa: {stok}</p>
              <p className="text-white">Rating: {rating}</p>
            </div>
          </div>
          <div className="text-white flex items-center justify-between">
            <p className="text-white font-semibold text-[20px]">{harga}</p>
            <div className="flex items-center space-x-3">
              <div
                className="flex items-center rounded-full border-2 border-[#e91e63] p-[5px] cursor-pointer"
                onClick={() => {
                  hapusKeranjanghandle(id);
                  setStatus(!status);
                }}
              >
                <FaRegTrashAlt color="#e91e63" size={15} />
              </div>
              <div className="h-[25px] w-[2px] bg-white"></div>
              <div className="flex items-center space-x-2">
                <AiOutlineMinusCircle
                  className="cursor-pointer"
                  color="#ffffff"
                  size={30}
                />
                <p className="text-white">{jumlah}</p>
                <AiOutlinePlusCircle
                  className="cursor-pointer"
                  color="#ffffff"
                  size={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardKeranjang;
