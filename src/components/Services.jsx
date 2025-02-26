import { useState } from "react";

const Services=()=>{
    return(
        <>
        <div className="main-container py-14">
        <h1 className="text-center text-3xl underline font-bold">My Services</h1>
        <div className="container-services space-x-5 flex mt-12">
            <div className="cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 text-center shadow-lg rounded-xl services1 space-y-4">
                 <i class=" text-4xl fa-brands fa-react"></i>
                <h1 className="font-bold text-center">Front End Developement</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ipsa in distinctio iste qui provident quaerat reiciendis voluptates maxime quisquam.</p>
            <button className="px-3 py-2 bg-orange-200 rounded-full shadow-orange-50">Check</button>
            </div>
            <div className="cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 text-center shadow-lg rounded-xl services2 space-y-4">
                <i class=" text-4xl fa-brands fa-java"></i>
                <h1 className="font-bold text-center">Java Developement</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ipsa in distinctio iste qui provident quaerat reiciendis voluptates maxime quisquam.</p>
            <button className="px-3 py-2 bg-orange-200 rounded-full shadow-orange-50">Check</button>
            </div>
            <div className="cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 text-center shadow-lg rounded-xl services3 space-y-4">
                <i class=" text-4xl fa-brands fa-aws"></i>
                <h1 className="font-bold text-center">AWS</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ipsa in distinctio iste qui provident quaerat reiciendis voluptates maxime quisquam.</p>
            <button className="px-3 py-2 bg-orange-200 rounded-full shadow-orange-50">Check</button>
            </div>
        </div>
        </div>
        </>
    )
};
export default Services;