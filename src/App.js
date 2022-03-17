import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <h1 className="title">DICTIONARY APP</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        This project was coded by Isobelle Joyce{" "}
          and is{" "}
          <a
            href="https://github.com/isobelleanna/dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
      </footer>
      </div>
    </div>
  );
}

export default App;
