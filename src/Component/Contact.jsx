import React from "react";
import contact from "../Image/Contact.png";

const Contact = () => {
  return (
    <div>
      <div className="h-[300px] lg:w-[666px] lg:h-[500px] bg-black mx-auto">
        <img
          className="w-[600px] h-[500px] lg:w-[550px] lg:h-[700px] pb-[250px] mx-auto"
          src={contact}
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
