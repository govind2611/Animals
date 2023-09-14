import "./App.css";
import Card from "./components/Card";
import Frog from "./assets/frog-7503799_1280.png";
import Dog from "./assets/dog-1728494_1280.png";
import Monkey from "./assets/capuchin-8183528_1280.jpg";
import Deer from "./assets/european-fallow-deer-8168561_1280.png";
import horse from "./assets/horse-8193368_1280.jpg";

function App() {
  return (
    <>
      <ul>
        <li>
          <input type="checkbox" />
          <div className="glow">A</div>
        </li>
        <li>
          <input type="checkbox" />
          <div className="glow">N</div>
        </li>
        <li>
          <input type="checkbox" />
          <div className="glow">I</div>
        </li>
        <li>
          <input type="checkbox" />
          <div className="glow">M</div>
        </li>
        <li>
          <input type="checkbox" />
          <div className="glow">A</div>
        </li>
        <li>
          <input type="checkbox" />
          <div className="glow">L</div>
        </li>
        <li>
          <input type="checkbox" />
          <div className="glow">S</div>
        </li>
      </ul>
      <div className="App">
        <Card img={Dog} name="Dog" rating={5} price={800} />
        <Card img={Monkey} name="Monkey" rating={4.5} price={500} />
        <Card img={Deer} name="Deer" rating={3.9} price={300} />
        <Card img={horse} name="Horse" rating={5} price={1150} />
        <Card img={Frog} name="Froggy" rating={3.5} price={500} />
        <Card img={Dog} name="Dog" rating={5} price={800} />
        <Card img={Monkey} name="Monkey" rating={4.5} price={500} />
        <Card img={Deer} name="Deer" rating={3.9} price={300} />
        <Card img={horse} name="Horse" rating={5} price={1150} />
        <Card img={Frog} name="Froggy" rating={3.5} price={500} />
        <Card img={Dog} name="Dog" rating={5} price={800} />
        <Card img={Monkey} name="Monkey" rating={4.5} price={500} />
        <Card img={Deer} name="Deer" rating={3.9} price={300} />
        <Card img={horse} name="Horse" rating={5} price={1150} />
        <Card img={Frog} name="Froggy" rating={3.5} price={500} />
        <Card img={Dog} name="Dog" rating={5} price={800} />
        <Card img={Monkey} name="Monkey" rating={4.5} price={500} />
        <Card img={Deer} name="Deer" rating={3.9} price={300} />
        <Card img={horse} name="Horse" rating={5} price={1150} />
        <Card img={Frog} name="Froggy" rating={3.5} price={500} />
        <Card img={Dog} name="Dog" rating={5} price={800} />
        <Card img={Monkey} name="Monkey" rating={4.5} price={500} />
        <Card img={Deer} name="Deer" rating={3.9} price={300} />
        <Card img={horse} name="Horse" rating={5} price={1150} />
        <Card img={Frog} name="Froggy" rating={3.5} price={500} />
        <Card img={Dog} name="Dog" rating={5} price={800} />
        <Card img={Monkey} name="Monkey" rating={4.5} price={500} />
        <Card img={Deer} name="Deer" rating={3.9} price={300} />
        <Card img={horse} name="Horse" rating={5} price={1150} />
        <Card img={Frog} name="Froggy" rating={3.5} price={500} />
        <Card img={Dog} name="Dog" rating={5} price={800} />
        <Card img={Monkey} name="Monkey" rating={4.5} price={500} />
        <Card img={Deer} name="Deer" rating={3.9} price={300} />
        <Card img={horse} name="Horse" rating={5} price={1150} />
        <Card img={Frog} name="Froggy" rating={3.5} price={500} />
        <Card img={Dog} name="Dog" rating={5} price={800} />
        <Card img={Monkey} name="Monkey" rating={4.5} price={500} />
        <Card img={Deer} name="Deer" rating={3.9} price={300} />
        <Card img={horse} name="Horse" rating={5} price={1150} />
        <Card img={Frog} name="Froggy" rating={3.5} price={500} />
        <Card img={Dog} name="Dog" rating={5} price={800} />
        <Card img={Monkey} name="Monkey" rating={4.5} price={500} />
        <Card img={Deer} name="Deer" rating={3.9} price={300} />
        <Card img={horse} name="Horse" rating={5} price={1150} />
        <Card img={Frog} name="Froggy" rating={3.5} price={500} />
      </div>
    </>
  );
}

export default App;
