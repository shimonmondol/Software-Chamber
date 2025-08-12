import React from "react";
import Service from "./Component/Service";
import Choose from "./Component/Choose";
import Faq from "./Component/Faq";
import From from "./Component/From";
import Chamber from "./Component/Chamber";
import Development from "./Component/Development";
import Client from "./Component/Client";
import Contact from "./Component/Contact";
import Power from "./Component/Power";

const App = () => {
  return (
    <div>
      <Chamber />
      <Service />
      <Development />
      <Choose />
      <Power/>
      <Faq />
      <Client />
      <From />
      <Contact />
    </div>
  );
};

export default App;
