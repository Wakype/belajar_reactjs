import React, { memo, useCallback, useMemo } from 'react';

export default function Optimize() {
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState('ihsan');
  console.log('parent render');
  var buttonstyle = `px-2 py-1 border border-green-500 rounded bg-white text-black hover:border-green-500 hover:bg-green-500 hover:text-white transition-all ease-in-out`;
  // const handleCount = () => {
  //   setCount((c) => c + 1);
  // };
  // const handleCountOP = useCallback(handleCount, []);

  const prosesBerat = (count) => {
    if (count < 2000000000) {}

    console.log("proses berat berjalan")
    return count + 1;
  };

  const prosesBeratUseMemo = useMemo(() => {
    return prosesBerat(count)
  }, [])

  const handleCount = useCallback(() => {
    setCount((c) => c + 1);
  }, [count]);
  // console.log('useCallback', handleCountOP)

  return (
    <div>
      <h1>Parent</h1>
      <p>count : {count}</p>
      <p>count 2: {prosesBeratUseMemo}</p>
      <p>user : {user}</p>
      <div>
        <button onClick={handleCount} className={buttonstyle}>
          Klik Parent
        </button>
      </div>
      <div  className={`h-10 w-10 bg-${user} my-5`}></div>
      <div className="space-x-3 my-5">
        <button
          className={`${buttonstyle} border-red-500`}
          onClick={() => {
            setUser('red-500');
          }}
        >
          Red
        </button>
        <button
          className={`${buttonstyle}`}
          onClick={() => {
            setUser('green-500');
          }}
        >
          Green
        </button>
        <button
          className={`${buttonstyle}`}
          onClick={() => {
            setUser('blue-500');
          }}
        >
          Blue
        </button>
      </div>

      <MemorizeChild user={user} handleCount={handleCount} />
    </div>
  );
}

function Child({ user, handleCount }) {
  console.log('child render', Date.now());
  // delay(2000);
  return (
    <div>
      <h2>Child</h2>
      <p>User : {user}</p>
      <button
        className="px-2 py-1 border border-green-500 rounded bg-white text-black hover:border-green-500 hover:bg-green-500 hover:text-white transition-all ease-in-out"
        onClick={handleCount}
      >
        Klik Child
      </button>
    </div>
  );
}

const MemorizeChild = memo(Child);
// export memo(Child)

function delay(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  // if (milliseconds < 2000000) {}
}