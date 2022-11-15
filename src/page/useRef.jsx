import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import "animate.css";

const UseRef = () => {
  // const inputRef = useRef(null);

  // const onClick = () => {
  //   console.log("inputRef value =>", inputRef.current.value);
  //   console.log("inputRef current =>", inputRef.current);
  //   inputRef.current.focus();
  //   inputRef.current.type = "password";
  //   inputRef.current.value = "Waky";
  // };

  // =============================================
  // =============================================

  // const [name, setName] = React.useState("");
  // const [status, setStatus] = React.useState(true);
  // const inputRef2 = React.useRef("Hari Pahlawan Nasional");
  // const renderCount = React.useRef(0);
  // React.useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });

  // function clickMe() {
  //   inputRef2.current.focus();
  //   inputRef2.current.value = "Bung Tomo";
  //   inputRef2.current.className = "border p-4 bg-red-500";
  // }

  // =============================================
  // =============================================

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const topRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollToTop = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <section className="flex justify-between my-5 w-full animate__animated animate__fadeInTopRight">
      {/* <div className="border border-blue-800 rounded p-3">
        <h1>Hilmi</h1>
        <input
          type="text"
          ref={inputRef}
          name="name"
          id="name"
          placeholder="Tulis Nama"
        />
        <button onClick={onClick}>Change Name</button>
      </div>

      <div className="border border-blue-800 rounded p-3">
        <input
          type="text"
          ref={inputRef2}
          className="border p-1 transition-all ease-in-out"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <p>Hari ini adalah {name}</p>
        <p>Render Count {renderCount.current} times</p>
        <button onClick={clickMe}>Click Me</button>
      </div> */}

      {/* ============================================== */}
      {/* ============================================== */}

      <div ref={topRef} className="w-full">
        <div className="space-x-5">
          <button
            onClick={() => {
              scrollToSection(homeRef);
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection(aboutRef);
            }}
          >
            About
          </button>
        </div>

        <div ref={homeRef} className="h-screen w-full bg-red-500 pt-10">
          <h1 className="text-white font-bold">Home</h1>
        </div>
        <div ref={aboutRef} className="h-screen w-full bg-blue-500 pt-10">
          <h1 className="text-white font-bold">About</h1>
        </div>

        <div className="sticky z-10 bottom-5 ml-5">
          <button
            onClick={() => {
              scrollToTop(topRef);
            }}
            className="border  border-green-500 cursor-pointer p-3 rounded hover:bg-green-500 transition-all ease-in-out"
          >
            <FaArrowUp color="#ffffff" className="hover:text-[#ffffff]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseRef;
