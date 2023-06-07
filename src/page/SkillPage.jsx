import NavBar2 from "../component/NavBar2";
import { useState } from "react";

function SkillPage() {
  const [light, setLight] = useState(JSON.parse(localStorage.getItem("light")));

  const handleShow = () => {
    setLight(!light);
    localStorage.setItem("light", !light);
  };

  return (
    <>
      <NavBar2 handleLight={handleShow} light={light} />

      <div
        id="skills"
        className={`w-80% py-36  mx-auto  ${
          !light
            ? "text-white bg-[#000000]"
            : "text-orange-700 bg-gradient-to-tr from-white to-[#fff6d1]"
        }  flex flex-col justify-center items-center`}
      >
        <div>
          <h1 className="text-center font-[600] xl:text-[55px] lg:text-[55px] text-[30px] ">
            {" "}
            SKILL
            <span
              className={`${!light ? "text-[#76f9c5]" : "text-orange-700"}`}
            >
              S
            </span>
          </h1>
        </div>

        <div className=" w-[80%] xl:w-[60%] lg:w-[60%] mx-[50px] ">
          <div>
            <h2 className="text-center mt-[20px] xl:text-[40px] lg:text-[40px] text-[20px]">
              <span
                className={`${!light ? "text-[#76f9c5]" : "text-orange-700"}`}
              >
                FRONT-END
              </span>{" "}
              DEVELOP
            </h2>
          </div>
          <div
            className={`xl:flex lg:flex hidden flex-row ${
              !light ? "bg-black" : "bg-[#ffaf7a]"
            } justify-between mt-[30px]  bg-opacity-50 p-[30px] rounded-[40px] border-[1px] `}
          >
            <img
              src="/skill/icons8-html.svg"
              className="w-[120px]  transition-all duration-300 hover:scale-125"
            />
            <img
              src="/skill/icons8-css (1).svg"
              className="w-[120px] transition-all duration-300 hover:scale-125"
            />
            <img
              src="/skill/icons8-tailwind-css.svg"
              className="w-[120px] transition-all duration-300 hover:scale-125"
            />
            <img
              src="/skill/icons8-javascript.svg"
              className="w-[120px] transition-all duration-300 hover:scale-125"
            />
            <img
              src="/skill/icons8-react.svg"
              className="w-[120px] transition-all duration-300 hover:scale-125"
            />
          </div>

          <div
            className={`xl:hidden lg:hidden  flex-row ${
              !light ? "bg-black" : "bg-[#ffaf7a]"
            } justify-between mt-[30px]  bg-opacity-50 p-[30px] rounded-[40px] border-[1px] `}
          >
            <div className=" flex justify-between">
              <img
                src="/skill/icons8-html.svg"
                className="w-[120px]  transition-all duration-300 hover:scale-125"
              />
              <img
                src="/skill/icons8-css (1).svg"
                className="w-[120px] transition-all duration-300 hover:scale-125"
              />
              <img
                src="/skill/icons8-tailwind-css.svg"
                className="w-[120px] transition-all duration-300 hover:scale-125"
              />
            </div>

            <div className=" flex justify-around">
              <img
                src="/skill/icons8-javascript.svg"
                className="w-[120px] transition-all duration-300 hover:scale-125"
              />
              <img
                src="/skill/icons8-react.svg"
                className="w-[120px] transition-all duration-300 hover:scale-125"
              />
            </div>
          </div>

          <div className="mt-[40px]">
            <h2 className="text-center xl:text-[40px] lg:text-[40px] text-[20px]">
              BLACK-END{" "}
              <span
                className={`${!light ? "text-[#76f9c5]" : "text-orange-700"}`}
              >
                DEVELOP
              </span>
            </h2>
          </div>
          <div
            className={`xl:flex lg:flex hidden flex-row ${
              !light ? "bg-black" : "bg-[#ffaf7a]"
            } justify-between mt-[30px]  bg-opacity-50 p-[30px] rounded-[40px] border-[1px] `}
          >
            <img
              src="/skill/icons8-nodejs (1).svg"
              className="w-[120px] transition-all duration-300 hover:scale-125"
            />
            <img
              src="/skill/icons8-express-js.svg"
              className="w-[120px] transition-all duration-300 hover:scale-125"
            />
            <img
              src="/skill/icons8-postgresql.svg"
              className="w-[120px] transition-all duration-300 hover:scale-125"
            />
            <img
              src="/skill/icons8-mongodb.svg"
              className="w-[120px] transition-all duration-300 hover:scale-125"
            />
          </div>
          <div
            className={`xl:hidden lg:hidden  flex-row ${
              !light ? "bg-black" : "bg-[#ffaf7a]"
            } justify-between mt-[30px]  bg-opacity-50 p-[30px] rounded-[40px] border-[1px] `}
          >
            <div className=" flex justify-around">
              <img
                src="/skill/icons8-nodejs (1).svg"
                className="w-[120px] transition-all duration-300 hover:scale-125"
              />
              <img
                src="/skill/icons8-express-js.svg"
                className="w-[120px] transition-all duration-300 hover:scale-125"
              />
            </div>

            <div className=" flex justify-around">
              <img
                src="/skill/icons8-postgresql.svg"
                className="w-[120px] transition-all duration-300 hover:scale-125"
              />
              <img
                src="/skill/icons8-mongodb.svg"
                className="w-[120px] transition-all duration-300 hover:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillPage;
