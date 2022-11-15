import React, { useLayoutEffect, useEffect } from "react";

const UseLayoutEffect = () => {
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <section>
      <div>useLayoutEffect</div>
    </section>
  );
};

export default UseLayoutEffect;
