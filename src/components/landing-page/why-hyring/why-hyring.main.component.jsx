import React from "react";
import WhyHyringComponent from "./why-hyring.component";
import WhyHyringComponentMobile from "./why-hyring.mobile.section.component";

const WhyHyringMainComponent = () => {
  return (
    <>
      <div className="hidden md:flex">
        <WhyHyringComponent />
      </div>
      <div className="flex md:hidden">
        <WhyHyringComponentMobile />
      </div>
    </>
  );
};

export default WhyHyringMainComponent;
