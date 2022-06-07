import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      hello world <button onClick={() => setCount(count + 1)}>Click me</button>
      <h3>The count is {count}</h3>
    </div>
  );
}

export default App;
