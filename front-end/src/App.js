import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <br />
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <p>{text}</p>
    </div>
  );
}

export default App;
