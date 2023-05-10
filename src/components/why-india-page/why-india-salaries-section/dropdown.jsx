import React from "react";
import AUSD from "@/assets/icons/landing-page/ausd-flag";
import IND from "@/assets/icons/landing-page/ind-flag";
import USD from "@/assets/icons/landing-page/usd-flag";
import EUR from "@/assets/icons/landing-page/eur-flag";
import Select from "react-select";

const options = [
  { value: "EUR", label: "EUR",icon: <EUR/> },
  { value: "AUSD", label: "AUSD",icon: <AUSD/> },
  { value: "USD", label: "USD" ,icon: <USD/>},
  { value: "IND", label: "IND",icon: <IND/> },
];

export default function DropdownSalaries({ currency, setCurrency }) {
  console.log("currency",currency)
  const handleSelectChange = (selectedOption) => {
   
    setCurrency(selectedOption.value);
  };
  
  return (
    <Select
      
      defaultValue={options[3]}
      onChange={handleSelectChange}
      options={options}
      className="w-[190px]"
      getOptionLabel={(option) =>
      (
        <div className="flex gap-2">
          <div>
          {option.icon}
          </div>

          <div>
          {option.label}
          </div>
        </div>
      )
      }
    />
  );
}


