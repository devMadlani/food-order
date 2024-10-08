import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
