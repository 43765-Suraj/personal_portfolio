import { useState } from "react";
import resume from '../assets/Resume.pdf';

const Header = ({ scrollToHome, scrollToAbout, scrollToExpertise, scrollToServices }) => {
  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: resume,
  });
  return (
    <div className="h-20 main flex justify-between items-center px-6 md:px-16 bg-gray-100">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold">Suraj Anandrao Shende</h1>
        <span className="text-1xl">Software Engineer</span>
      </div>

      {/* Menu Links (Desktop) */}
      <div className="hidden md:flex space-x-6">
        <button onClick={scrollToHome} className="hover:text-orange-500">
          Home
        </button>
        <button onClick={scrollToAbout} className="hover:text-orange-500">
          About
        </button>
        <button onClick={scrollToExpertise} className="hover:text-orange-500">
          Skills
        </button>
        {/* <button onClick={scrollToServices} className="hover:text-orange-500">
          Services
        </button> */}
        <div>
          <a
            href={actionButton.link}
            className="px-3 py-2 bg-orange-500 shadow rounded-full text-xl"
            download="Suraj_Anandrao_Shende_Resume.pdf"
          >
            {actionButton.title}
          </a>
        </div>
      
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center space-x-4">
        <button onClick={scrollToHome} className="text-orange-500">Home</button>
        <button onClick={scrollToAbout} className="text-orange-500">About</button>
        <button onClick={scrollToExpertise} className="text-orange-500">Skills</button>
        <div>
          <a
            href={actionButton.link}
            className="px-3 py-2 bg-orange-500 shadow rounded-full text-xl"
            download="Suraj_Anandrao_Shende_Resume.pdf"
          >
            {actionButton.title}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
