import NavBar2 from "../component/NavBar2";
import { useState } from "react";

function Education() {
  const [light, setLight] = useState(JSON.parse(localStorage.getItem("light")));

  const handleShow = () => {
    setLight(!light);
    localStorage.setItem("light", !light);
  };

  return (
    <>
      <NavBar2 handleLight={handleShow} light={light} />
      <div
        className={`bg-gradient-to-r  ${
          !light
            ? "text-white from-[#171a18] to-[#36493c] "
            : "text-orange-700 from-[#dfdacf] to-[#ffd978]"
        } pt-20  text-white  pb-36`}
      >
        <h1
          className={`text-center text-[30px] xl:text-[50px] font-[600] lg:text-[50px] xl:pt-20 xl:pb-12 lg:pt-20 pt-16 pb-10 lg:pb-12 mb-[20px] ${
            !light ? "text-white " : "text-orange-700"
          } `}
        >
          E
          <span className={`${!light ? "text-[#76f9c5]" : "text-orange-700"}`}>
            DU
          </span>
          CATION
        </h1>

        <div
          className={`   xl:mx-[15%] lg:mx-[10%] mx-[5%] ${
            !light ? "text-white " : "text-orange-700"
          } `}
        >
          <div className="flex flex-row">
            <div className="w-[24%]  hidden xl:flex lg:flex">
              <h1 className="xl:text-[36px] lg:text-[36px] text-[24px] leading-10 font-[400] ">
                TechUp <br />{" "}
                <span
                  className={`${!light ? "text-[#76f9c5]" : "text-orange-700"}`}
                >
                  Bootcamp
                </span>{" "}
                <br /> <span className="text-[18px]">2023</span>{" "}
              </h1>
            </div>
            <div
              className={`xl:w-[76%] lg:w-[80%] w-full xl:border-l-[4px] lg:border-l-[4px] border-l-[0px] ${
                !light ? "border-[white]" : "border-[#6a88ff]"
              } px-8`}
            >
              <h1 className="xl:text-[36px] lg:text-[36px] text-[24px] leading-10 font-[400] xl:hidden lg:hidden">
                TechUp <br />{" "}
                <span
                  className={`${!light ? "text-[#76f9c5]" : "text-orange-700"}`}
                >
                  Bootcamp
                </span>
                , <span className="text-[18px]">2023</span>{" "}
              </h1>
              <div
                className={`w-[30%] h-2 my-3 ${
                  !light ? "bg-white" : "bg-[#6a88ff]"
                }  flex xl:hidden lg:hidden`}
              ></div>
              <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-[300]">
                I recently completed a 4-month Coding Bootcamp focused on
                Front-end web development. I learned HTML, CSS, ReactJS,
                JavaScript, and Tailwind CSS. On the Back-end, we covered
                Node.js, Express, MongoDB, PostgreSQL, and Supabase. The
                Bootcamp emphasized teamwork using Git for collaboration and
                Agile methodologies, including Scrum.
              </p>
            </div>
          </div>

          <div className="flex flex-row ">
            <div className="w-[24%]  hidden xl:flex lg:flex pt-16">
              <h1 className="xl:text-[36px] lg:text-[36px] text-[24px] leading-10 font-[400] ">
                Greenwich <br />{" "}
                <span
                  className={`${!light ? "text-[#76f9c5]" : "text-orange-700"}`}
                >
                  College
                </span>{" "}
                <br /> <span className="text-[18px]">2020-2021</span>{" "}
              </h1>
            </div>
            <div
              className={`xl:w-[76%] lg:w-[80%] pt-16  w-full xl:border-l-[4px] lg:border-l-[4px] border-l-[0px] ${
                !light ? "border-[white]" : "border-[#6a88ff]"
              } px-8`}
            >
              <h1 className="xl:text-[36px] lg:text-[36px] text-[24px] leading-10 font-[400] xl:hidden lg:hidden">
                Greenwich <br />{" "}
                <span
                  className={`${!light ? "text-[#76f9c5]" : "text-orange-700"}`}
                >
                  College
                </span>
                , <span className="text-[18px]">2020-2021</span>{" "}
              </h1>
              <div
                className={`w-[30%] h-2 my-3 ${
                  !light ? "bg-white" : "bg-[#6a88ff]"
                }  flex xl:hidden lg:hidden`}
              ></div>
              <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-[300]">
                In the years 2020-2021, I studied General English at Greenwich
                College in Australia. The course was at the upper-intermediate
                level and covered various aspects of the English language.
              </p>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="w-[24%]  hidden xl:flex lg:flex pt-16">
              <h1 className="xl:text-[36px] lg:text-[36px] text-[24px] leading-10 font-[400] ">
                Rangsit <br />{" "}
                <span
                  className={`${!light ? "text-[#76f9c5]" : "text-orange-700"}`}
                >
                  University
                </span>{" "}
                <br /> <span className="text-[18px]">2015-2019</span>{" "}
              </h1>
            </div>
            <div
              className={`xl:w-[76%] lg:w-[80%] pt-16  w-full xl:border-l-[4px] lg:border-l-[4px] border-l-[0px] ${
                !light ? "border-[white]" : "border-[#6a88ff]"
              } px-8`}
            >
              <h1 className="xl:text-[36px] lg:text-[36px] text-[24px] leading-10 font-[400] xl:hidden lg:hidden">
                Rangsit <br />{" "}
                <span
                  className={`${!light ? "text-[#76f9c5]" : "text-orange-700"}`}
                >
                  University
                </span>
                , <span className="text-[18px]">2015-2019</span>{" "}
              </h1>
              <div
                className={`w-[30%] h-2 my-3 ${
                  !light ? "bg-white" : "bg-[#6a88ff]"
                }  flex xl:hidden lg:hidden`}
              ></div>
              <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-[300]">
                In the years 2015-2019, I studied Electrical Engineering at
                Rangsit University and Graduated Bachaelor of Degree in College
                of Electrical Engineering in 2019 , GPA 3.02
              </p>
            </div>
          </div>
        </div>
        <div className=" pt-[80px] mx-[15%]">
          <h1
            className={`text-[36px] font-[600] pb-[80px] text-center ${
              !light ? "text-[#ffff]" : "text-black"
            } `}
          >
            <span
              className={`${!light ? "text-[#76f9c5]" : "text-orange-700"}`}
            >
              My
            </span>{" "}
            Certification
          </h1>
          <div className=" flex xl:justify-between lg:justify-center justify-center xl:flex-row lg:flex-col flex-col">
            <div className={`flex xl:flex-row lg:flex-col flex-col gap-5 xl:w-[50%] lg:w-full w-full`}>
              <img
                src="/skill/cer1.png"
                className="xl:w-[20%] lg:w-[50%] w-[50%] mx-auto"
              />
              <div>
                <div>
                  <span
                    className={`${
                      !light ? "text-[#76f9c5]" : "text-orange-700"
                    }`}
                  >
                    TechUp's Certificate
                  </span>
                </div>
                <p className={`mt-4 ${!light ? "text-[#ffff]" : "text-black"}`}>
                  {" "}
                  Completed TechUp's Software Development Bootcamp in May 2023
                </p>
              </div>
            </div>
            <div className="flex  xl:flex-row lg:flex-col flex-col gap-5 xl:w-[50%] lg:w-full w-full xl:mt-0 lg:mt-9 mt-9">
              <img
                src="/skill/cer2.png"
                className="xl:w-[40%] lg:w-[80%] w-[80%] mx-auto"
              />
              <div>
                <div>
                  <span
                    className={`${
                      !light ? "text-[#76f9c5]" : "text-orange-700"
                    }`}
                  >
                    Huawei's Certificate
                  </span>
                </div>
                <p className={`mt-4 ${!light ? "text-[#ffff]" : "text-black"}`}>
                  {" "}
                  Completed the Huawei Certificate requirements and is
                  recognized as a data center faciility
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
