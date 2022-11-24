import React from 'react';
import useJuz from '../hook/useJuz';
import useList from '../hook/useList';
import usePage from '../hook/usePage';

const CustomHook = () => {
  var buttonstyle = `px-2 py-1 border border-green-500 rounded bg-white text-black hover:border-green-500 hover:bg-green-500 hover:text-white transition-all ease-in-out`;
  const [statusLampu, toggleLampu] = useToggle();
  const { page, setPage, pageSize, setPageSize } = usePage();
  const { alquran } = useList();
  const { alquran: alquranJuz, setJuz, juz } = useJuz(1);

  const handlePageSize = (e) => {
    setPageSize(e.target.value);
  };
  const handlePage = (e) => {
    setPage(e.target.value);
  };
  return (
    <section>
      <div className="flex flex-col w-[300px] border border-blue-800 rounded items-center h-[100px] p-5 justify-between">
        <h1>Lampu saat ini: {statusLampu}</h1>
        <button
          className="w-[80px] border border-blue-800 rounded text-blue-800 hover:bg-blue-800 hover:text-white transition-all ease-in-out"
          onClick={(e) => {
            toggleLampu();
          }}
        >
          Saklar
        </button>
      </div>

      <div>
        <h1>Page Size : {pageSize}</h1>
        <h1>Page : {page}</h1>

        <select
          value={pageSize}
          onChange={handlePageSize}
          className={`${buttonstyle} my-3`}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <div className="space-x-5 my-3">
          <button className={`${buttonstyle}`} onClick={handlePage} value={1}>
            1
          </button>
          <button className={`${buttonstyle}`} onClick={handlePage} value={2}>
            2
          </button>
          <button className={`${buttonstyle}`} onClick={handlePage} value={3}>
            3
          </button>
          <button className={`${buttonstyle}`} onClick={handlePage} value={4}>
            4
          </button>
          <button className={`${buttonstyle}`} onClick={handlePage} value={5}>
            5
          </button>
        </div>
      </div>

      <div className="m-5 border border-green-500 rounded p-5 flex flex-col justify-center items-center">
        <h1 className="font-bold">{juz}</h1>
        <div className="space-x-3">
          <button
            className={buttonstyle}
            onClick={() => setJuz((juz) => juz + 1)}
          >
            Juz Selanjutnya
          </button>
          <button
            className={buttonstyle}
            onClick={() => setJuz((juz) => juz - 1)}
          >
            Juz Sebelumnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomHook;

const useToggle = function () {
  let [value, toggle] = React.useState('OFF');
  return [value, toggle];
};
