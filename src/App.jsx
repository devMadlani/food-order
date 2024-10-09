import { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

function App() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState();
  //Authontication
  useEffect(() => {
    // Make and Api call and send User Namme
    const data = {
      name: "Dev Madlani",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider
      value={{ loggedInUser: userName, setUserName }}
    >
      <div>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
