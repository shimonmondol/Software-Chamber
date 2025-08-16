import React from "react";
import vector from "../Image/Vector.png";
import frame from "../Image/Frame.png";
import frame2 from "../Image/Frame 2147226409.png";
import line from "../Image/Line 2.png";
import group from "../Image/Group.png";
import groupteal from "../Image/Group-teal.png";
import inputarea from "../Image/InputArea.png";


const Faq = () => {
  return (
    <div className="w-[1000px] h-[800px] mt-10 mx-auto">
      <div>
        <div className="flex lg:text-center lg:justify-center lg:ml-0 pt-12">
          <h1 className="text-xl text-center lg:text-4xl text-black ml-2">
            Comprehensive Answers to the Most
          </h1>
        </div>
        <div className="flex text-start lg:text-center lg:justify-center lg:ml-0">
          <img
            className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] mt-1"
            src={vector}
            alt=""
          />
          <h1 className="text-xl lg:text-4xl text-black ml-2">
            Common Questions{" "}
            <span className="text-gray-400 text-xl lg:text-4xl">About Our</span>
          </h1>
        </div>
        <div className="flex lg:ml-70">
          <h1 className="text-xl lg:text-4xl lg:text-center text-black ">
            Service<span className="text-gray-400">s</span> and How We{" "}
            <span className="text-gray-400">Work</span>
          </h1>
          <img
            className="w-[30px] h-[35px] mt-1 ml-2"
            src={frame}
            alt=""
          />
        </div>
      </div>
      <div className="flex pt-20 pl-20 justify-center lg:justify-between">
        <div className="flex">
          <h1 className="text-2xl lg:text-6xl">FAQ</h1>
        </div>
        <div className="flex ml-20 lg:mt-6 lg:mr-20">
          <p className="text-xs mt-2">All FAQ</p>
          <img
            className="w-[30px] h-[30px] ml-2"
            src={frame2}
            alt=""
          />
        </div>
      </div>
      <img
        className="w-[840px] mt-10 ml-20"
        src={line}
        alt=""
      />
      <div>
        <div className="flex justify-between pl-20">
          <h1 className="pt-16">
            What software development services does your company offer?
          </h1>
          <img
            className="mr-20 mt-14 w-10 h-10"
            src={group}
            alt=""
          />
        </div>
        <img
          className="w-[840px] ml-20 mt-5"
          src={inputarea}
          alt=""
        />
      </div>
      <div>
        <div className="flex justify-between pl-20">
          <h1 className="pt-8">What industries do you specialize in?</h1>
          <img
            className="mr-20 mt-6 w-10 h-10"
            src={groupteal}
            alt=""
          />
        </div>
        <p className="text-[10px] text-gray-600 pt-6 pl-20">
          Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya
          yang bener dong. Bayangin aja kalo aplikasi ini <br /> berbayar, masa
          pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending
          pake MMS aja dah.
        </p>
        <img
          className="w-[840px] ml-20 mt-5"
          src={inputarea}
          alt=""
        />
      </div>
      <div>
        <div className="flex justify-between pl-20">
          <h1 className="pt-8">
            What sets your company apart from the competition?
          </h1>
          <img
            className="mr-20 mt-5 w-10 h-10"
            src={group}
            alt=""
          />
        </div>
        <img
          className="w-[840px] ml-20 mt-7"
          src={inputarea}
          alt=""
        />
      </div>
      <div>
        <div className="flex justify-between pl-20">
          <h1 className="pt-8">
            Is my project idea and information kept confidential?
          </h1>
          <img
            className="mr-20 mt-5 w-10 h-10"
            src={group}
            alt=""
          />
        </div>
        <img
          className="w-[840px] ml-20 mt-7"
          src={inputarea}
          alt=""
        />
      </div>
    </div>
  );
};

export default Faq;
