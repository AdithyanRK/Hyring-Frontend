import { useState } from "react";
import FilterSalaries from "./filter-salaries";
import Chart from "./graph";
import NotesSalraies from "./notes";
import RolesTab from "./role-tabs";
import { Roles } from "./datas/roles";


export default function WhyIndiaSalariesSection() {
  const [activeRole, setActiveRole] = useState(0);
  const [hyringData, setHyringData] = useState(true);
  const [competitorData, setCompetitorData] = useState(false);
  const [currency,setCurrency]=useState("IND")
  return (
    <div
      className="mt-5 lg:mt-20 mx-auto flex w-[95vw] 2xl:w-[90vw] flex-col items-center  max-w-[1800px]  my-0"
      id="pricing"
    >
      <div className="text-center my-5 md:my-10 w-full px-5 text-3xl md:text-4xl lg:text-[58px]  font-primaryBold pb-3">
        Compare Salary Rates - India
      </div>

      <div className="w-full pb-10">
        <div className="flex gap-5 flex-col justify-center  lg:flex-row mb-5 md:mb-10">
          <div className="lg:basis-[50%]   xl4:basis-[40%] lg:max-w-[540px] h-full">
            <RolesTab
              activeRole={activeRole}
              setActiveRole={setActiveRole}
              Roles={Roles}
            />
          </div>

          <div className="lg:basis-[50%] xl4:basis-[60%] h-[full] flex flex-col gap-5 lg:gap-0 justify-between  ">
            <FilterSalaries
              setHyringData={setHyringData}
              setCompetitorData={setCompetitorData}
              hyringData={hyringData}
              competitorData={competitorData}
            />
            <Chart
              activeRole={activeRole}
              hyringData={hyringData}
              competitorData={competitorData}
              Roles={Roles}
              currency={currency}
              setCurrency={setCurrency}

            />
          </div>
        </div>
        <NotesSalraies />
      </div>
    </div>
  );
}
