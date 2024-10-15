
import { Outlet } from "react-router-dom";
// import Footer from "./Footer/Footer";

import Navbar from "./Header/Navbar";
import Hero from "./Header/HeroSection";
import Footer from "./Footer/Footer";



const Layout =()=> {
    return(
        <div>
           <Navbar/>
           <Hero/>
           <Outlet/>
           <Footer/>
           
            
        

        </div>

    )}
    export default Layout;