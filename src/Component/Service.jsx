import React from "react";
import vector from "../Image/Vector.png";
import frame from "../Image/Frame.png";
import rectangle from "../Image/Rectangle 6.png";
import image1 from "../Image/1.png";
import image2 from "../Image/2.png";
import image3 from "../Image/3.png";
import image4 from "../Image/4.png";
import line from "../Image/Line.png";
import arrowright from "../Image/arrow-right.png";
import frame2 from "../Image/Frame 2147226411.png";

const Service = () => {
  return (
    <div className="w-[1000px] h-[1000px] mx-auto">
      <div>
        <div>
          <div className="flex ml-12 lg:text-center lg:ml-0 pt-12">
            <img
              className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] lg:ml-40 mt-1"
              src={vector}
              alt=""
            />
            <h1 className="text-xl lg:text-4xl text-black ml-2">
              At Software Chamber,{" "}
              <span className="text-gray-400 text-xl lg:text-4xl">
                we specialize
              </span>
              <span className="ml-2">in</span>
            </h1>
          </div>
          <div className="text-start ml-16 lg:text-center lg:ml-0">
            <h1 className="text-xl lg:text-4xl text-black ml-2">
              turning complex challenges into elegant{" "}
            </h1>
          </div>
          <div className="flex ml-40 lg:ml-90">
            <h1 className="text-xl lg:text-4xl text-gray-400 ml-2">
              digital solutions
            </h1>
            <img className="w-[30px] h-[35px] mt-1 ml-2" src={frame} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 pt-20">
          <div>
            <div className="pl-40 lg:pl-20 lg:mt-2">
              <h1 className="font-medium text-3xl">20+</h1>
              <p className="text-sm text-gray-500">Tech Partners</p>
            </div>
            <div className="pl-40 pt-5 lg:pl-20 lg:mt-2">
              <h1 className="font-medium text-3xl">150+</h1>
              <p className="text-sm text-gray-500">Project Completed</p>
            </div>
            <div className="pl-40 pt-5 lg:pl-20 lg:mt-2">
              <h1 className="font-medium text-3xl">1k+</h1>
              <p className="text-sm text-gray-500">Satisfied Customers</p>
            </div>
          </div>
          <div className="ml-25 mt-12 lg:ml-0 lg:mt-0">
            <img className="w-[300px] h-[300px]" src={rectangle} alt="" />
          </div>
          <div>
            <div className="pt-12 pl-30 lg:pt-0 lg:pl-0">
              <div className="flex mt-1">
                <img className="w-[35px] h-[35px]" src={image1} alt="" />
                <div className="ml-3">
                  <h1 className="text-sm font-semibold mt-[-4]">
                    Your Team in the cloud
                  </h1>
                  <p className="text-[10px] text-gray-500 pt-1">
                    We Hire Best and brightest Talents <br /> to build world
                    class technology
                  </p>
                </div>
              </div>
              <img className="w-[250px] mt-3" src={line} alt="" />
              <div className="flex mt-3">
                <img className="w-[35px] h-[35px]" src={image2} alt="" />
                <div className="ml-3">
                  <h1 className="text-sm font-semibold mt-[-4]">
                    Grow more with less
                  </h1>
                  <p className="text-[10px] text-gray-500 pt-1">
                    We have a competitive pricing <br /> structure
                  </p>
                </div>
              </div>
              <img className="w-[250px] mt-3" src={line} alt="" />
              <div className="flex mt-3">
                <img className="w-[35px] h-[35px]" src={image3} alt="" />
                <div className="ml-3">
                  <h1 className="text-sm font-semibold mt-[-4]">
                    Weekly sprint and reviews
                  </h1>
                  <p className="text-[10px] text-gray-500 pt-1">
                    Our fast review and feedback loop is <br /> designed to keep
                    in you in the driver's seat
                  </p>
                </div>
              </div>
              <img className="w-[250px] mt-3" src={line} alt="" />
              <div className="flex mt-3">
                <img className="w-[35px] h-[35px]" src={image4} alt="" />
                <div className="ml-3">
                  <h1 className="text-sm font-semibold mt-[-4]">
                    Communication First
                  </h1>
                  <p className="text-[10px] text-gray-500 pt-1">
                    We use modem tools and services to <br />
                    collaborate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex pt-20 pl-20 justify-center lg:justify-between">
          <div className="flex">
            <h1 className="text-2xl lg:text-6xl">Services</h1>
            <img
              className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] mt-2 ml-0 lg:mt-4 lg:ml-2"
              src={vector}
              alt=""
            />
          </div>
          <div className="flex ml-20 lg:mt-6 lg:mr-20">
            <p className="text-xs mt-2">All Services</p>
            <img className="w-[30px] h-[30px] ml-2" src={arrowright} alt="" />
          </div>
        </div>
        <div className="grid flex-row grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#F3F3F3] w-[260px] h-[230px] rounded-2xl mt-10 ml-27 lg:ml-20">
            <h1 className="text-2xl font-semibold ml-4 pt-6">
              Web & Mobile App <br /> Devolopment
            </h1>
            <p className="text-[10px] text-gray-400 ml-4 pt-6">
              Software Chamber specializes in creating <br /> powerful,
              scalable, and secure e-
            </p>
            <img className="w-[50px] h-[50px] mt-6 ml-2" src={frame2} alt="" />
          </div>
          <div className="bg-[#27B4A3] w-[260px] h-[230px] rounded-2xl mt-10 lg:ml-10">
            <h1 className="text-2xl text-[#FFFFFF] font-semibold ml-4 pt-6">
              Application <br /> Software Services
            </h1>
            <p className="text-[10px] text-[#FFFFFF] ml-4 pt-6">
              Software Chamber specializes in creating <br /> powerful,
              scalable, and secure e-
            </p>
            <img className="w-[50px] h-[50px] mt-6 ml-2" src={frame2} alt="" />
          </div>
          <div className="bg-[#F3F3F3] w-[260px] h-[230px] rounded-2xl mt-10 ml-27 lg:ml-0">
            <h1 className="text-2xl font-semibold ml-4 pt-6">
              Software Coding <br /> & Optimuation
            </h1>
            <p className="text-[10px] text-gray-400 ml-4 pt-6">
              Software Chamber specializes in creating <br /> powerful,
              scalable, and secure e-
            </p>
            <img className="w-[50px] h-[50px] mt-6 ml-2" src={frame2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
