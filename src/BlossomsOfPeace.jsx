
import HeaderProjects from "./Components/HeaderProjects"
import Blossoms from "./Components/Blossoms"
import Footer from "./Components/Footer";
import AboutBlossoms from "./Components/AboutBlossoms";
import BlossomsDevelopment from "./Components/BlossomsDevelopment";
import Contact from "./Components/Contact";
import { useEffect } from 'react';


function BlossomsOfPeace() {
  
  useEffect(() => {
    window.scrollTo(0, 0); // Lleva el scroll a la parte superior
  }, []);

  return (
    <>
      <HeaderProjects/>
      <div style={{ marginTop: '150px' }}></div>
      <AboutBlossoms/>
      <Blossoms/>
      <BlossomsDevelopment/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default BlossomsOfPeace
