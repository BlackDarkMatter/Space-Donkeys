import logo from "./assets/images/space_donkey.png";
import "./App.css";
import DonkeyOnDelivery from "./components/DonkeyOnDelivery";
import OnGoingDonkeysList from "./components/OnGoingDonkeysList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Space Donkeys!</p>
      </header>
      <div>
        <DonkeyOnDelivery />
        <OnGoingDonkeysList />
      </div>
    </div>
  );
}

export default App;
