import bannerImage from '../assets/coverEndImage.png'
const Expertise=()=>{
    return(
       <>
       <div className="my-2">
        <h1 className="text-3xl text-center underline font-bold">My Expertise</h1>
        {/**Box section */}
        <div   className="box-container flex py-14">
        <div style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover' }}
            className=" text-center space-y-6 md:space-y-10 px-6 py-6 md:py-16">
            {/**Text Container */}
            <h1 className='text-2xl font-bold'>I love these techologies</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur ufdhfdj fhdfbhdf bd ufdf dbfjd    bdh fbhdf hdadipisicing elit. Provident  quae eum assumenda officiis adipisci nulla.</p>
            <button className="px-3 py-2 bg-orange-500 rounded-full text-bla shadow-orange-50">Hire Me</button>
        </div>
        <div className='flex justify-center'>
        <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
             {/**Skill Container */}
             <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Core Java</p>
             <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">J2EE</p>
             <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Hibernate (ORM Tool)</p>
             <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Spring Framework</p>
             <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Spring Boot Framework</p>
             <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Microservice Framework</p>
             <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">JavaScript</p>
             <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">React JS</p>
             <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">CSS/Html</p>
             <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">MYSQL DataBase</p>
        </div>
        </div>
        </div>
       </div>
       </>
    )
};
export default Expertise;