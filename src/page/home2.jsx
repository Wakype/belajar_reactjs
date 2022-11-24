import React from 'react';
import logo from '../image/logoEnglish.png';
import bgHero from '../image/imageHero.png';
import logoEx from '../image/logo.png';
import {FaFireAlt, FaCheckCircle, FaCrown, FaRegSmileBeam } from 'react-icons/fa'
import 'animate.css';

const EnglishCourse = () => {
  let [statusProgram, setStatusProgram] = React.useState(false);
  let [statusAbout, setStatusAbout] = React.useState(false);

  return (
    <section className="w-full">
      <header className="w-full h-[90px] bg-gray-500 flex items-center justify-between px-10">
        <div>
          <img src={logo} alt="" className="w-[40px]" />
        </div>
        <div className="flex gap-5">
          <div>
            <h1 className="cursor-pointer hover:text-[#838383] transition-all ease-in-out">Home</h1>
          </div>
          <div className="relative">
            <h1
              className="cursor-pointer hover:text-[#838383] transition-all ease-in-out"
              onMouseOver={() => {
                setStatusProgram(!statusProgram);
              }}
              onMouseOut={() => {
                setStatusProgram((statusProgram = false));
              }}
            >
              Our Programs
            </h1>
            <div
              className={`${
                statusProgram ? 'block translate-y-0' : 'hidden'
              } absolute pt-2 transition-all ease-in-out`}
              onMouseOver={() => {
                setStatusProgram(!statusProgram);
              }}
              onMouseLeave={() => {
                setStatusProgram((statusProgram = false));
              }}
            >
              <div className="border border-black rounded bg-slate-200 px-5 py-3">
                <p className="border-b border-b-slate-500 cursor-pointer font-semibold py-2 hover:text-[#838383] transition-all ease-in-out">
                  TOEFL
                </p>
                <p className="border-b border-b-slate-500 cursor-pointer font-semibold py-2 hover:text-[#838383] transition-all ease-in-out">
                  TOEIC
                </p>
                <p className=" cursor-pointer font-semibold hover:text-[#838383] transition-all ease-in-out">
                  English Certifications
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="cursor-pointer hover:text-[#838383] transition-all ease-in-out">Blog</h1>
          </div>
          <div className="relative">
            <h1
              className="cursor-pointer hover:text-[#838383] transition-all ease-in-out"
              onMouseOver={() => {
                setStatusAbout(!statusAbout);
              }}
              onMouseLeave={() => {
                setStatusAbout((statusAbout = false));
              }}
            >
              About Us
            </h1>
            <div
              className={`${
                statusAbout ? 'block translate-y-0' : 'hidden'
              } absolute pt-2 transition-all ease-in-out right-`}
              onMouseOver={() => {
                setStatusAbout(!statusAbout);
              }}
              onMouseLeave={() => {
                setStatusAbout((statusAbout = false));
              }}
            >
              <div className="border border-black rounded bg-slate-200 px-5 py-3 ">
                <p className="border-b border-b-slate-500 cursor-pointer font-semibold py-2 hover:text-[#838383] transition-all ease-in-out">
                  Our Story
                </p>
                <p className="border-b border-b-slate-500 cursor-pointer font-semibold py-2 hover:text-[#838383] transition-all ease-in-out">
                  Vision
                </p>
                <p className=" cursor-pointer font-semibold hover:text-[#838383] transition-all ease-in-out">
                  Mission
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <body className="w-full overflow-hidden">
        <div className="bg  w-full h-[440px] px-[70px] flex justify-around items-center overflow-hidden">
          <div className='overflow-hidden'>
          <img  src={logoEx} alt="" className='w-[120px] overflow-hidden'/>
          </div>
          <div>
            <h1 className='comicy text-[40px] text-white w-[700px]'>no more bored words to learn English</h1>
            <p className="poppins text-[20px] text-white w-[600px]">our easiest method will help you to learn english better than before</p>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center overflow-hidden px-[70px] my-10">
          <h1 className="comicy text-[20px] mb-10">Why you'll love learning with <span className="text-[#2E91BA]">EEC</span></h1>
          <div className='w-full flex items-center justify-between'>
            <div className="space-y-10">
              <div className="flex">
                <div className='mr-5'>
                  <FaFireAlt size={25}/>
                </div>
                <div>
                  <h1 className="poppins font-semibold">Practicality, Efficiency & Serious</h1>
                  <p className="poppins w-[350px]">Our courses teach reading, listening and speaking skills effectively and efficiently. Check out our latest research!</p>
                </div>
              </div>
              <div className="flex">
                <div className='mr-5'>
                  <FaCheckCircle size={25}/>
                </div>
                <div>
                  <h1 className="poppins font-semibold">Sophistication, Modern</h1>
                  <p className="poppins w-[350px]">With the best combination of AI and linguistics, lessons are tailored to help you learn at the right level and pace.</p>
                </div>
              </div>
            </div>

            <div className='overflow-hidden animate__animated animate__infinite animate__rotateIn animate__slow'>
              <img src={logoEx} alt="" className=""/>
            </div>

            <div className="space-y-10">
              <div className="flex">
                <div className='mr-5'>
                  <FaCrown size={25}/>
                </div>
                <div>
                  <h1 className="poppins font-semibold">Stay motivated and timeless</h1>
                  <p className="poppins w-[350px]">We make language learning habits easy, with game-like features, fun challenges that don't get boring</p>
                </div>
              </div>
              <div className="flex">
                <div className='mr-5'>
                  <FaRegSmileBeam size={25}/>
                </div>
                <div>
                  <h1 className="poppins font-semibold">Have fun!</h1>
                  <p className="poppins w-[350px]">Effective learning doesn't always have to be boring! Build your skills every day with fun exercises and cheerful characters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </section>
  );
};

export default EnglishCourse;
