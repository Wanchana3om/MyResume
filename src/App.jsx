import NavBar from "./component/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./index.css";
import { EffectCoverflow, Pagination } from "swiper";
import { useState } from "react";

function App() {
  const [light, setLight] = useState(false);
  const handleShow = () => {
    setLight(!light);
  };

  return (
    <>
      <NavBar handleLight={handleShow} />
      <main
        id="resume"
        className={`w-full ${
          !light ? "bg-[#222]" : "bg-white"
        }  pt-[70px] transition-all duration-300`}
      >
        <div className="w-[80%] mx-auto ">
          <section className=" w-full flex flex-row justify-between">
            <div
              className={`xl:w-[30%] lg:[30%] ${
                !light ? "bg-[#000000]" : "bg-[#ffaf7a]"
              } p-[20px] rounded-bl-[30px] pt-[70px] flex flex-col justify-between`}
            >
              <div className="xl:hidden lg:hidden flex justify-center">
                <img
                  src="/2222.png"
                  className=" rounded-full w-52 border-[15px] border-[#fe802b]"
                  alt=""
                />
              </div>

              <h1 className="xl:text-[60px] lg:text-[60px] text-[30px] text-white text-center lg:text-start xl:text-start ">
                WANCHANA INMASOM
              </h1>

              <p className="text-white xl:text-[20px] lg:text-[20px] text-[16px] text-center lg:text-start xl:text-start">
                I'm passionate about acquiring new knowledge. with experience
                working <br /> in team environments and the ability <br /> to
                handle pressure.
              </p>
              <div className="flex justify-center text-start">
                <a
                  className="text-base font-bold hover:cursor-pointer "
                  href="https://github.com/Wanchana3om"
                  target="_blank"
                >
                  <img src="/icons8-github-100.png" alt="" />
                </a>
                <a
                  className="text-base font-bold hover:cursor-pointer "
                  href="https://www.linkedin.com/in/wanchana-inmasom-a365a626a/"
                  target="_blank"
                >
                  <img src="/icons8-linkedin-100.png" alt="" />
                </a>
                <a
                  className="text-base font-bold hover:cursor-pointer "
                  href="https://www.facebook.com/wanchanaa.ang/"
                  target="_blank"
                >
                  <img src="/icons8-facebook-100.png" alt="" />
                </a>
                <a
                  className="text-base font-bold hover:cursor-pointer "
                  href="https://www.instagram.com/bomb_wcn/"
                  target="_blank"
                >
                  <img src="/icons8-instagram-100.png" alt="" />
                </a>
              </div>
            </div>
            <div
              className={` lg:w-[70%] xl:w-[40%] xl:flex lg:flex hidden bg-gradient-to-r ${
                !light ? "from-[#000000]" : "from-[#ffaf7a]"
              } to-[#ff781e] pt-[70px]`}
            >
              <img src="/pic-removebg.png" className="w-full " />
            </div>
            <div className="xl:flex hidden flex-row xl:w-[25%] justify-center items-center">
              <h1
                className={`text-[50px] font-[700] ${
                  !light ? "text-white" : "text-orange-700"
                }  p-[40px]`}
              >
                JUNIOR <br />
                DEVELOPER
              </h1>
            </div>
          </section>
        </div>

        <section id="project" className=" text-[40px] py-24 mt-5  ">
          <div
            className={`  rounded-[50px] ${
              !light ? "bg-[#000000]  border-white border-[1px]" : "bg-[#ffd6ba]"
            }  bg-opacity-100  w-[80%] mx-auto py-[45px]`}
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
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <a href="https://merry-match.vercel.app/" target="_blank">
                <img src="/merry.png"/>
                </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="https://merry-match.vercel.app/" target="_blank">
                <img src="/merry.png"/>
                </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="https://merry-match.vercel.app/" target="_blank">
                <img src="/merry.png"/>
                </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="https://merry-match.vercel.app/" target="_blank">
                <img src="/merry.png"/>
                </a>
              </SwiperSlide>
              <SwiperSlide>
              <a href="https://merry-match.vercel.app/" target="_blank">
                <img src="/merry.png"/>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>

          <div
            id="skills"
            className={`w-80% pt-20 mx-auto  my-[70px] ${
              !light ? "text-white" : "text-orange-700"
            }  flex flex-col justify-center items-center`}
          >
            <div>
              <h1 className="text-center xl:text-[55px] lg:text-[55px] text-[30px] "> SKILLS</h1>
            </div>

            <div className=" w-[80%] xl:w-[60%] lg:w-[60%] mx-[50px] ">
              <div>
                <h2 className="text-center mt-[20px] xl:text-[40px] lg:text-[40px] text-[20px]">FRONT-END DEVELOP</h2>
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
                <h2 className="text-center xl:text-[40px] lg:text-[40px] text-[20px]">BLACK-END DEVELOP</h2>
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
              className={`text-center text-[30px] xl:text-[50px] lg:text-[50px] pt-20 mb-[20px] ${
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
                className={` ${
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
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
