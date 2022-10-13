import React from "react";

function Home() {
  return (
    <React.Fragment>
      {/* <h1 style={{textAlign: 'center'}} className="bg-red-500 text-white">Branch Tailwind-Basic</h1> */}

      <div className="w-screen h-screen bg-red-500">
        <div className="h-[8%] w-full bg-[#161b22] flex justify-between items-center px-5">
          <section className="flex items-center">
            <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
            <input type="text" placeholder="Search or jump to..." className="h-5 rounded border px-2 py-3 ml-3"/>
          </section>
          <div className="">2</div>
        </div>

        <div className="h-[92%] w-full bg-yellow-400 sm:flex flex-none">
          <div className="h-full sm:w-full md:w-[50%] lg:w-[20%] bg-green-400"></div>
          <div className="h-full sm:w-full md:w-[50%] lg:w-[80%] bg-blue-400"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
