import React from "react";
import power from "../Image/Power.png"
import idea from "../Image/Idea.png"

const Power = () => {
  return (
    <div>
      <div>
        <img
          className="w-[850px] h-[600px] bg-black mx-auto"
          src={power}
          alt=""
        />
        <img
          className="w-[850px] bg-black mx-auto"
          src={idea}
          alt=""
        />
      </div>
    </div>
  );
};

export default Power;
