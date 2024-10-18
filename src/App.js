import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictionary defaultKeyword="butterfly" />
      </header>
      <footer>
        This project was coded by Larissa Gueth. It is{" "}
        <a
          href="https://github.com/LarissaGu/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        .
      </footer>
    </div>
  );
}
