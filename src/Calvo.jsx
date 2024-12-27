import AboutStorm from "./Components/AboutStorm"
import Header from "./Components/Header"
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
      <Header/>
      <div style={{ marginTop: '100px' }}></div>
      <CalvoDevelopment/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Calvo
