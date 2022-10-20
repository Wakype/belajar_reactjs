import React from "react";
import { FaGithub, FaBook } from "react-icons/fa";

const PakIhsan = () => {
  let classButton =
    "text-white hover:text-gray-300 transition-all ease-in-out cursor";
  let [popUp, setPopUp] = React.useState(false);

  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-red-500">
        <div className="relative z-[100] h-[8%] w-full bg-[#161b22] lg:hidden items-center px-5 flex justify-between">
          <button
            className="h-8 w-8 rounded-full flex flex-col items-center justify-center gap-1"
            onClick={() => {
              setPopUp(!popUp);
            }}
          >
            <div
              className={`transform ${
                popUp ? "rotate-180" : "rotate-0"
              } transition-all ease-in-out duration-700 flex flex-col gap-1`}
            >
              <div className="w-[20px] border border-white"></div>
              <div className="w-[20px] border border-white"></div>
              <div className="w-[20px] border border-white"></div>
            </div>
          </button>
          <button className="h-8 w-8 bg-gray-700 rounded-full"></button>
          <button className="h-8 w-8 bg-gray-700 rounded-full"></button>
        </div>

        <div className="h-[8%] w-full bg-[#161b22] hidden lg:grid grid-cols-6 items-center px-5">
          <section className="col-start-1 col-span-2 flex items-center">
            <span className="h-8 w-8 flex items-center">
              <FaGithub size={25}/>
            </span>
            <input
              type="text"
              placeholder="Search or jump to..."
              className="h-5 w-[272px] rounded border text-[#C9D1D9] border-[#30363D] px-2 py-3 ml-3 bg-[#0D1117] relative"
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
          {/* {popUp && (
            <section className="bg-red-500 w-full h-[80%] lg:hidden block absolute top-0 z-10"></section>
          )} */}

          <section
            className={`transition-all ease-in-out duration-700 ${
              popUp
                ? "transform translate-y-0"
                : "transform -translate-y-[700px]"
            } h-[50%] w-full lg:hidden block absolute top-0 z-10`}
          >
            <div className="bg-red-500 h-full">
              <h1 className="font-bold text-lg -rotate-90 whitespace-nowrap">
                SMK Madinatul Quran
              </h1>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#EF4444"
                  fill-opacity="1"
                  d="M0,96L60,122.7C120,149,240,203,360,208C480,213,600,171,720,128C840,85,960,43,1080,37.3C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                ></path>
              </svg>
            </div>
          </section>
          <div className="h-full w-full md:w-[50%] lg:w-[25%] bg-[#0D1117] p-5 space-y-3 text-[#C9D1D9] border-r border-r-[#30363D]">
            <section className="space-y-2">
              <div className="flex justify-between items-center">
                <h1>Recent Repositories</h1>
                <button className="px-4 py-[5px] bg-green-700 text-white rounded-lg flex items-center space-x-1">
                  <FaBook size={15}/>
                  <h1 className="font-bold text-[14px]">New</h1>
                </button>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full rounded-lg py-1 px-2 bg-[#010409] border border-[#30363D]"
                  placeholder="Find a repository..."
                />
              </div>
              <div>
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                  return (
                    <div
                      key={item}
                      className="flex items-center mt-3 space-x-2"
                    >
                      <div className="flex items-center">
                        <FaGithub size={20} />
                      </div>
                      <p>Wakype/Reposity</p>
                    </div>
                  );
                })}
              </div>
            </section>
            <section></section>
            <section></section>
          </div>
          <div className="h-full w-full md:w-[50%] lg:w-[80%] bg-blue-400"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PakIhsan;
