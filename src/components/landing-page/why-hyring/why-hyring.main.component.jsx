import React from "react";
import WhyHyringComponent from "./why-hyring.component";
import WhyHyringComponentMobile from "./why-hyring.mobile.section.component";

const WhyHyringMainComponent = () => {
  return (
    <>
      <div className="hidden md:flex mt-28">
        <WhyHyringComponent />
      </div>
      <div className="flex md:hidden mt-20">
        <WhyHyringComponentMobile />
      </div>
    </>
  );
};

export default WhyHyringMainComponent;
