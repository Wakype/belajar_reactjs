import React from 'react';
import logo from '../image/logoEnglish.png';
import bgHero from '../image/imageHero.png';
import logoEx from '../image/logo.png';

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
            <h1 className="cursor-pointer">Home</h1>
          </div>
          <div className="relative">
            <h1
              className="cursor-pointer"
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
                statusProgram ? 'block' : 'hidden'
              } absolute pt-2 `}
              onMouseOver={() => {
                setStatusProgram(!statusProgram);
              }}
              onMouseLeave={() => {
                setStatusProgram((statusProgram = false));
              }}
            >
              <div className="border border-black rounded bg-slate-200 px-5 py-3">
                <p className="border-b border-b-slate-500">TOEFL</p>
                <p className="">TOEIC</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="cursor-pointer">Blog</h1>
          </div>
          <div>
            <h1
              className="cursor-pointer"
              onMouseOver={() => {
                setStatusAbout(!statusAbout);
              }}
              onMouseLeave={() => {
                setStatusAbout((statusAbout = false));
              }}
            >
              About Us
            </h1>
            <div></div>
          </div>
        </div>
      </header>

      <body>
        <div className="bg w-full h-[440px]">
          {/* <img src={bgHero} alt="" /> */}
          <p>1</p>
        </div>
      </body>
    </section>
  );
};

export default EnglishCourse;
