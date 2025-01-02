import AboutHome from "./Components/AboutHome"
import HeaderProjects from "./Components/HeaderProjects"
import Storm from "./Components/Storm"
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import HomeDevelopment from "./Components/HomeDevelopment";
import { useEffect } from 'react';



function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Lleva el scroll a la parte superior
  }, []);

  return (
    <>
      <HeaderProjects/>
      
      <div style={{ marginTop: '100px' }}></div>
      <AboutHome/>
      <HomeDevelopment/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
