import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const post = "강남 테헤란로";
  const [coat, a] = useState("가을 코트 추천");
  const [food, b] = useState("강남 우동맛집");
  const [python, c] = useState("파이썬 독학");

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "green", fontSize: "18px;" }}>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{coat}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{food}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{python}</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
