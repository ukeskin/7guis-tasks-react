import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) => setCount(e.target.value)}
        value={count}
      />
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default App;
