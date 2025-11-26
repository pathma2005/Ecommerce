import Banner from "./Components/Banner/Banner";
import BestSeller from "./Components/BestSeller/BestSeller";
import Brand from "./Components/Brand/Brand";
import Collection from "./Components/Collection/Collection";
import Explore from "./Components/Explore/Explore";
import Fllow from "./Components/Fllow/Fllow";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import NewsLetter from "./Components/NewsLetter/NewsLetter";

function App() {

  return (
    <div>
      {/* Navbar */}
      <Navbar/>
      <Banner/>
      <Collection/>
      <BestSeller/>
      <NewsLetter/>
      <Brand/>
      <Fllow/>
      <Explore/>
      <Footer/>
    </div>
  );
}

export default App;

