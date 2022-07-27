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
          <Dictionary defaultWord="Car" />
        </main>
        <footer>
          This project was coded by Tanaz Nejad and is{" "}
          <a href="https://github.com/Tanaz-Nejad/dictionary-project.git">
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a href="https://lustrous-cocada-f32964.netlify.app">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
