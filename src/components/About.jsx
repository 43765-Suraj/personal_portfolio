import { useState } from 'react';
import bannerImage from '../assets/programming-dark.svg'
const About=()=>{
    const [data, setData]=useState({
        title:"I’m a Software Engineer with 3 years of experience in web development,",
        image:bannerImage,
        desc1:`I am a passionate and detail-oriented Java Developer
        in building scalable and efficient software applications. With a strong foundation in object-oriented
         programming and Java technologies, I have successfully contributed to a wide range of projects, 
         from web applications to enterprise-level solutions. My expertise lies in Java, Spring Boot, Hibernate, 
         RESTful APIs, and database management systems`,
        desc2:`I’m always curious about new tech and love diving into the latest trends. 
        I believe the best ideas come when you’re having fun, and that balance between work 
        and life keeps me inspired to push boundaries and keep learning.`,
        actionButton:{
            title:"Read More..",
            link:"/readMore"
        },
    });
    return(
        <>
          <div className="main-container bg-gray border py-16">
            <h1 className="text-center pb-14 text-3xl underline font-bold">About Me</h1>
            <div className='flex'>
                {/**Image */}
                <div className='w-full flex justify-center'>
                    <img className='w-fit' src={data.image} alt='suraj anandrao shende'/>
                </div>
                <div className='w-full'>
                    <h1 className='text-xl font-bold'>{data.title}</h1>
                    <p>{data.desc1}</p>
                    <span className='text-xl font-bold'>But it’s not all about code!</span>
                    <p>{data.desc2}</p>
                <button className="px-3 py-2 bg-orange-500 shadow rounded-full text-1xl">{data.actionButton.title}</button>
                </div>
            </div>
          </div>
        </>
    )
};
export default About;