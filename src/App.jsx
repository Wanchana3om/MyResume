import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./index.css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { useState } from "react";

function App() {
  const [light, setLight] = useState(false);

  const handleShow = () => {
    setLight(!light);
  };

  return (
    <>
      <NavBar handleLight={handleShow} light={light} />
      <main id="resume"
        
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
          <section className= "xl:ml-[15%] lg:ml-[7%] ml-[5%] flex flex-row xl:justify-between lg:justify-between justify-center">
            <div className= "w-[50%] pt-24  flex flex-col" >
              <div className="xl:hidden  lg:hidden flex justify-center">
                <img
                  src="/2222.png"
                  className={`rounded-full w-52 border-[15px] ${light?"border-[#769bf9]":"border-[#76f9c5]"}`}
                />
              </div>
              <p className={`${light?"text-[#6a88ff]":"text-[#76f9c5]"} text-[18px] font-[600] xl:text-start lg:text-start text-center mt-6 xl:mt-0 lg:mt-0`}>
                JUNIOR DEVELOPER
              </p>
              <h1
                className={`xl:text-[60px] font-[600] xl:mt-0 lg:mt-0 mt-8 lg:text-[60px] text-[30px]  ${
                  !light ? "text-white" : "text-black"
                } text-center lg:text-start xl:text-start `}
              >
                WANCHANA <span className={`${light?"text-[#6a88ff]": "text-[#76f9c5]"} `}>INMASOM</span>
              </h1>
              <div className={` w-full xl:w-[130px] lg:w-[130px] mb-5 mt-2 h-[5px] ${light?"bg-[#6a88ff]":"bg-[#76f9c5]"} `}></div>
              <p
                className={`font-[300] ${
                  !light ? "text-white" : "text-black"
                } xl:text-[18px] xl:mt-0 lg:mt-0 my-8 lg:text-[20px] text-[16px] w-full xl:w-[80%] lg:w-[80%] text-center lg:text-start xl:text-start`}
              >
                I am a fast learner and passionate about acquiring new
                knowledge. With experience working in team environments and the
                ability to handle pressure, I am looking for Full Stack
                Developer.
              </p>
            </div>

            <div className="xl:flex lg:flex hidden w-[40%] pt-16 lg:mr-[7%] mr-[5%]  xl:mr-[10%]">
              <img src="/pic-removebg.png" className="w-full " />
            </div>

          </section>
        </div>

        <section id="aboutMe" className={`  ${light ? "text-black":"text-white"} xl:pt-20 lg:pt-20 py-20 ${light ? "bg-[#ffe7aa] " : "bg-black"} xl:h-[600px] lg:h-[600px] `}>
          <div className="xl:mx-[15%] xl:flex lg:flex hidden xl:flex-row lg:flex-row lg:mx-[7%] mx-[5%] justify-between">
            <div className="w-[45%] ">
              <h1 className="text-[40px] font-semibold">
               About  <span className={`${light ?"text-[#6a88ff]" :"text-[#76f9c5]"}`}>Me</span> 
              </h1>
              <div className={`w-[130px]  my-5 h-[5px] ${light ? "bg-[#6a88ff]":"bg-[#76f9c5]"}`}></div>
              <div className="leading-7 mt-10 mb-16">

              <div className=" w-[80%] mt-5 ">
                <img src="/icons8-resume-96 (1).png" className=" animate-bounce" />
              </div>
                <div>
                <p className="flex w-[85%] font-[300]">
                Lorem, repudiandae error deserunt accusamus deleniti quibusdam iure animi officiis, dolores perspiciatis natus dolorum possimus saepe neque pariatur aliquid. Molestias totam unde in id?
              </p>
                </div>
                </div>
              
              
              <a className={`${light?"bg-[#6a88ff] hover:bg-[#3f54a5]":"bg-[#5bcea0] hover:bg-[#36735b]"} text-white active:bg-[#5bcea0] hover:cursor-pointer transform transition duration-300 px-5 py-2 rounded-lg mt-7" href="/wanchana _resume.pdf`}
              target="_blank" >
                Dowload Resume
                
              </a>
            </div>

            <div className="w-[27%] flex flex-col justify-end ">
              <div className={`${light?"bg-[#d1c5ff] ":"bg-[#0d100f]  hover:bg-[#50ab86]"} text-center px-8 py-3 h-[48%] hover:cursor-pointer transform transition duration-300  hover:scale-110 hover:z-10 `}>
                
                <div className="flex justify-center">
                  
                  <img src="/icons/icons8-skill-96.png" />
                </div>
                <h2 className="text-[22px] mt-3 font-[600]">Skill</h2>
                <p className="text-[14px] mt-2">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              <div className={`bg-gradient-to-b mt-2 text-center ${light ?"from-[#ffedb5] to-[#d1c5ff]" :"from-[#0d100f] to-[#223b35] hover:from-[#50ab86] hover:to-[#50ab86]"} px-8 py-3 h-[48%] hover:cursor-pointer transform transition duration-300 hover:scale-110   hover:z-10`}>
                <div className="flex justify-center">
                  <img src="/icons/icons8-education-96.png" />
                </div>
                <h2 className="text-[22px] mt-3 font-[600]">Education</h2>
                <p className="text-[14px] mt-2">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
            <div className="w-[27%] ">
              <div className={`bg-gradient-to-t text-center ${light ?"from-[#ffedb5] to-[#d1c5ff]" :"from-[#0d100f] to-[#223b35] hover:from-[#50ab86] hover:to-[#50ab86]"} h-[96%] px-8 py-10 leading-7 hover:cursor-pointer transform transition duration-300 hover:scale-110  hover:z-10`}>
                
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Recusandae et, asperiores nam quis atque consectetur facere.
                  Delectus, praesentium. Eum, sequi.
                </p>
              </div>
            </div>
          </div>
          <div className="xl:hidden lg:hidden grid grid-rows-2 grid-flow-col gap-4 mx-[5%]">
  <div className={` rounded-xl text-center  ${light ?"bg-[#d1c5ff] hover:bg-[#d1c5ff]":"bg-[#0d100f]"} flex justify-center items-center py-10 flex-col hover:cursor-pointer transform transition duration-300  hover:scale-110 hover:bg-[#50ab86] hover:z-10 `}>
    <img src="/icons8-resume-96 (1).png" className="w-[96px]" />
    <h1 className="text-[24px] mt-3 font-[600]">Resume</h1>
  </div>
  <div className={`rounded-xl bg-gradient-to-b text-center ${light ?"from-[#ffedb5] to-[#d1c5ff] hover:from-[#d1c5ff] hover:to-[#d1c5ff]" :"from-[#0d100f] to-[#223b35] hover:from-[#50ab86] hover:to-[#50ab86]"} flex justify-center items-center py-10 flex-col hover:cursor-pointer transform transition duration-300  hover:scale-110  hover:z-10  `}>
    <img src="/icons/icons8-education-96.png" className="w-[96px]" />
    <h1 className="text-[24px] mt-3 font-[600]">Education</h1>
  </div>
  <div className={`rounded-xl bg-gradient-to-b text-center ${light ?"from-[#ffedb5] to-[#d1c5ff] hover:from-[#d1c5ff] hover:to-[#d1c5ff]" :"from-[#0d100f] to-[#223b35] hover:from-[#50ab86] hover:to-[#50ab86]"} flex justify-center items-center py-10 flex-col hover:cursor-pointer transform transition duration-300  hover:scale-110  hover:z-10  `}>
    <img src="/icons/icons8-skill-96.png" className="w-[96px]" />
    <h1 className="text-[24px] mt-3 font-[600]">Skill</h1>
  </div>
  <div className={`rounded-xl bg-gradient-to-t text-center ${light ?"from-[#ffedb5] to-[#d1c5ff] hover:from-[#d1c5ff] hover:to-[#d1c5ff]" :"from-[#0d100f] to-[#223b35] hover:from-[#50ab86] hover:to-[#50ab86]"} flex justify-center items-center py-10 flex-col hover:cursor-pointer transform transition duration-300  hover:scale-110  hover:z-10  `}>
    <img src="/icons/icons8-experience-96.png" className="w-[96px]" />
    <h1 className="text-[24px] mt-3 font-[600]">Experience</h1>
  </div>
  
</div>


    
                <div id="project"></div>
        </section>
        <section  className={` ${light?"text-black":"text-white"} xl:pt-14 lg:pt-14 xl:py-0 lg:py-0 py-14 ${light ?"bg-[#dbd2fe]" :"bg-[#101110]"}  `}>
          <div className="xl:mx-[15%] flex xl:flex-row lg:flex-row lg:mx-[7%] mx-[3%] xl:justify-between lg:justify-between justify-center">
            <div  className="w-[45%] mt-[50px] xl:flex lg:flex hidden">
              <img src="/222222222-removebg.png" className="w-[80%]" alt="" />
            </div>

            <div  className="xl:w-[55%] lg:w-[55%] w-[80%] flex flex-col">
              <div className="w-full ">
                <h1 className="text-[40px] font-semibold text-center xl:text-start lg:text-start ">
                  <span className={`${light ? "text-[#6a88ff]":"text-[#76f9c5]"}`}>My </span> Projects
                </h1>
                <div className={`xl:w-[130px] lg:w-[130px] w-full  mb-5 mt-5 h-[5px] ${light ? "bg-[#6a88ff]" :"bg-[#76f9c5]"} `}></div>

                <p className="flex xl:w-[80%] lg:w-[80%] w-full  text-center xl:text-start lg:text-start ">
                  Ldoloribus aliquid consequatur placeat tenetur, illo nostrum
                  quae.
                </p>
                <div className={`flex w-full mt-5 border-[3px] ${light?"border-black":"border-white"} rounded-[30px]`}>
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
                      <a href="https://merry-match.vercel.app/" target="_blank">
                        <img src="/merry.png" />
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="https://merry-match.vercel.app/" target="_blank">
                        <img src="/merry.png" />
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="https://merry-match.vercel.app/" target="_blank">
                        <img src="/merry.png" />
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="https://merry-match.vercel.app/" target="_blank">
                        <img src="/merry.png" />
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="https://merry-match.vercel.app/" target="_blank">
                        <img src="/merry.png" />
                      </a>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="flex xl:justify-end lg:justify-end justify-center">

                <button className={`${light?"bg-[#6a88ff] hover:bg-[#3f54a5]":"bg-[#5bcea0] hover:bg-[#36735b]"} transform transition duration-300 xl:px-5 xl:py-2 text-white lg:px-5 lg:py-2 px-7 py-4 rounded-lg mt-7`}>
                  View All
                </button>
                </div>

              </div>
            </div>
          </div>
        </section>
      <Footer light={light}/>

        {/* <section
          id="project"
          className=" text-[40px] xl:py-24 lg:py-24 py-10  "
        >
          <div
            className={`  rounded-[50px] ${
              !light
                ? "bg-[#000000]  border-white border-[1px]"
                : "bg-[#ffd6ba]"
            }  bg-opacity-100  w-[95%] xl:w-[80%] lg:w-[80%] mx-auto py-[45px]`}
          >
            <h1
              className={`text-center ${
                !light ? "text-white" : "text-orange-700"
              } xl:text-[55px] lg:text-[55px] text-[30px]`}
            >
              MY PROJECT
            </h1>
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
              className="mySwiper"
            >
              <SwiperSlide>
                <a href="https://merry-match.vercel.app/" target="_blank">
                  <img src="/merry.png" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://merry-match.vercel.app/" target="_blank">
                  <img src="/merry.png" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://merry-match.vercel.app/" target="_blank">
                  <img src="/merry.png" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://merry-match.vercel.app/" target="_blank">
                  <img src="/merry.png" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://merry-match.vercel.app/" target="_blank">
                  <img src="/merry.png" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>

          <div
            id="skills"
            className={`w-80% xl:pt-20 lg:pt-20  mx-auto  my-[70px] ${
              !light ? "text-white" : "text-orange-700"
            }  flex flex-col justify-center items-center`}
          >
            <div>
              <h1 className="text-center xl:text-[55px] lg:text-[55px] text-[30px] ">
                {" "}
                SKILLS
              </h1>
            </div>

            <div className=" w-[80%] xl:w-[60%] lg:w-[60%] mx-[50px] ">
              <div>
                <h2 className="text-center mt-[20px] xl:text-[40px] lg:text-[40px] text-[20px]">
                  FRONT-END DEVELOP
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
                  BLACK-END DEVELOP
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
          <div>
            <h1
              id="education"
              className={`text-center text-[30px] xl:text-[50px] lg:text-[50px] xl:pt-20 lg:pt-20 mb-[20px] ${
                !light ? "text-white " : "text-orange-700"
              } `}
            >
              EDUCATION
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-[100%] xl:w-[80%] lg:w-[80%] mx-auto justify-center">
              <div
                className={` ${
                  !light
                    ? "bg-[#000000] border-white border-[1px]"
                    : "bg-[#ffaf7a]"
                } flex flex-col items-center  text-white rounded-[40px] m-[30px] h-[480px] p-[32px] transform transition duration-300 hover:scale-110 `}
              >
                <div
                  className="bg-[#411032] w-[120px] h-[120px] rounded-full flex items-center justify-center mb-[42px] bg-cover bg-center"
                  style={{ backgroundImage: "url('/rsu/tu.png')" }}
                ></div>
                <div>
                  <p className=" text-white text-xl xl:text-2xl lg:text-2xl font-bold mb-2 text-center">
                    TechUp <br />
                    Coding Bootcamp
                  </p>
                </div>
                <div>
                  <p className="text-white text-[14px] xl:text-base lg:text-base text-center mt-[30px]">
                    four-month for learn full-stack course at TechUp with
                    Project.
                  </p>
                </div>
                <div>
                  <p className="text-white text-2xl font-bold mb-2 text-center mt-[30px]">
                    2023
                  </p>
                </div>
              </div>
              <div
                className={` transition-all duration-300 ${
                  !light
                    ? "bg-[#000000] border-white border-[1px]"
                    : "bg-[#ffaf7a]"
                } flex flex-col items-center  text-white rounded-[40px] m-[30px] h-[480px] p-[32px] transform transition duration-300 hover:scale-110 `}
              >
                <div
                  className="bg-[#411032] w-[120px] h-[120px] rounded-full flex items-center justify-center mb-[42px] bg-cover bg-center"
                  style={{ backgroundImage: "url('/rsu/greenwich_logo.png')" }}
                ></div>
                <div>
                  <p className=" text-white text-xl xl:text-2xl lg:text-2xl  font-bold mb-2 text-center">
                    Greenwich College <br />
                    Study General English
                  </p>
                </div>
                <div>
                  <p className="text-white text-[14px] xl:text-base lg:text-base text-center mt-[30px]">
                    Studied General English in Australia on Upper-intermediate
                    level.
                  </p>
                </div>
                <div>
                  <p className="text-white text-xl xl:text-2xl lg:text-2xl  font-bold mb-2 text-center mt-[30px]">
                    2020-2021
                  </p>
                </div>
              </div>
              <div
                className={` ${
                  !light
                    ? "bg-[#000000] border-white border-[1px]"
                    : "bg-[#ffaf7a]"
                } flex flex-col items-center  text-white rounded-[40px] m-[30px] h-[480px] p-[32px] transform transition duration-300 hover:scale-110 `}
              >
                <div
                  className="bg-white w-[120px] h-[120px] rounded-full flex items-center justify-center mb-[42px] bg-cover bg-center"
                  style={{ backgroundImage: "url('/rsu/RSU.png')" }}
                ></div>
                <div>
                  <p className=" text-white text-xl xl:text-2xl lg:text-2xl font-bold mb-2 text-center">
                    Rangsit University <br />
                    Electrical En
                  </p>
                </div>
                <div>
                  <p className="text-white text-[14px] xl:text-base lg:text-base text-center mt-[30px]">
                    Bachaelor of Degree in College of Electrical Engineering
                    Graduated 2019, GPA 3.02
                  </p>
                </div>
                <div>
                  <p className="text-white text-2xl font-bold mb-2 text-center mt-[30px]">
                    2015-2019
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className={`flex xl:hidden lg:hidden ${
            light ? "bg-[#ffa13c]" : "bg-black"
          } py-16 justify-center text-start`}
        >
          <a
            className="text-base font-bold hover:cursor-pointer transform transition duration-300 hover:scale-125"
            href="https://github.com/Wanchana3om"
            target="_blank"
          >
            <img src="/icons8-github.svg" alt="" />
          </a>
          <a
            className="text-base font-bold hover:cursor-pointer transform transition duration-300 hover:scale-125"
            href="https://www.linkedin.com/in/wanchana-inmasom-a365a626a/"
            target="_blank"
          >
            <img src="/icons8-linkedin.svg" alt="" />
          </a>
          <a
            className="text-base font-bold hover:cursor-pointer transform transition duration-300 hover:scale-125"
            href="https://www.facebook.com/wanchanaa.ang/"
            target="_blank"
          >
            <img src="/icons8-facebook.svg" alt="" />
          </a>
          <a
            className="text-base font-bold hover:cursor-pointer transform transition duration-300 hover:scale-125"
            href="https://www.instagram.com/bomb_wcn/"
            target="_blank"
          >
            <img src="/icons8-ig.svg" alt="" />
          </a>
        </div> */}
      </main>
    </>
  );
}

export default App;
