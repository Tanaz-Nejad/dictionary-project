import logo_dictionary from "./logo_dictionary.png";
import Dictionary from "./Dictionary.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo_dictionary} alt="dictionary" className="dictionary" />
          Dictionary
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;
