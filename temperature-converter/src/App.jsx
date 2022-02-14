import { useState } from "react";
import "./App.css";

function App() {
  const [celsiusValue, setCelsiusValue] = useState(0);
  const [fahrenheitValue, setFahrenheitValue] = useState(32);

  const handleCelsiusChange = (e) => {
    setCelsiusValue(e.target.value);
    setFahrenheitValue(((e.target.value * 9) / 5 + 32).toFixed(1));
  };

  const handleFahrenheitChange = (e) => {
    setFahrenheitValue(e.target.value);
    setCelsiusValue((((e.target.value - 32) * 5) / 9).toFixed(1));
  };

  return (
    <div className="App">
      <input
        value={celsiusValue}
        onChange={handleCelsiusChange}
        type="number"
      />
      °C =
      <input
        onChange={(e) => handleFahrenheitChange(e)}
        value={fahrenheitValue}
        type="number"
      />
      °F
    </div>
  );
}

export default App;
