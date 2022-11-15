import logo from './logo.svg';
import './App.css';
import { HomeLeft, HomeRight } from './page';

function App() {
  return (
    <section className="w-screen h-screen flex">
      <HomeLeft />
      <HomeRight />
    </section>
  );
}

export default App;
