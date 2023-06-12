import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../index.css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [light, setLight] = useState(
    JSON.parse(localStorage.getItem("light")) ?? false
  );

  const handleShow = () => {
    setLight(!light);
    localStorage.setItem("light", !light);
  };

  return (
    <>
      <NavBar handleLight={handleShow} light={light} />
      <main
        id="resume"
        className="w-full pt-[70px] transition-all duration-300 "
      >
        <div
          className="transition-all duration-300 flex "
          style={
            light
              ? { background: "linear-gradient(90deg, #ffff 30%, #ffe69b)" }
              : { background: "linear-gradient(90deg, #111313 50%, #223b35)" }
          }
        >
          <section className="xl:ml-[15%] lg:ml-[7%] ml-[5%] flex flex-row xl:justify-between lg:justify-between justify-center">
            <div className="w-[50%] pt-24  flex flex-col">
              <div className="xl:hidden  lg:hidden flex justify-center">
                <img
                  src="/2222.png"
                  className={`rounded-full w-52 border-[15px] ${
                    light ? "border-[#769bf9]" : "border-[#76f9c5]"
                  }`}
                />
              </div>
              <p
                className={`${
                  light ? "text-[#6a88ff]" : "text-[#76f9c5]"
                } text-[18px] font-[600] xl:text-start lg:text-start text-center mt-6 xl:mt-0 lg:mt-0`}
              >
                JUNIOR DEVELOPER
              </p>
              <h1
                className={`xl:text-[60px] font-[600] xl:mt-0 lg:mt-0 mt-8 lg:text-[60px] text-[30px]  ${
                  !light ? "text-white" : "text-black"
                } text-center lg:text-start xl:text-start `}
              >
                WANCHANA{" "}
                <span
                  className={`${light ? "text-[#6a88ff]" : "text-[#76f9c5]"} `}
                >
                  INMASOM
                </span>
              </h1>
              <div
                className={` w-full xl:w-[130px] lg:w-[130px] mb-5 mt-2 h-[5px] ${
                  light ? "bg-[#6a88ff]" : "bg-[#76f9c5]"
                } `}
              ></div>
              <p
                className={`font-[300] ${
                  !light ? "text-white" : "text-black"
                } xl:text-[16px] xl:mt-0 lg:mt-0 my-8 lg:text-[16px] text-[16px] w-full xl:w-[80%] lg:w-[80%] text-center lg:text-start xl:text-start`}
              >
                Hi, I'm looking for a front-end or 
full-stack developer position. 
<br />I graduated in electrical engineering, but I'm interested in software development, so that's why I changed. I started learning by studying in 
the Fullstack Developer Bootcamp to focus on this, and I am confident and intent on being a developer.
              </p>
            </div>

            <div className="xl:flex lg:flex hidden w-[40%] pt-16 lg:mr-[7%] mr-[5%]  xl:mr-[10%]">
              <img src="/pic-removebg.png" className="w-full " />
            </div>
          </section>
        </div>

        <section
          id="aboutMe"
          className={`  ${
            light ? "text-black" : "text-white"
          } xl:pt-20 lg:pt-20 py-20 ${
            light ? "bg-[#ffe7aa] " : "bg-black"
          } xl:h-[600px] lg:h-[600px] `}
        >
          <div className="xl:mx-[15%] xl:flex lg:flex hidden xl:flex-row lg:flex-row lg:mx-[7%] mx-[5%] justify-between">
            <div className="w-[45%] ">
              <h1 className="text-[40px] font-semibold">
                About{" "}
                <span
                  className={`${light ? "text-[#6a88ff]" : "text-[#76f9c5]"}`}
                >
                  Me
                </span>
              </h1>
              <div
                className={`w-[130px]  my-5 h-[5px] ${
                  light ? "bg-[#6a88ff]" : "bg-[#76f9c5]"
                }`}
              ></div>
              <div className="leading-7 mt-10 mb-16">
                <div className=" w-[80%] mt-5 ">
                  <img
                    src="/icons8-resume-96 (1).png"
                    className=" animate-bounce"
                  />
                </div>
                <div>
                  <p className="flex w-[85%] font-[300]">
                    This is my resume, Document summarizing a person's
                    qualifications, including education, work experience, and
                    skills. .
                  </p>
                </div>
              </div>

              <Link
                to="/wanchana _resume.pdf"
                className={`${
                  light
                    ? "bg-[#6a88ff] hover:bg-[#3f54a5]"
                    : "bg-[#5bcea0] hover:bg-[#36735b]"
                } text-white active:bg-[#5bcea0] hover:cursor-pointer transform transition duration-300 px-5 py-2 rounded-lg mt-7" `}
                target="_blank"
              >
                Dowload Resume
              </Link>
            </div>

            <div className="w-[27%] flex flex-col justify-end ">
              <Link
                to="/skill"
                className={`${
                  light ? "bg-[#d1c5ff] " : "bg-[#0d100f]  hover:bg-[#50ab86]"
                } text-center px-8 py-3 h-[48%] hover:cursor-pointer transform transition duration-300  hover:scale-110 hover:z-10 `}
              >
                <div className="flex justify-center">
                  <img src="/icons/icons8-skill-96.png" />
                </div>

                <h2 className="text-[22px] mt-3 font-[600]">Skill</h2>

                <p className="text-[14px] mt-2">
                  My skills in frontend and backend development.
                </p>
              </Link>

              <Link
                to="/education"
                className={`bg-gradient-to-b mt-2 text-center ${
                  light
                    ? "from-[#ffedb5] to-[#d1c5ff]"
                    : "from-[#0d100f] to-[#223b35] hover:from-[#50ab86] hover:to-[#50ab86]"
                } px-8 py-3 h-[48%] hover:cursor-pointer transform transition duration-300 hover:scale-110   hover:z-10`}
              >
                <div className="flex justify-center">
                  <img src="/icons/icons8-education-96.png" />
                </div>
                <h2 className="text-[22px] mt-3 font-[600]">Education</h2>
                <p className="text-[14px] mt-2">
                  The education I have undergone.
                </p>
              </Link>
            </div>
            <Link to="/experience" className="w-[27%] ">
              <div
                className={`bg-gradient-to-t text-center ${
                  light
                    ? "from-[#ffedb5] to-[#d1c5ff]"
                    : "from-[#0d100f] to-[#223b35] hover:from-[#50ab86] hover:to-[#50ab86]"
                } h-[96%] px-8 py-10 leading-7 hover:cursor-pointer transform transition duration-300 hover:scale-110  hover:z-10`}
              >
                <div className="flex justify-center">
                  <img
                    src="/icons/icons8-experience-96.png"
                    className="w-[130px]"
                  />
                </div>
                <h2 className="text-[22px] text-center mt-7 font-[600]">
                  Experience
                </h2>
                <p className="text-[14px]  text-center mt-7">
                  {" "}
                  Since 2015, my journey has been filled with diverse
                  experiences and personal growth. I have encountered numerous
                  opportunities and challenges that have shaped me into who I am
                  today.
                </p>
              </div>
            </Link>
          </div>
          <div className="xl:hidden lg:hidden grid grid-rows-2 grid-flow-col gap-4 mx-[5%]">
            <Link
              to="/wanchana _resume.pdf"
              target="_blank"
              className={` rounded-xl text-center  ${
                light ? "bg-[#d1c5ff] hover:bg-[#d1c5ff]" : "bg-[#0d100f]"
              } flex justify-center items-center py-10 flex-col hover:cursor-pointer transform transition duration-300  hover:scale-110 hover:bg-[#50ab86] hover:z-10 `}
            >
              <img src="/icons8-resume-96 (1).png" className="w-[96px]" />
              <h1 className="text-[24px] mt-3 font-[600]">Resume</h1>
            </Link>
            <Link
              to="/education"
              className={`rounded-xl bg-gradient-to-b text-center ${
                light
                  ? "from-[#ffedb5] to-[#d1c5ff] hover:from-[#d1c5ff] hover:to-[#d1c5ff]"
                  : "from-[#0d100f] to-[#223b35] hover:from-[#50ab86] hover:to-[#50ab86]"
              } flex justify-center items-center py-10 flex-col hover:cursor-pointer transform transition duration-300  hover:scale-110  hover:z-10  `}
            >
              <img src="/icons/icons8-education-96.png" className="w-[96px]" />
              <h1 className="text-[24px] mt-3 font-[600]">Education</h1>
            </Link>
            <Link
              to="/skill"
              className={`rounded-xl bg-gradient-to-b text-center ${
                light
                  ? "from-[#ffedb5] to-[#d1c5ff] hover:from-[#d1c5ff] hover:to-[#d1c5ff]"
                  : "from-[#0d100f] to-[#223b35] hover:from-[#50ab86] hover:to-[#50ab86]"
              } flex justify-center items-center py-10 flex-col hover:cursor-pointer transform transition duration-300  hover:scale-110  hover:z-10  `}
            >
              <img src="/icons/icons8-skill-96.png" className="w-[96px]" />
              <h1 className="text-[24px] mt-3 font-[600]">Skill</h1>
            </Link>
            <Link
              to="/experience"
              className={`rounded-xl bg-gradient-to-t text-center ${
                light
                  ? "from-[#ffedb5] to-[#d1c5ff] hover:from-[#d1c5ff] hover:to-[#d1c5ff]"
                  : "from-[#0d100f] to-[#223b35] hover:from-[#50ab86] hover:to-[#50ab86]"
              } flex justify-center items-center py-10 flex-col hover:cursor-pointer transform transition duration-300  hover:scale-110  hover:z-10  `}
            >
              <img src="/icons/icons8-experience-96.png" className="w-[96px]" />
              <h1 className="text-[24px] mt-3 font-[600]">Experience</h1>
            </Link>
          </div>

          <div id="project"></div>
        </section>
        <section
          className={` ${
            light ? "text-black" : "text-white"
          } xl:pt-14 lg:pt-14 xl:py-0 lg:py-0 py-14 ${
            light ? "bg-[#dbd2fe]" : "bg-[#101110]"
          }  `}
        >
          <div className="xl:mx-[15%]  flex xl:flex-row lg:flex-row lg:mx-[7%] mx-[3%] xl:justify-between lg:justify-between justify-center">
            <div className="w-[40%] mt-[50px] xl:flex lg:flex hidden">
              <img src="/222222222-removebg.png" className="w-full" alt="" />
            </div>

            <div className="xl:w-[55%] lg:w-[55%] w-[80%] flex flex-col">
              <div className="w-full flex flex-col xl:items-start lg:items-start items-center">
                <h1 className="text-[40px] font-semibold text-center xl:text-start lg:text-start ">
                  <span
                    className={`${light ? "text-[#6a88ff]" : "text-[#76f9c5]"}`}
                  >
                    My{" "}
                  </span>{" "}
                  Projects
                </h1>
                <div
                  className={`xl:w-[130px] lg:w-[130px] w-full  mb-5 mt-5 h-[5px] ${
                    light ? "bg-[#6a88ff]" : "bg-[#76f9c5]"
                  } `}
                ></div>

                <p className="flex  w-full  text-center xl:text-start lg:text-start ">
                  This is a personal project website that I have created to
                  enhance my skills and learn new technologies on a daily basis.
                </p>
                <div
                  className={`flex py-7 flex-col xl:w-[90%] lg:w-[90%] w-full mt-5 border-[3px]  ${
                    light ? "bg-[#ffcc8d]" : "border-white"
                  } rounded-[30px]`}
                >
                  <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="mySwiper "
                  >
                    <SwiperSlide>
                      <Link
                        to="https://github.com/Wanchana3om/Merry-Match"
                        target="_blank"
                      >
                        <img src="/merry.png" />
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        to="https://github.com/Wanchana3om/Merry-Match"
                        target="_blank"
                      >
                        <img src="/merry.png" />
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        to="https://github.com/Wanchana3om/Merry-Match"
                        target="_blank"
                      >
                        <img src="/merry.png" />
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        to="https://github.com/Wanchana3om/Merry-Match"
                        target="_blank"
                      >
                        <img src="/merry.png" />
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        to="https://github.com/Wanchana3om/Merry-Match"
                        target="_blank"
                      >
                        <img src="/merry.png" />
                      </Link>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="flex xl:justify-start pb-7 lg:justify-start justify-center">
                  <Link
                    to="https://github.com/Wanchana3om"
                    target="_blank"
                    className={`${
                      light
                        ? "bg-[#6a88ff] hover:bg-[#3f54a5]"
                        : "bg-[#5bcea0] hover:bg-[#36735b]"
                    } transform transition duration-300 xl:px-5 xl:py-2 text-white lg:px-5 lg:py-2 px-7 py-4 rounded-lg mt-7`}
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="contact"></div>
        <Footer light={light} />
      </main>
    </>
  );
}

export default HomePage;
