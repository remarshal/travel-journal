import Nav from "./Components/Nav";
import Card from "./Components/Card";
import data from "./data";
import './App.css';

function App() {
  const destinations = data.map(destination => {
    return (
      // key={destination.id},
      destination = { destination }
    );
  });
  return (
    <div className="App">
      <Nav />
      <Card />
    </div>
  );
}

export default App;
