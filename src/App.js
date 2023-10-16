import { useState } from "react";
import "./App.scss";
import Login from "./components/Login";
import Home from "./components/Home";
import UserContextProvider from "./utils/userContext";

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div className='App'>
      <UserContextProvider>
        {logged ? (
          <Home logout={() => setLogged(false)} />
        ) : (
          <Login setLogged={setLogged} />
        )}
      </UserContextProvider>
    </div>
  );
}

export default App;
