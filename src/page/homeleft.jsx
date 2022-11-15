import React from 'react';
import {
  FaUsers,
  FaCircleNotch,
  FaBellSlash,
  FaTimes,
  FaSearch,
} from 'react-icons/fa';
import {
  BsFillChatLeftTextFill,
  BsThreeDotsVertical,
  BsFilter,
  BsCheck2All
} from 'react-icons/bs';

const HomeLeft = () => {
  return (
    <section className=" w-[30%] bg-blue-500 border-r border-r-[#2b373f]">
      <header className="bg-[#202c33] w-full flex h-[7%] items-center justify-between px-5">
        <div className="rounded-full w-[40px] h-[40px] bg-green-500 cursor-pointer">
          <img
            className="rounded-full"
            src="https://stickerly.pstatic.net/sticker_pack/zPu9DQhcCdOhcGmN6IGxCA/YOCGYI/2/407d3fe6-fccc-473e-ab64-d742ca257f23.png"
            alt=""
          />
        </div>

        <div className="flex gap-7">
          <FaUsers
            className="cursor-pointer hover-icon transition-all ease-in-out"
            onMouseOver={({ target }) => (target.style.color = '#cecece')}
            onMouseOut={({ target }) => (target.style.color = '#aebac1')}
            color="#aebac1"
            size={20}
          />
          <FaCircleNotch
            className="rotate-[60deg] cursor-pointer hover-icon transition-all ease-in-out"
            onMouseOver={({ target }) => (target.style.color = '#cecece')}
            onMouseOut={({ target }) => (target.style.color = '#aebac1')}
            color="#aebac1"
            size={20}
          />
          <BsFillChatLeftTextFill
            className="cursor-pointer hover-icon transition-all ease-in-out"
            onMouseOver={({ target }) => (target.style.color = '#cecece')}
            onMouseOut={({ target }) => (target.style.color = '#aebac1')}
            color="#aebac1"
            size={20}
          />
          <BsThreeDotsVertical
            className="cursor-pointer hover-icon transition-all ease-in-out"
            onMouseOver={({ target }) => (target.style.color = '#cecece')}
            onMouseOut={({ target }) => (target.style.color = '#aebac1')}
            color="#aebac1"
            size={20}
          />
        </div>
      </header>

      <div className="w-full h-[10%] bg-[#182229] px-5 flex items-center justify-between">
        <div className="flex gap-5">
          <div className="cursor-pointer w-[45px] h-[45px] bg-[#53bdeb] rounded-full flex items-center justify-center">
            <FaBellSlash size={20} />
          </div>
          <div>
            <p className="text-[#e3e7e5]">Dapatkan notifikasi pesan baru</p>
            <p className="text-[#869695] hover:underline cursor-pointer">
              Nyalakan notifikasi dekstop{' '}
              <span className="font-bold" l>
                &gt;
              </span>
            </p>
          </div>
        </div>

        <div>
          <FaTimes
            className="cursor-pointer hover-icon transition-all ease-in-out"
            onMouseOver={({ target }) => (target.style.color = '#cecece')}
            onMouseOut={({ target }) => (target.style.color = '#aebac1')}
            color="#aebac1"
            size={20}
          />
        </div>
      </div>

      <body className="w-full h-[83%] bg-[#111b21] overflow-y-auto overflow-x-hidden">
        <div className="flex pt-3 justify-between px-3 w-full">
          <div className="flex items-center">
            <div className="bg-[#202c33] flex items-center h-[40px] rounded-l-lg pl-5 pr-8">
              <FaSearch color="#869695" />
            </div>
            <input
              type="text"
              placeholder="Cari atau mulai chat baru"
              className="bg-[#202c33] text-[#869695] w-full h-[40px] rounded-r-lg pr-[130px]"
            />
          </div>

          <div className="flex items-center pl-5">
            <BsFilter color="#869695" size={25} />
          </div>
        </div>

        <div className="mt-5 w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => {
            return (
              <section key={index} className="space-y-3 w-full hover:bg-[#222e35] cursor-pointer">
                <div className="pl-3 w-full">
                  <div className="flex items-center w-full pr-3">
                    <div className="w-[50px] h-[50px] bg-blue-400 rounded-full mr-5">
                      <img
                        className="rounded"
                        src="https://stickerly.pstatic.net/sticker_pack/zPu9DQhcCdOhcGmN6IGxCA/YOCGYI/2/407d3fe6-fccc-473e-ab64-d742ca257f23.png"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between border-b border-b-[#222d34] py-3 w-full">
                      <div>
                        <div className='flex justify-between items-center'>
                        <h1 className="text-[#e3e7e5] font-bold">Kobo</h1>
                        <p className='text-[#00a884]'>11:30</p>
                        </div>

                        <div className='flex justify-between items-center'>
                          <div className='flex items-center'>
                            <BsCheck2All color='#53bdeb' size={20} className="mr-1"/>
                            <p className="text-[#869695]">Mi ayo mabar :3</p>
                          </div>
                        <p className='bg-[#00a884] px-2 rounded-full text-[13px]'>5</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div></div>
                </div>
              </section>
            );
          })}
        </div>
      </body>
    </section>
  );
};

export default HomeLeft;
