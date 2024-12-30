import AboutStorm from "./Components/AboutStorm"
import HeaderProjects from "./Components/HeaderProjects"
import Storm from "./Components/Storm"
import Footer from "./Components/Footer";
import CalvoDevelopment from "./Components/CalvoDevelopment";
import Contact from "./Components/Contact";
import { useEffect } from 'react';


function Calvo() {
  
  useEffect(() => {
    window.scrollTo(0, 0); // Lleva el scroll a la parte superior
  }, []);

  return (
    <>
      <HeaderProjects/>
      <div style={{ marginTop: '100px' }}></div>
      <CalvoDevelopment/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Calvo
