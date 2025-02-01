import { useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/StormInTheKitchen.png';
import profile1 from '../assets/Doggy.jpg';
import profile2 from '../assets/Blossoms.png';
import profile7 from '../assets/Home.png';
import profile3 from '../assets/PendonBuziraco.png';
import profile4 from '../assets/Diseño.png';
import profile9 from '../assets/Calvoduty.png';
import profile6 from '../assets/Ecommerce.png';
import profile8 from '../assets/PDiabetApp.png';

const Projects = () => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const projects = [
    { subtitle: 'UAO Vision Home', href: profile7, link: '/Home' },
    { subtitle: 'La Maldición Del Buziraco', href: profile3, link: '/Amuleto' },
    { subtitle: 'Calvo Duty', href: profile9, link: '/Calvo' },
    { subtitle: 'Storm In The Kitchen', href: profile, link: '/StormKitchen' },
    { subtitle: 'Doggy Park', href: profile1, link: '/DriftUp' },
    { subtitle: 'Blossoms of Peace', href: profile2, link: '/BlossomsOfPeace' },
    { subtitle: 'Figma DiabetApp', href: profile8, link: 'https://www.figma.com/proto/aUutiUZ7A8yQmvt5Jmq8zi/DiabetApp?node-id=1-287&t=eokhqjEjTgMJBHOv-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A287' },
    { subtitle: 'Ecommerce Website', href: profile6, link: 'https://ecommercefinalweb.vercel.app/' },
    { subtitle: 'Adobe Suite Design', href: profile4, link: 'https://www.behance.net/kevinvelasco5' },
  ];

  const itemsPerGroup = 3; // Número de proyectos visibles a la vez
  const totalGroups = Math.ceil(projects.length / itemsPerGroup);

  const handleNext = () => {
    setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % totalGroups); // Ir al siguiente grupo (loop infinito)
  };

  const handlePrevious = () => {
    setCurrentGroupIndex((prevIndex) => (prevIndex - 1 + totalGroups) % totalGroups); // Ir al grupo anterior (loop infinito)
  };

  const currentGroup = projects.slice(
    currentGroupIndex * itemsPerGroup,
    currentGroupIndex * itemsPerGroup + itemsPerGroup
  );

  return (
    <div className="text-white bg-black lg:p-44 p-4" id="Projects">
      <h2 className="text-4xl text-white font-bold mb-10 text-center">Projects</h2>

      {/* Controles de navegación */}
      <div className="flex justify-between items-center mb-10">
      <button
        onClick={handlePrevious}
        className="px-[20px] py-[6px] text-3xl rounded mt-6 bg-[#1484da] mb-10 hover:border transition-all duration-300 ease-in-out hover:bg-transparent border-[#1484da] animate-slide-left"
      >
        ←
      </button>

      <button
        onClick={handleNext}
        className="px-[20px] py-[6px] text-3xl rounded mt-6 bg-[#1484da] mb-10 hover:border transition-all duration-300 ease-in-out hover:bg-transparent border-[#1484da] animate-slide-right"
      >
        →
      </button>

      </div>




      {/* Proyectos visibles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
        {currentGroup.map((project, index) => (
          <Card
            key={index}
            subtitle={project.subtitle}
            href={project.href}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

// Componente Card
const Card = ({ subtitle, href, link }) => {
  const isExternalLink = link.startsWith('http');

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
