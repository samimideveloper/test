import Logo from "./components/Logo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo title="hello world" style={{ backgroundColor: "red" }}></Logo>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Logo title="bye world" style={{ backgroundColor: "blue" }}></Logo>
      </header>
    </div>
  );
}

export default App;
