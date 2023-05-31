import { useState } from "react";
function NavBar(props) {
  const [toggle, setToggle]=useState(false)
  
    const handleOnClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

      const handleToggle =()=>{
        setToggle(!toggle)
        props.handleLight()
    }



    return (
        <div className={`w-screen z-30 flex flex-row shadow-2xl justify-between ${toggle ?"bg-[#ab5820] border-white border-b-[1px]":"bg-[#ffaf7a]"} text-white items-center py-5 mx-auto fixed`}>
        
          <nav className="ml-[7%]">
               <h1 className="text-[20px] hover:cursor-pointer" onClick={(e) => handleOnClick(e, "resume")}>MY PROFILE</h1>
          </nav>
          <nav className="mr-[7%]">
            <ul className="flex flex-row items-center">
              <li className="mr-[56px] xl:flex lg:flex hidden text-base font-bold hover:cursor-pointer"
              onClick={(e) => handleOnClick(e, "project")}>
                  Project
              </li>
              <li className="mr-[56px] text-base xl:flex lg:flex hidden font-bold hover:cursor-pointer"
              onClick={(e) => handleOnClick(e, "skills")}>
                  Skills
              </li>
              <li className="mr-[56px] text-base xl:flex lg:flex hidden font-bold hover:cursor-pointer"
              onClick={(e) => handleOnClick(e, "education")}>
                  Education
              </li>
              <a className="text-base font-bold hover:cursor-pointer " href="/wanchana _resume.pdf"
              target="_blank" 
              >
                  Resume
              </a>
               { !toggle&&
              <li className="ml-[40px] hover:cursor-pointer" onClick={handleToggle}>
              <img src="/icons8-light-100 (1).png" alt="" className="w-[40px]" />
            </li>}
              
              { toggle&&
              <li className="ml-[40px] hover:cursor-pointer" onClick={handleToggle}>
              <img src="/icons8-light-100.png" alt="" className="w-[40px]" />
            </li>}
              
            </ul>
          </nav>
        </div>
    )
}


export default NavBar
