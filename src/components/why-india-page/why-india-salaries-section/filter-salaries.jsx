import CheckedIcon from "@/assets/icons/landing-page/checked-icon";
import FilterIcon from "@/assets/icons/landing-page/filter";
import UncheckedIcon from "@/assets/icons/landing-page/unchecked-icon";
import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

export default function FilterSalaries({
  setHyringData,
  setCompetitorData,
  hyringData,
  competitorData,
}) {
  return (
    <div className="w-full h-[16%]  ">
      <BoxTheme
        top={"7px"}
        left={"5px"}
        className={` h-full w-full  `}
        boxStyle={`w-full h-full !justify-start   border-2 bg-white rounded-[14px] border-primary-brown    `}
        bgBoxStyle={`w-full  rounded-[14px] h-full  bg-primary-brown   `}
      >
        <div className="p-3 lg:px-6 xl4:px-8  flex gap-2 xs:gap-4 md:gap-6 lg:gap-4 xl:gap-6  xl4:gap-8 flex-col xs:flex-row">
          <div className="flex  items-center gap-2 lg:gap-[2px] xl:gap-3 text-lg lg:text-lg xl:text-xl xl4:text-2xl  font-primaryBold">
            <div className="mt-1">
              <FilterIcon />
            </div>
            Filter :
          </div>
          <FormControlLabel
            sx={{
              "& .MuiTypography-root": {
                fontSize: "inherit",
                fontFamily: "__whyteMedium_2bf28c",
              },
            }}
            className="pt-1 text-lg xl:text-2xl"
            control={
              <Checkbox
                className="mt-1"
                icon={<UncheckedIcon />}
                checkedIcon={<CheckedIcon />}
                checked={hyringData}
                onChange={(event) => setHyringData(event.target.checked)}
              />
            }
            label="Hyring Fees"
          />
          <FormControlLabel
            sx={{
              "& .MuiTypography-root": {
                fontSize: "inherit",
                fontFamily: "__whyteMedium_2bf28c",
              },
            }}
            className="pt-1 text-lg md:text-base xl:text-2xl "
            control={
              <Checkbox
                className="mt-1"
                icon={<UncheckedIcon />}
                checkedIcon={<CheckedIcon />}
                checked={competitorData}
                onChange={(event) => setCompetitorData(event.target.checked)}
              />
            }
            label="Competitor Fees"
          />
        </div>
      </BoxTheme>
    </div>
  );
}
