import logo from "./logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" src={logo} className="App-logo" style={{ zIndex: 0 }} />
        <div style={{ zIndex: 1 }}>
          <p style={{ color: "palevioletred" }}>
            I ain't never been so frisky before in my whole life!
          </p>
          <h1 style={{ color: "palevioletred" }}>DECENT</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
