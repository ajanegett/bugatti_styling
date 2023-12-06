import bugatti from "./bugatti.png";
import imageCreate from "./imager.js";
import "./style.css";

const other = () => (
  <div className="minicard">
    <h2>Stats</h2>
    <p>13.4 million $$$</p>
    <p>Production: 1</p>
    <p>Engine — 8L quad-turbo16-cylinder engine</p>
    <p>Horsepower — upwards of 1,500 hp in each wheel</p>
    <p>Torque — 1,180 pound-feet</p>
    <p>Acceleration — 0 to 62 mph in 2.4 seconds</p>
  </div>
);

function App() {
  const WIDTH = `600px`;
  const HEIGHT = `300px`;
  let ourImage = {
    src: bugatti,
    alt: "son model bugatti",
    style: {
      width: WIDTH,
      height: HEIGHT,
    },
  };
  return (
    <div className="card">
      <h1>Bugatti La Voiture Noire</h1>
      <div>{imageCreate(ourImage)}</div>
      {other()}
    </div>
  );
}

export default App;
