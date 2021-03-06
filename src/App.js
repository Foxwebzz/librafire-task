import BezoekSection from "./Components/BezoekSection";
import FooterSection from "./Components/FooterSection";
import GammaSection from "./Components/GammaSection";
import Herosection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import NewsSection from "./Components/NewsSection";
import StepeniceSection from "./Components/StepeniceSection";
import TableSection from "./Components/TableSection";
import TeverdenSection from "./Components/TeverdenSection";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Herosection />
        <GammaSection />
        <TableSection />
        <StepeniceSection />
        <TeverdenSection /> 
        <BezoekSection />
        <NewsSection />
        <FooterSection />
    </div>
  );
}

export default App;
