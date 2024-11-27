import { useState } from 'react';
import { Link } from 'react-router-dom';  // Asegúrate de importar Link
import profile from '../assets/StormInTheKitchen.png';
import profile1 from '../assets/Drift.png';
import profile2 from '../assets/Blossoms.png';
import profile7 from '../assets/Home.png';
import profile3 from '../assets/Amuleto.png';
import profile4 from '../assets/Diseño.png';
import profile9 from '../assets/Calvoduty.png';
import profile6 from '../assets/videoreact.png';
import profile8 from '../assets/Portfolio.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      label: 'Game Jams',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          <Card
            subtitle="Storm In The Kitchen"
            href={profile}
            link="/StormKitchen"  // Ruta interna a StormKitchen
          />
          <Card
            subtitle="Drift Up"
            href={profile1}
            link="/DriftUp"
          />
          <Card
            subtitle="Blossoms of Peace"
            href={profile2}
            link="/BlossomsOfPeace"
          />
        </div>
      ),
    },
    {
      label: 'Interactive Experiences',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          <Card
            subtitle="UAO Vision Home"
            href={profile7}
            link="/Home"
            className="w-full md:w-80 h-auto"
          />
          <Card
            subtitle="Amuleto de Jade"
            href={profile1}
            link="/Amuleto"
            className="w-full md:w-80 h-auto"
          />
          <Card
            subtitle="Calvo Duty"
            href={profile9}
            link="/Calvo"
          />
        </div>
      ),
    },
    {
      label: 'Digital Creation & Web',
      content: (
        <div className="max-w-3xl mx-auto p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              subtitle="Simple Web Portfolio"
              href={profile8}
              link="https://github.com/kelvinguetta1608/Parcial"
              className="w-full md:w-80 h-auto"
            />
            <Card
              subtitle="Adobe Suite Design"
              href={profile4}
              link="https://www.behance.net/kevinvelasco5"
              className="w-full md:w-80 h-auto"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="text-white bg-black lg:p-44 p-4" id="Projects">
      <h2 className="text-4xl text-white font-bold mb-10 text-center">Projects</h2>

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

      <div className="p-4 border-2 border-[#1484da] rounded-lg">
        {tabData[activeTab].content}
      </div>
    </div>
  );
};

// Componente Card
const Card = ({ subtitle, href, link }) => {
  const isExternalLink = link.startsWith('http'); // Verifica si el enlace es externo

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 cursor-pointer">
      <div className="aspect-square">
        {isExternalLink ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={href}
              alt={subtitle}
              className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
            />
          </a>
        ) : (
          <Link to={link}>
            <img
              src={href}
              alt={subtitle}
              className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
            />
          </Link>
        )}
      </div>
      <div className="p-4">
        <p className="text-[#1484da] font-bold text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default Projects;
