import bannerImage from '../assets/images.jpeg';
import bannerBackground from '../assets/bannerBackground.png';
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner=()=>{

    const role = useRef(null);

    useEffect(() => {
        const typed = new Typed(role.current, {
          strings: ["Backend Java Developer"], 
          startDelay: 100,
          typeSpeed: 50,
          backSpeed: 10,
          backDelay: 100,
          loop:true
        });

        return () => {
          typed.destroy();
        };
      }, []);

    return(
        <div className="main-container flex items-center">
         <div style={{backgroundImage:`url(${bannerBackground})`,
            backgroundSize:'cover'
        }} className="w-full flex justify-center">
           <div className='w-2/3 ms-10 text-white'>
             {/**text */}
            <h3 className='text-3xl font-semibold'>Hi, I am </h3>
            <h1 className='mt-3 text-4xl font-bold'>Suraj Anandrao Shende</h1>
            <h2 className='mt-3 text-3xl'>I am <span className="font-bold underline" ref={role}></span></h2>
            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, possimus harum consequatur atque maxime numquam a suscipit quisquam reiciendis accusantium beatae, aliquid est optio! Ipsum, quia asperiores?</p>
        <div className='icon-container flex space-x-5'>
           <a className='hover:bg-orange-500 border cursor-pointer w-10 h-10 rounded-full flex justify-center items-center bg-gray-700'> 
             <i class="fa-brands text-3xl fa-facebook"></i>
           </a>
           <a className='hover:bg-orange-500 border cursor-pointer w-10 h-10 rounded-full flex justify-center items-center bg-gray-700'> 
           <i class="fa-brands text-3xl fa-instagram"></i>
            </a>
            <a className='hover:bg-orange-500 border cursor-pointer w-10 h-10 rounded-full flex justify-center items-center bg-gray-700'> 
            <i class="fa-brands text-3xl fa-linkedin"></i>
            </a>
        </div>
        <br/>
        <a className='px-3 py-2 bg-orange-500 shadow rounded-full text-black text-1xl' href='/contact'>Contact Me</a>
           </div>
         </div>
        <div className="w-full flex justify-center">
            {/**image */}
            <img className='rounded-full shadow-lg w-fit' src={bannerImage}/>
        </div>
        </div>
    )
};
export default Banner