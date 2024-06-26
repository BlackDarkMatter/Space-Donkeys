import logo from "./assets/images/space_donkey.png";
import "./App.css";
import DonkeyOnDelivery from "./components/BurritosForDelivery";
import OnGoingDonkeysList from "./components/OnGoingBurritosList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Space Burritos!</p>
      </header>
      <div>
        <DonkeyOnDelivery />
        <OnGoingDonkeysList />
      </div>
    </div>
  );
}

export default App;
