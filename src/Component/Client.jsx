import React from "react";
import client from "../Image/Client.png";

const Client = () => {
  return (
    <div>
      <div className="w-[840px] h-[500px] bg-black mt-20 mx-auto">
        <img className="w-[650px] h-[750px] pb-[200px] mx-auto" src={client} alt="" />
      </div>
    </div>
  );
};

export default Client;
