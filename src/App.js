import dictionary from "./dictionary.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dictionary} alt="dictionary" className="dictionary" />
        Dictionary
      </header>
    </div>
  );
}

export default App;
