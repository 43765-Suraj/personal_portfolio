import { useState } from "react";

const Header=()=>{

    const [brandName, setBrandName]=useState("Suraj Anandro Shende");
    const [actionButton, setActionButton]=useState({
            title:"Download CV",
            link:"/hire-me",
    })
    const [menuLinks, setMenuLinks]=useState([
        {
            title:"Home",
            link:"/home",
            id:1,
        },
        {
            title:"About",
            link:"/about",
            id:2,
        },
        {
            title:"Skills",
            link:"/skills",
            id:3,
        },
        {
            title:"Portfolio",
            link:"portfolio",
            id:4,
        },
        {
            title:"Contact",
            link:"contact",
            id:5,
        }
    ])

    return (
        <>
        <div className=" h-20 main flex justify-between items-center px-16 bg-gray-100">
        <div>
            {/*logo*/}
            <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>
        <div className="space-x-6">
            {/** Menu links */}
            {menuLinks.map((link)=>(
                <a key={link.id} href={link.link} className="hover:text-orange-200">{link.title}</a>
            ))}
        </div>
        <div>
            <a href={actionButton.link} className="px-3 py-2 bg-orange-500 shadow rounded-full text-1xl">{actionButton.title}</a>
        </div>
        </div>
        </>
    )
};
export default Header;