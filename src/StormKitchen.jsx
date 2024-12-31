import AboutStorm from "./Components/AboutStorm"
import HeaderProjects from "./Components/HeaderProjects"
import Storm from "./Components/Storm"
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import StormDevelopment from "./Components/StormDevelopment";
import { useEffect } from 'react';



function StormKitchen() {
  
  useEffect(() => {
    window.scrollTo(0, 0); // Lleva el scroll a la parte superior
  }, []);

  return (
    <>
      <HeaderProjects/>
      <div style={{ marginTop: '100px' }}></div>
      <AboutStorm/>
      
      <StormDevelopment/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default StormKitchen
