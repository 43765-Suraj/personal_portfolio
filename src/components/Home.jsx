import bannerImage from '../assets/images.jpeg';
import bannerBackground from '../assets/coverImage.png';
import Typed from "typed.js";
import { useRef, useState } from "react";
import { useEffect } from "react";
import ContactModal from '../components/ContactModal';
const Banner = () => {
  const role = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const typed = new Typed(role.current, {
      strings: ["Backend Java Developer"], 
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="main-container flex flex-col md:flex-row items-center">
      {/* Banner Background Section */}
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full flex justify-center py-12 md:py-24"
      >
        <div className='w-11/12 md:w-2/3 text-white px-6'>
          {/* Text Content */}
          <h3 className='text-2xl sm:text-3xl font-semibold'>Hi, I am </h3>
          <h1 className='mt-3 text-3xl sm:text-4xl font-bold'>Suraj Anandrao Shende</h1>
          <h2 className='mt-3 text-2xl sm:text-3xl'>
            I am <span className="font-bold underline" ref={role}></span>
          </h2>
          {/* <p className='mt-3 text-base sm:text-lg'>
            Lorem ipsum dolor sit amet consectetur, possimus harum consequatur atque maxime numquam a suscipit quisquam reiciendis accusantium beatae, aliquid est optio! Ipsum, quia asperiores?
          </p> */}

          {/* Social Icons */}
          <div className='icon-container flex space-x-5 mt-4'>
            <a
              className='hover:bg-orange-500 border cursor-pointer w-10 h-10 rounded-full flex justify-center items-center bg-gray-700'
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands text-3xl fa-facebook"></i>
            </a>
            <a
              className='hover:bg-orange-500 border cursor-pointer w-10 h-10 rounded-full flex justify-center items-center bg-gray-700'
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands text-3xl fa-instagram"></i>
            </a>
            <a
              className='hover:bg-orange-500 border cursor-pointer w-10 h-10 rounded-full flex justify-center items-center bg-gray-700'
              href="https://www.linkedin.com/in/suraj-shende-6898aa321/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands text-3xl fa-linkedin"></i>
            </a>
          </div>
          <br/>
          {/* Contact Button */}
          <button className='px-3 py-2 bg-orange-500 shadow rounded-full text-black text-1xl' onClick={openModal}>
          Contact Me
        </button>
        </div>
      </div>

      {/* Banner Image */}
      <div className="w-full flex justify-center py-6 md:py-0">
        <img
          className='rounded-full shadow-lg w-48 sm:w-60 md:w-72 lg:w-80'
          src={bannerImage}
          alt="Suraj Anandrao Shende"
        />
      </div>
      {/* Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Banner;
