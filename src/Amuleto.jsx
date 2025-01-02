import AboutBuziraco from "./Components/AboutBuziraco"
import HeaderProjects from "./Components/HeaderProjects"
import Storm from "./Components/Storm"
import Footer from "./Components/Footer";
import AmuletoDevelopment from "./Components/AmuletoDevelopment";
import Contact from "./Components/Contact";
import { useEffect } from 'react';


function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0); // Lleva el scroll a la parte superior
  }, []);
  return (
    <>
      <HeaderProjects/>
      <div style={{ marginTop: '100px' }}></div>
      <AboutBuziraco/>
      <AmuletoDevelopment/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
