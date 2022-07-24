import dictionary_logo from "./dictionary_logo.png";
import Dictionary from "./Dictionary.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={dictionary_logo} alt="Dictionary" className="logo" />
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultWord="Sunset" />
        </main>
        <footer>
          <small>Coded by Tanaz Nejad</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
