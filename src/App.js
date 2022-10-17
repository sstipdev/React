import logo from "./logo.svg";
import "./App.css";

function App() {
  const post = "강남 테헤란로";

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "green", fontSize: "18px;" }}>블로그</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
