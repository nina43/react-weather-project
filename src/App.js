import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by Martyna Ziarek and is{" "}
          <a
            href="https://github.com/nina43/react-weather-project"
            target="_blank"
            noopener
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}
