import Banner from "./Components/Banner/Banner"
import Brand from "./Components/Brand/Brand";
import Collection from "./Components/Collection/Collection";
import Explore from "./Components/Explore/Explore";
import Fllow from "./Components/Fllow/Fllow";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Card from "./Components/Card/Card";



function App() {

  return (
    <div>
      <Navbar/>
      <Banner/>
      <Brand/>
      <Explore/>
        <NewsLetter/>
           <Card/>
         <Collection/>
               <Fllow/>
      <Footer/>
      </div>
  );
}

export default App;



