import logo from "./assets/images/space_donkey.png";
import "./App.css";
import BurritosForDelivery from "./components/BurritosForDelivery";
import OnGoingBurritosList from "./components/OnGoingBurritosList";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { UserService } from "./services/UserService";
import { RestaurantService } from "./services/RestaurantService";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userList, setUserList] = useState([]);
  const actionOptions = { UNSET: "UNSET", DELIVER: "DELIVER", ORDER: "ORDER" };
  const [currentAction, setCurrentAction] = useState(actionOptions.UNSET);
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    UserService.getCurrentUser().then((x) => {
      setCurrentUser(
        x || { name: "", username: "", password: "", saved: false }
      );
    });
  }, []);

  useEffect(() => {
    UserService.getUserList().then((x) => setUserList(x));
  }, []);

  useEffect(() => {
    RestaurantService.getRestaurants().then((x) => setRestaurantList(x));
  }, []);

  return (
    <>
      {currentUser ? (
        !currentUser.saved ? (
          <div className="App">
            <div>
              <Login
                user={currentUser}
                setUser={setCurrentUser}
                userList={userList}
                setUserList={setUserList}
              />
            </div>
          </div>
        ) : (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Welcome {currentUser.name} to Space Burritos!</p>
            </header>
            <div>
              <h4>What do you want to do?</h4>
              <div>
                <button
                  className="link-button"
                  onClick={() => setCurrentAction(actionOptions.DELIVER)}
                >
                  I want to deliver burritos
                </button>
                <button
                  className="link-button"
                  onClick={() => setCurrentAction(actionOptions.ORDER)}
                >
                  I want to order burritos
                </button>
              </div>
            </div>
            <br />
            {currentAction === actionOptions.DELIVER ? (
              <BurritosForDelivery
                currentUser={currentUser}
                restaurantList={restaurantList}
              />
            ) : (
              ""
            )}
            {currentAction === actionOptions.ORDER ? (
              <OnGoingBurritosList
                userList={userList}
                restaurantList={restaurantList}
              />
            ) : (
              ""
            )}
          </div>
        )
      ) : (
        <div className="App">
          <div>Loading...</div>
        </div>
      )}
    </>
  );
}

export default App;
