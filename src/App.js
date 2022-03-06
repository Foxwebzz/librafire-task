import GammaSection from "./Components/GammaSection";
import Herosection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import StepeniceSection from "./Components/StepeniceSection";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Herosection />
        <GammaSection />
        <StepeniceSection />
    </div>
  );
}

export default App;
