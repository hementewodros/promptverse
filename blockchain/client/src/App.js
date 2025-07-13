import React, { useEffect, useState } from "react";
import { readCount, incrementTo1000 } from "./utils/web3Utils";

const App = () => {
  const [count, setCount] = useState("Loading...");

  const fetchCount = async () => {
    try {
      const value = await readCount();
      setCount(value);
    } catch (err) {
      console.error("❌ Error reading count:", err);
    }
  };

  const handleIncrement = async () => {
    try {
      await incrementTo1000(); // Call the function to change value
      fetchCount(); // Re-fetch updated value
    } catch (err) {
      console.error("❌ Error incrementing:", err);
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div>
      <h1>🧮 Smart Contract Counter</h1>
      <p>Counter value: {count}</p>
      <button onClick={handleIncrement}>Set to 1000 (via count())</button>
    </div>
  );
};

export default App;
