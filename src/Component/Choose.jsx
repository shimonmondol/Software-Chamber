import React from "react";

const Choose = () => {
  return (
    <div className="w-[1000px] h-[500px] mt-20 mx-auto">
      <div className="lg:flex flex-col lg:items-center lg:text-center">
        <h1 className="text-xl lg:text-4xl">
          Why Choose <br /> Softwarechamber
        </h1>
        <p className="text-center items-center lg:ml-0 text-xs mt-6">
          Deliver personalized experiences to your customers with AI-powered{" "}
          <br />
          recommendation engines and dynamic content generation.
        </p>
        <img
          className="w-[120px] h-[36px] ml-45 lg:ml-0 mt-6"
          src="/src/Image/Frame 2147227224.png"
          alt=""
        />
      </div>
      <div className="hidden lg:block relative">
        <img
          className="absolute w-[-50px] h-[50px] top-34 left-14"
          src="/src/Image/56px+border.png"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:justify-items-center ml-6">
        <div className="bg-[#F3F3F3] w-[200px] h-[180px] items-center ml-30 mt-10 lg:ml-16 lg:mt-10 rounded-xl">
          <div className="flex justify-between p-4">
            <h1 className="font-semibold">Efficiency</h1>
            <img
              className="w-[30px] h-[30px]"
              src="/src/Image/Icon Wrapper (3).png"
              alt=""
            />
          </div>
          <img className="w-[166px] ml-4" src="/src/Image/Line 3.png" alt="" />
          <p className="text-[10px] text-gray-600 p-4">
            Software Chamber specializes in creating powerful, scalable, and
            secure e-commerce solutions tailored to business needs.
          </p>
        </div>
        <div className="bg-[#F3F3F3] w-[200px] h-[180px] ml-30 mt-10 lg:mt-15 lg:ml-0 rounded-xl">
          <div className="flex justify-between p-4">
            <h1 className="font-semibold">Adaptability</h1>
            <img
              className="w-[30px] h-[30px]"
              src="/src/Image/Icon Wrapper (1).png"
              alt=""
            />
          </div>
          <img className="w-[166px] ml-4" src="/src/Image/Line 3.png" alt="" />
          <p className="text-[10px] text-gray-600 p-4">
            Software Chamber specializes in creating powerful, scalable, and
            secure e-commerce solutions tailored to business needs.
          </p>
        </div>
        <div className="bg-[#F3F3F3] w-[200px] h-[180px] ml-30 lg:ml-[-60px] mt-10 lg:mt-10 rounded-xl">
          <div className="flex justify-between p-4">
            <h1 className="font-semibold">Scalability</h1>
            <img
              className="w-[30px] h-[30px]"
              src="/src/Image/Icon Wrapper (2).png"
              alt=""
            />
          </div>
          <img className="w-[166px] ml-4" src="/src/Image/Line 3.png" alt="" />
          <p className="text-[10px] text-gray-600 p-4">
            Software Chamber specializes in creating powerful, scalable, and
            secure e-commerce solutions tailored to business needs.
          </p>
        </div>
        <div className="bg-[#F3F3F3] w-[200px] h-[180px] ml-30 mt-10 lg:ml-[-120px] lg:mt-15 rounded-xl">
          <div className="flex justify-between p-4">
            <h1 className="font-semibold">Precision</h1>
            <img
              className="w-[30px] h-[30px]"
              src="/src/Image/Icon Wrapper.png"
              alt=""
            />
          </div>
          <img className="w-[166px] ml-4" src="/src/Image/Line 3.png" alt="" />
          <p className="text-[10px] text-gray-600 p-4">
            Software Chamber specializes in creating powerful, scalable, and
            secure e-commerce solutions tailored to business needs.
          </p>
        </div>
      </div>
      <div className="relative justify-end">
        <img
          className="absolute w-[-50px] h-[50px] bottom-14 right-14"
          src="/src/Image/56px+border2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Choose;
