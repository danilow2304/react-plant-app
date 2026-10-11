import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import PlantList from "./components/PlantList.jsx";
import Footer from "./components/Footer.jsx";
import plants from "./data/plants.js";

function App() {
  return (
    <div>
      <Header title="My Plant Collection" />
      <Navigation links={["Home", "Plants"]} />
      <PlantList plants={plants} />
      <Footer text="© 2026 My Plant Collection" />
    </div>
  );
}

export default App;
