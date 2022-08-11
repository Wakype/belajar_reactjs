import React from "react";

function App() {
  let [count, setCount] = React.useState(0);
  let [text, setText] = React.useState(false);
  let [message, setMessage] = React.useState(0);
  let [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setMessage(message + 1);
    console.log("useEffect Berjalan");
  }, [count, text]);

  console.log(text);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Belajar useEffect</h1>
      <h3>{message >= 10 ? 'ini 10' : 'belum 10'}</h3>
      <h1>Message: {message}</h1>
      <h1>Count: {count}</h1>
      <h1>Text: {text}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Tambah
      </button>
      <button
        onClick={() => {
          setText(!text);
        }}
      >
        Text
      </button>
    </React.Fragment>
  );
}

export default App;
