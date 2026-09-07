import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  function showMessage() {
    setMessage("Hello! You clicked the button.");
  }

  return (
    <div>
      <h1>My React App</h1>

      <button onClick={showMessage}>
        Click Me
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;