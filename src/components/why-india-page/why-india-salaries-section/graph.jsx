import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import React, { PureComponent, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DropdownSalaries from "./dropdown";

export default function Chart({
  activeRole,
  Roles,
  hyringData,
  competitorData,
  currency,
  setCurrency,
}) {
  const [focusBar, setFocusBar] = useState(null);
  const data = Roles[activeRole].data;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="border font-primary  border-primary-brown rounded-md bg-white py-[10px] px-3 ">
          <div className="flex  items-center gap-2">
            <div className="w-3 h-3 border border-primary-brown bg-[#FFB65E] mt-1"></div>
            <p>
              Monthly Salary :{" "}
              <span className="font-primaryMedium">
                {currency == "IND"
                  ? payload[0].payload.salaryRupees
                  : currency == "USD"
                  ? payload[0].payload.salaryUSD
                  : currency == "AUSD"
                  ? payload[0].payload.salaryAUSD
                  : currency == "EUR"
                  ? payload[0].payload.salaryEUR
                  : null}
              </span>
            </p>
          </div>
         {
           hyringData ? <div className="flex  items-center gap-2">
           <div className="w-3 h-3 border border-primary-brown bg-[#6F4D58] mt-1"></div>
           <p>
             Hyring Fees :{" "}
             <span className="font-primaryMedium">
               {currency == "IND"
                 ? payload[0].payload.hyringRupees
                 : currency == "USD"
                 ? payload[0].payload.hyringUSD
                 : currency == "AUSD"
                 ? payload[0].payload.hyringAUSD
                 : currency == "EUR"
                 ? payload[0].payload.hyringEUR
                 : null}
             </span>
           </p>
         </div> : null
         }
         {
          competitorData ? (
            <div className="flex  items-center gap-2">
            <div className="w-3 h-3 border border-primary-brown bg-[#EA6B6B] mt-1"></div>
            <p>
              Competitor Fees :{" "}
              <span className="font-primaryMedium">
                {currency == "IND"
                  ? payload[0].payload.competitorRupees
                  : currency == "USD"
                  ? payload[0].payload.competitorUSD
                  : currency == "AUSD"
                  ? payload[0].payload.competitorAUSD
                  : currency == "EUR"
                  ? payload[0].payload.competitorEUR
                  : null}
              </span>
            </p>
          </div> ): null }
          { competitorData && hyringData  ?
          (<div className="flex  items-center gap-2">
            <div className="w-3 h-3 border border-primary-brown bg-[#FFB65E] mt-1 invisible"></div>
            <p>
              Savings :{" "}
              <span className="font-primaryMedium">
                {currency == "IND"
                  ? payload[0].payload.savingsRupees
                  : currency == "USD"
                  ? payload[0].payload.savingsUSD
                  : currency == "AUSD"
                  ? payload[0].payload.savingsAUSD
                  : currency == "EUR"
                  ? payload[0].payload.savingsEUR
                  : null}
              </span>
            </p>
          </div>
          ) : null
         }
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full h-[80%] ">
      <BoxTheme
        top={"7px"}
        left={"5px"}
        className={` h-full w-full  `}
        boxStyle={`w-full h-full !justify-start   border-2 bg-white rounded-[14px] border-primary-brown    `}
        bgBoxStyle={`w-full  rounded-[14px] h-full  bg-primary-brown   `}
      >
        <div className="p-4 md:px-8   w-full max-w-[1000px] ">
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-2 sm:gap-4 justify-between">
            <h2 className="text-lg md:text-2xl  font-primaryMedium">
              Avg. Monthly Salary
              <span className="text-[#EAA24B] mx-2">
                {Roles[activeRole].title}
              </span>
            </h2>
            <DropdownSalaries currency={currency} setCurrency={setCurrency} />
          </div>
          <div className=" w-[95%] h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  bottom: 15,
                }}
                onMouseMove={(state) => {
                  if (state.isTooltipActive) {
                    setFocusBar(state.activeTooltipIndex);
                  } else {
                    setFocusBar(null);
                  }
                }}
              >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  label={{
                    value: "Experience",
                    offset: 0,
                    position: "bottom",
                    style: { fontFamily: "__whyteMedium_2bf28c" },
                  }}
                />
                {/* <YAxis /> */}
                <YAxis
                  tickFormatter={() => ""}
                  axisLine={false}
                  tickLine={false}
                  label={{
                    value: "Salaries ",
                    angle: -90,
                    offset: 0,
                    position: "Left",
                    style: { fontFamily: "__whyteMedium_2bf28c" },
                  }}
                />
                <Tooltip content={<CustomTooltip />} />

                <Bar dataKey="salary" stackId="a">
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={focusBar === index ? "#FFB65E" : "#FFD7A6"}
                    />
                  ))}
                </Bar>

                {hyringData ? (
                  <Bar dataKey="hyring" stackId="a">
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={focusBar === index ? "#6F4D58" : "#FFD7A6"}
                      />
                    ))}
                  </Bar>
                ) : null}
                {competitorData && hyringData == false ? (
                  <Bar dataKey="competitorFull" stackId="a">
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={focusBar === index ? "#EA6B6B" : "#FFD7A6"}
                      />
                    ))}
                  </Bar>
                ) : null}

                {competitorData && hyringData ? (
                  <Bar dataKey="competitor" stackId="a">
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={focusBar === index ? "#EA6B6B" : "#FFD7A6"}
                      />
                    ))}
                  </Bar>
                ) : null}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </BoxTheme>
    </div>
  );
}
