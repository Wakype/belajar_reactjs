import React from "react";

const CustomHook = () => {
  let [statusLampu, toggleLampu] = useToggle();

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
    </section>
  );
};

export default CustomHook;

const useToggle = function () {
  let [value, toggle] = React.useState("OFF");
  return [value, toggle];
};
