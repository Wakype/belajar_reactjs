import React from "react";
import Card from "./komponen/card";

function App() {
  let [count, setCount] = React.useState(0);

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Pembelajaran Remedial</h1>
      <Card count={count} setCount={setCount}/>
    </React.Fragment>
  );
}

export default App;
