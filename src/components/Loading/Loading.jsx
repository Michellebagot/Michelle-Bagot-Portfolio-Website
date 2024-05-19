import { useState, useEffect } from "react";
import "./loading.css";

const Loading = () => {
  const [message, setMessage] = useState("Charts Are Loading...");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage(
        "Charts are still loading... " +
          "It should be along shortly.  " +
          "Thank you for your patience."
      );
    }, 2500);
  }, []);

  return (
    <div className="loading-screen">
      <h3>{message}</h3>
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
