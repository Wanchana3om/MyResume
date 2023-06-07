import NavBar from "../component/NavBar";
import { useState } from "react";

function Experience() {
  const [light, setLight] = useState(JSON.parse(localStorage.getItem("light")));

  const handleShow = () => {
    setLight(!light);
    localStorage.setItem("light", !light);
  };

  return (
    <>
      <NavBar handleLight={handleShow} light={light} />
      <div
        className={`bg-gradient-to-r  ${
          !light
            ? "text-white from-[#171a18] to-[#36493c] "
            : "text-orange-700 from-[#dfdacf] to-[#ffd978]"
        } pt-20  text-white  pb-36`}
      >
        <h1
          className={`text-center text-[30px] xl:text-[50px] font-[600]  lg:text-[50px] xl:pt-20 xl:pb-12 lg:pt-20 pt-16 pb-10 lg:pb-12 mb-[20px] ${
            !light ? "text-white " : "text-orange-700"
          } `}
        >
          E
          <span className={`${!light ? "text-[#76f9c5]" : "text-orange-700"}`}>
            X
          </span>
          PERIENCE
        </h1>

        <div
          className={`   xl:mx-[15%] lg:mx-[10%] mx-[5%] ${
            !light ? "text-white " : "text-orange-700"
          } `}
        >
          <div className="flex flex-row">
            <div className="w-[24%]  hidden xl:flex lg:flex">
              <h1 className="xl:text-[36px] lg:text-[36px] text-[24px] leading-10 font-[400] ">
                Product Engineer <br />{" "}
                <span
                  className={`${
                    !light ? "text-[#76f9c5]" : "text-orange-700"
                  } "text-[24px]"`}
                >
                  at Hub IT
                </span>{" "}
                <br /> <span className="text-[18px]">2021-2022</span>{" "}
              </h1>
            </div>
            <div
              className={`xl:w-[76%] lg:w-[80%] w-full xl:border-l-[4px] lg:border-l-[4px] border-l-[0px] ${
                !light ? "border-[white]" : "border-[#6a88ff]"
              } px-8`}
            >
              <h1 className="xl:text-[36px] lg:text-[36px] text-[24px] leading-10 font-[400] xl:hidden lg:hidden">
                Product Engineer <br />
                <span
                  className={`${
                    !light ? "text-[#76f9c5]" : "text-orange-700"
                  } "text-[24px]"`}
                >
                  at Hub IT
                </span>{" "}
                , <span className="text-[18px]">2021-2022</span>{" "}
              </h1>
              <div
                className={`w-[30%] h-2 my-3 ${
                  !light ? "bg-white" : "bg-[#6a88ff]"
                }  flex xl:hidden lg:hidden`}
              ></div>
              <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-[300]">
                Experienced Product Engineer skilled in implementing data center
                rooms that Huawei as a partner with the company. Collaborated
                with cross-functional teams and conducted maintenance and
                troubleshooting to ensure uninterrupted data center operations.
              </p>
            </div>
          </div>

          <div className="flex flex-row ">
            <div className="w-[24%]  hidden xl:flex lg:flex pt-16">
              <h1 className="xl:text-[36px] lg:text-[36px] text-[24px] leading-10 font-[400] ">
                Internship <br />{" "}
                <span
                  className={`${
                    !light ? "text-[#76f9c5]" : "text-orange-700"
                  } "text-[24px]"`}
                >
                  at PTT Public Company Limited
                </span>{" "}
                <br /> <span className="text-[18px]">2018</span>{" "}
              </h1>
            </div>
            <div
              className={`xl:w-[76%] lg:w-[80%] pt-16  w-full xl:border-l-[4px] lg:border-l-[4px] border-l-[0px] ${
                !light ? "border-[white]" : "border-[#6a88ff]"
              } px-8`}
            >
              <h1 className="xl:text-[36px] lg:text-[36px] text-[24px] leading-10 font-[400] xl:hidden lg:hidden">
                Internship <br />{" "}
                <span
                  className={`${
                    !light ? "text-[#76f9c5]" : "text-orange-700"
                  } "text-[24px]"`}
                >
                  at PTT Public Company Limited
                </span>
                , <span className="text-[18px]">2018</span>{" "}
              </h1>
              <div
                className={`w-[30%] h-2 my-3 ${
                  !light ? "bg-white" : "bg-[#6a88ff]"
                }  flex xl:hidden lg:hidden`}
              ></div>
              <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-[300]">
                Interned at PTT public company limited and maintenance block
                value station and gained experience in the gas chromatography
                process for three-month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
