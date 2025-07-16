import React, { useEffect, useState } from "react";
import { readCount, incrementCounter, getContract } from "./utils/web3Utils";

const App = () => {
  const [count, setCount] = useState("Loading...");
  const [loading, setLoading] = useState(false);
  
  const fetchCount = async () => {
    try {
      const value = await readCount();
      setCount(value);
    } catch (err) {
      console.error("❌ Error reading count:", err);
      setCount("Error");
    }
  };

  const handleIncrement = async () => {
    setLoading(true);
    try {
      await incrementCounter();
      // No need to manually fetch here if event listener is working
    } catch (err) {
      console.error("❌ Transaction failed:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCount();

    let contract;
    const setupEventListener = async () => {
      contract = await getContract();

      const handler = (newCount, sender) => {
        console.log("📢 CounterIncremented event:", newCount.toString(), sender);
        setCount(newCount.toString());
      };

      contract.on("CounterIncremented", handler);

      return () => {
        if (contract) {
          contract.off("CounterIncremented", handler);
        }
      };
    };

    setupEventListener();

    // Cleanup listener on unmount
    return () => {
      if (contract) {
        contract.removeAllListeners("CounterIncremented");
      }
    };
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🧮 Smart Contract Counter</h1>
      <p>
        Counter value: <strong>{count}</strong>
      </p>
      <button onClick={handleIncrement} disabled={loading}>
        {loading ? "Processing..." : "Increment Counter"}
      </button>
    </div>
  );
};

export default App;
