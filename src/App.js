import logo from "./assets/images/space_donkey.png";
import "./App.css";
import BurritosForDelivery from "./components/BurritosForDelivery";
import OnGoingBurritosList from "./components/OnGoingBurritosList";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { UserService } from "./services/UserService";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    UserService.getCurrentUser().then((x) => {
      setCurrentUser(
        x || { name: "", username: "", password: "", saved: false }
      );
    });
  }, []);

  return (
    <>
      {!currentUser.saved ? (
        <div className="App">
          <div>
            <Login user={currentUser} setUser={setCurrentUser} />
          </div>
        </div>
      ) : (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome {currentUser.name} to Space Burritos!</p>
          </header>
          <div>
            <BurritosForDelivery currentUser={currentUser} />
            <OnGoingBurritosList />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
