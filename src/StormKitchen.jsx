import AboutStorm from "./Components/AboutStorm"
import Header from "./Components/Header"
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
      <Header/>
      <div style={{ marginTop: '100px' }}></div>
      <AboutStorm/>
      <Storm/>
      <StormDevelopment/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default StormKitchen
