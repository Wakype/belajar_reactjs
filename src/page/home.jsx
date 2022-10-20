import React from "react";
import {
  FaGithub,
  FaRegBell,
  FaPlus,
  FaRegUser,
  FaCaretDown,
  FaBook,
} from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Home() {
  let classButton =
    "text-[#f0f6fc] hover:text-gray-300 transition-all ease-in-out cursor-pointer text-[14px] font-semibold";
  let classIcon =
    "flex items-center hover:text-gray-300 transition-all ease-in-out cursor-pointer";
  let [popUp, setPopUp] = React.useState(false);

  return (
    <React.Fragment>
      {/* <h1 style={{textAlign: 'center'}} className="bg-red-500 text-white">Branch Tailwind-Basic</h1> */}

      <div className="h-screen bg-red-500">
        <div className="h-[60px] w-full bg-[#161b22] flex justify-between items-center px-[32px]">
          <section className="flex items-center">
            <div className="flex items-center">
              <span className="h-8 w-8 flex items-center mr-3">
                <FaGithub size={35} color="#ffffff" />
              </span>
              <div className="flex items-center border border-[#30363d] rounded-[6px] mr-[16px] bg-[#0D1117] ml-1">
                <input
                  type="text"
                  placeholder="Search or jump to..."
                  className="h-[27px] w-[237px] rounded border text-[#c2c3c5] placeholder:text-[#c2c3c5] text-[14px] px-[3px] py-3 ml-3 bg-transparent border-none focus:border-none focus:outline-none"
                />
                <div className="text-[#C9D1D9] border border-[#30363d] rounded px-[7px] text-[12px] mr-[5px]">
                  /
                </div>
              </div>
            </div>
            <div className="h-full flex items-center gap-[16px]">
              <button className={classButton}>Pull requests</button>
              <button className={classButton}>Issues</button>
              <button className={classButton}>Marketplace</button>
              <button className={classButton}>Explore</button>
            </div>
          </section>

          <section className="text-white flex items-center gap-[15px]">
            <div className={classIcon}>
              <FaRegBell />
            </div>
            <div className={classIcon}>
              <FaPlus size={13} className="mr-[3px]" />
              <FaCaretDown size={13} />
            </div>
            <div className={classIcon}>
              <FaRegUser className="mr-[3px]" />
              <FaCaretDown size={13} />
            </div>
          </section>
        </div>

        <div className="h-[92%] w-full bg-yellow-400 sm:flex flex-none">
          <div className="h-full sm:w-full md:w-[50%] lg:w-[37%] bg-[#0D1117] pt-[40px] space-y-5 overflow-auto border-r border-r-[#30363d]">
            <section className="px-[32px] space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-[#C3CBD4] font-semibold text-[14px]">
                  Recent Repositories
                </h1>
                <button className="flex items-center text-[#f0f6fc] rounded-[6px] bg-green-700 px-[13px] py-[5px] font-semibold text-[12px] gap-1">
                  <FaBook size={15} />
                  New
                </button>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Find a repository..."
                  className="h-[27px] w-full rounded-[6px] border text-[#c2c3c5] placeholder:text-[#717983] text-[14px] px-[10px] py-[15px] bg-[#010409] border-[#30363d]"
                />
              </div>
            </section>

            <section className="px-[32px]">
              <div className="border-b border-b-[#30363d] pb-5">
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                  return (
                    <div
                      key={item}
                      className="flex items-center mt-2 space-x-2"
                    >
                      <div className="flex items-center">
                        <FaGithub size={18} color={`#ffffff`} />
                      </div>
                      <p className="text-[#C3CBD4] text-[14px] font-normal">
                        Wakype/Reposity
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="px-[32px]">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#C3CBD4] font-semibold text-[14px]">
                  Recent activity
                </h1>
                <p className="text-[12px] text-[#7A828C]">
                  When you take actions across GitHub, we’ll provide links to
                  that activity here.
                </p>
              </div>
            </section>
          </div>

          <div className="h-full sm:w-full md:w-[50%] lg:w-[80%] bg-[#010409] px-[30px]">
            <section className="mt-[18px]">
              <Tabs>
                <TabList className={`flex border-b border-b-[#30363d]`}>
                  <Tab
                    className={`text-[#C9D1D9] px-[8px] py-[11px] text-[14px]`}
                    selectedClassName={`bg-transparent border-b-[2px] border-b-[#F78166] font-semibold`}
                  >
                    <span className="hover:bg-[#21262D] hover:rounded transition-all ease-in-out px-[8px] py-[5px]">
                      Following
                    </span>
                  </Tab>

                  <Tab
                    className={`text-[#C9D1D9] px-[8px] py-[11px] text-[14px]`}
                    selectedClassName={`bg-transparent border-b-[2px] border-b-[#F78166] font-semibold`}
                  >
                    <span className="hover:bg-[#21262D] hover:rounded transition-all ease-in-out px-[8px] py-[5px]">
                      For you{" "}
                      <span className="px-[4px] py-[1px] border rounded-xl border-green-600 text-green-500 ml-[5px] text-[12px]">
                        Beta
                      </span>
                    </span>
                  </Tab>
                </TabList>

                <TabPanel>
                  <h2 className="text-white">Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <h2 className="text-white">Any content 2</h2>
                </TabPanel>
              </Tabs>
            </section>
          </div>

          <div className="h-full hidden lg:block lg:w-[38%] bg-[#ff4fff]"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
