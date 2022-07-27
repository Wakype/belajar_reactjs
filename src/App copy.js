// import logo from './logo.svg';
// import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hello World!
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

function Contoh() {
  let umur = 16;
  let keturunan = 4;
  return (
    <React.Fragment>
      <h1>Umur Saya {umur}</h1>
      <h1>Keturunan ke-{umur + keturunan}</h1>
      <p>Mana suaranya? Ehe! Ehe! Ehe!</p>
      <p>Hello bejob</p>
      <button>Klik</button>
    </React.Fragment>
  );
}

export default Contoh;
// export default Contoh
