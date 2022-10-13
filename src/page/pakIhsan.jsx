import React from "react";

const PakIhsan = () => {
  let classButton = "text-white hover:text-gray-300 transition-all ease-in-out";
  let [popUp, setPopUp] = React.useState(false);

  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-red-500">
        <div className="h-[8%] w-full bg-[#161b22] lg:hidden items-center px-5 flex justify-between">
          <button
            className="h-8 w-8 rounded-full flex flex-col items-center justify-center gap-1"
            onClick={() => {
              setPopUp(!popUp);
            }}
          >
            <div className="w-[20px] border border-white"></div>
            <div className="w-[20px] border border-white"></div>
            <div className="w-[20px] border border-white"></div>
          </button>
          <button className="h-8 w-8 bg-gray-700 rounded-full"></button>
          <button className="h-8 w-8 bg-gray-700 rounded-full"></button>
        </div>

        <div className="h-[8%] w-full bg-[#161b22] hidden lg:grid grid-cols-5 items-center px-5">
          <section className="col-start-1 flex items-center">
            <span className="h-8 w-8 bg-gray-700 rounded-full"></span>
            <input
              type="text"
              placeholder="Search or jump to..."
              className="h-5 rounded border px-2 py-3 ml-3"
            />
          </section>
          <section className="col-span-3 h-full flex items-center gap-5">
            <button className={classButton}>Pull Requests</button>
            <button className={classButton}>Issue</button>
            <button className={classButton}>Marketplace</button>
            <button className={classButton}>Explore</button>
          </section>
          <section className="h-full w-full flex justify-end items-center gap-3">
            <span className="h-8 w-8 bg-gray-700 rounded-full"></span>
            <span className="h-8 w-8 bg-gray-700 rounded-full"></span>
            <span className="h-8 w-8 bg-gray-700 rounded-full"></span>
          </section>
        </div>

        <div className="h-[92%] w-full bg-yellow-400 sm:flex flex-none relative">
          {popUp && (
            <section className="bg-red-500 w-full h-[80%] lg:hidden block absolute top-0 z-10"></section>
          )}

          <div className="h-full w-full md:w-[50%] lg:w-[20%] bg-green-400"></div>
          <div className="h-full w-full md:w-[50%] lg:w-[80%] bg-blue-400"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PakIhsan;
