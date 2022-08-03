import React from "react";
import "./style/style.css";
import Layout from "./komponen/layout";
import Button from "./komponen/button";

export default function App() {
  let [name, setName] = React.useState('')
  let [email, setEmail] = React.useState('')
  let [password, setPassword] = React.useState('')
  let [confirmPassword, setConfirmPassword] = React.useState('')

  return(
    <React.Fragment>
      <form>tes</form>
    </React.Fragment>
  )
}




// function App() {
//   let [count, setCount] = React.useState(0);
//   const handleTambah = () => {
//     setCount(count + 1);
//   };
//   const handleKurang = () => {
//     setCount(count - 1);
//   };
//   return (
//     <React.Fragment>
//       <h1 style={{ textAlign: "center" }}>Belajar State</h1>
//       <div className="container">
//         <div>
//           <h1> Count = {count}</h1>
//           <Button onClick={handleTambah} title="Tambah" color="blue" />
//           <Button
//             disabled={count <= 0 ? true : false}
//             onClick={handleKurang}
//             title="Kurang"
//             color="green"
//           />
//           <Button
//           disabled={count === 0 ? true : false}
//             onClick={() => {
//               setCount(0);
//             }}
//             title="Reset"
//             color="red"
//           />
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// export default App;
