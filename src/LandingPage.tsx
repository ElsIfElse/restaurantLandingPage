import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import RestaurantsSection from "./components/RestaurantsSection";
import SmallHero from "./components/Smallhero";



  
const LandingPage = () => {
    return ( 
        <div className="max-w-screen w-screen h-screen flex flex-col items-center py-5">
            <Hero/>
            <Navbar/>          
            <SmallHero text={'- Choose a restaurant -'}/>
            <RestaurantsSection/>
            <Introduction/>
            <Menu/>
            <Gallery/>
            <Footer/>
        </div>
     );
}
 
export default LandingPage;