import React from "react";

const From = () => {
  return (
    <div className="w-[1000px] h-[650px] mt-10 mx-auto">
      <div className="text-center">
        <h1 className="font-semibold text-3xl pt-12">
          Let’s talk about your next <br /> project.{" "}
          <span className="text-gray-400">We’re here to help.</span>
        </h1>
        <p className="text-[10px] text-gray-600 mt-5">
          Deliver personalized experiences to your customers <br /> with AI-powered
          recommendation engines and <br /> dynamic content generation.
        </p>
      </div>
      <div className="flex">
        <img className="w-[280px] h-[300px] mt-20 ml-40" src="/src/Image/Rectangle 240648291.png" alt="" />
        <img className="w-[350px] h-[300px] mt-20 ml-10" src="/src/Image/Frame 2147227262.png" alt="" />
      </div>
    </div>
  );
};

export default From;
