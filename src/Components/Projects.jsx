import { useState } from 'react';
import profile from '../assets/project1.png';
import profile1 from '../assets/project2.png';
import profile2 from '../assets/Project3.png';
import profile7 from '../assets/Portfolio.png';
import profile3 from '../assets/clase8.png';
import profile4 from '../assets/clasevirtual.png';
import profile5 from '../assets/contador.png';
import profile6 from '../assets/videoreact.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      label: 'Proyectos Corte 1',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card
            subtitle="PROJECT 1"
            href={profile}
            link="https://github.com/kelvinguetta1608/Clase2Web"
          />
          <Card
            subtitle="PROJECT 2"
            href={profile1}
            link="https://github.com/kelvinguetta1608/Ejercicio-Web"
          />
          <Card
            subtitle="PROJECT 3"
            href={profile2}
            link="https://github.com/edwinmgallego/clase-practica-css-jueves/tree/main/KevinVelasco2215376"
          />
          <Card
            subtitle="PROJECT 4"
            href={profile7}
            link="https://github.com/kelvinguetta1608/Parcial"
          />
        </div>
        
      ),
    },
    {
      label: 'Proyectos Corte 2',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card
            subtitle="Clase Virtual"
            href={profile4}
            link="https://github.com/kelvinguetta1608/EjercicioClase8"
          />
          <Card
            subtitle="Comparador "
            href={profile3}
            link="https://github.com/kelvinguetta1608/Clase-Virtual"
          />
          
          <Card
            subtitle="Contador"
            href={profile5}
            link="https://github.com/kelvinguetta1608/Contador"
          />
          <Card
            subtitle="React"
            href={profile6}
            link="https://github.com/kelvinguetta1608/Youtube-React"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="text-white bg-black lg:p-44 p-4" id="Projects">
      {/* Título */}
      <h2 className="text-4xl text-white font-bold mb-10 text-center">Projects</h2>
      
      {/* Pestañas */}
      <div className="flex justify-center space-x-4 mb-10">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-t-lg text-[17px] font-bold transition-all duration-300 
              ${activeTab === index ? 'bg-gray-900 text-[#1484da]' : 'bg-gray-900 text-[#1484da] hover:bg-gray-700'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenido de las Pestañas */}
      <div className="p-4 border-2 border-[#1484da] rounded-lg">
        {tabData[activeTab].content}
      </div>
    </div>
  );
};

// Componente Card
const Card = ({ subtitle, href, link }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
      <div className="aspect-square">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={href}
            alt={subtitle}
            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
          />
        </a>
      </div>
      <div className="p-4">
        <p className="text-[#1484da] font-bold text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default Projects;

