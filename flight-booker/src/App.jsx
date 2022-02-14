import React, { useState, useEffect } from "react";

export default function App() {
  const [error, setError] = useState(null);
  const [result, setResult] = useState();
  const [canBook, setCanBook] = useState(true);
  const [flightType, setFlightType] = useState("oneway");
  const [departureDate, setDepartureDate] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const [returnDate, setReturnDate] = useState(
    new Date().toISOString().substring(0, 10)
  );

  const handleBook = () => {
    if (departureDate > returnDate) {
      setCanBook(false);
    }
    setResult({
      canBook,
      flightType,
      departureDate,
      returnDate,
    });
  };

  useEffect(() => {
    if (returnDate < departureDate) {
      setCanBook(false);
      setError("Return date cannot be before departure date");
    } else {
      setCanBook(true);
      setError(null);
    }
  }, [returnDate, departureDate]);

  return (
    <div className="App">
      <h1>Flight Booker </h1>
      <div className="form">
        <select onChange={(e) => setFlightType(e.target.value)}>
          <option value="oneway">One Way Flight</option>
          <option value="return">Return Flight</option>
        </select>
        <input
          onChange={(e) => setDepartureDate(e.target.value)}
          value={departureDate}
          type="date"
        />
        <input
          disabled={flightType === "oneway"}
          onChange={(e) => setReturnDate(e.target.value)}
          value={returnDate}
          type="date"
        />
        <button disabled={!canBook} onClick={handleBook}>
          book
        </button>
        <p style={{ color: "red" }}>{error && error}</p>
      </div>
      <div>
        <pre style={{ fontSize: "24px" }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      </div>
    </div>
  );
}
