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



export default function Chart({ activeRole, Roles,hyringData,competitorData}) {
  const [focusBar, setFocusBar] = useState(null);
  const data=Roles[activeRole].data
  return (
    <div className="w-full h-[76%]  ">
      <BoxTheme
        top={"7px"}
        left={"5px"}
        className={` h-full w-full  `}
        boxStyle={`w-full h-full !justify-start   border-2 bg-white rounded-[14px] border-primary-brown    `}
        bgBoxStyle={`w-full  rounded-[14px] h-full  bg-primary-brown   `}
      >
        <div className="p-4 md:px-8  mx-auto w-full ">
          <div className="flex justify-between">
            <h2 className="text-lg md:text-2xl basis-[60%] md:basis-[100%] font-primaryMedium">
              Avg. Monthly Salary{" "}
              <span className="text-[#EAA24B]">
                {Roles[activeRole].title}
              </span>
            </h2>
            <DropdownSalaries/>
          </div>
         <div className="w-[300px] h-[300px] lg:w-[400px]  xl:w-[700px] lg:h-[350px]">
         <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 50,
            }}
            onMouseMove={state => {
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
                value: "Avg. Salary (in Lakhs)",
                offset: 20,
                position: "bottom",
              }}
            />
            {/* <YAxis /> */}
            <YAxis
              tickFormatter={() => ""}
              axisLine={false}
              tickLine={false}
              label={{
                value: "Salaries Reported",
                angle: -90,
                position: "left",
              }}
            />
            <Tooltip className={"bg-red-500"} />
            {/* <Legend /> */}
            <Bar dataKey="salary" stackId="a">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={focusBar === index ? "#FFB65E" : "#FFD7A6"}
                />
              ))}
            </Bar>
            {
              hyringData ? 
             ( <Bar dataKey="hyring" stackId="a" >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={focusBar === index ? "#6F4D58" : "#FFD7A6"}
                />
              ))}
            </Bar>) : null
            }
           { 
           competitorData ?
           (<Bar dataKey="competitor" stackId="a">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={focusBar === index ? "#EA6B6B" : "#FFD7A6"}
                />
              ))}
            </Bar>) : null
            
            }
          </BarChart>
          </ResponsiveContainer>
         </div>
        </div>
      </BoxTheme>
    </div>
  );
}
