import { useState } from 'react';
import bannerImage from '../assets/images.jpeg'
const About=()=>{
    const [data, setData]=useState({
        title:"Java Developer",
        image:bannerImage,
        desc1:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe modi adipisci iusto cumque 
        officia temporibus quia ducimus quas sint porro!`,
        desc2:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eum iure. Veniam, 
        cum sed, iusto molestiae natus consequatur rerum minima obcaecati similique omnis consequuntur. 
        Mollitia distinctio perferendis minus libero! Veritatis.`,
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
                    <h1 className='text-xl font-semibold'>{data.title}</h1>
                    <p>{data.desc1}</p>
                    <p>{data.desc2}</p>
                <button className="px-3 py-2 bg-orange-500 shadow rounded-full text-1xl">{data.actionButton.title}</button>
                </div>
            </div>
          </div>
        </>
    )
};
export default About;