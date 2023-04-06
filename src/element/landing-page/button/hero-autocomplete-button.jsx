import BoxTheme from "../box-theme/box-theme";
import Autocomplete from "@mui/material/Autocomplete";
import {
  InputAdornment,
  OutlinedInput,
  Popper,
  TextField,
} from "@mui/material";
import DropDownArrow from "@/assets/icons/landing-page/drop-doen-arrow";
import { useState } from "react";

export default function HeroAutocompleteButton({ className }) {
  const options = [
    "UI UX Designer",
    "Frontend Developer",
    "Data Analyst",
    "Azure Cloud Engineer",
    "Graphics Designer",
    "Product Designer",
    "System Architect",
  ];

  const CustomPopper = function (props) {
    return (
      <Popper
        {...props}
        sx={{
          border: "2px solid #462B34",
          borderRadius: "4px",
            
          margin: "11px 0 !important",
          "& .MuiAutocomplete-listbox": {
            fontSize: "18px",
            color: "#462B34",
            padding: "0",
            
            "& li": {
              padding: "18px 12px ",
              borderBottom: "1px solid #462B34",
              fontFamily: '__whyteMedium_2bf28c',
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
            "& .MuiAutocomplete-option.Mui-focused": {
              backgroundColor: "#fef8f2",
            },
            "& .MuiAutocomplete-option[aria-selected='true']": {
              backgroundColor: "#FFF9F3",
              
            },
            "& .MuiAutocomplete-option[aria-selected='true'].Mui-focused": {
              backgroundColor: "#FFF9F3",
            },
          },
        }}
        placement="bottom"
      />
    );
  };

  return (
    <BoxTheme
      top="5px"
      left="4px"
      className={`h-fit ${className} w-fit cursor-pointer   `}
      boxStyle={
        "w-fit  h-[47px] md:h-[57px] border bg-white rounded-[8px] border-primary-brown"
      }
      bgBoxStyle={
        "w-full  h-[47px] md:h-[57px]  rounded-[8px]  bg-primary-brown "
      }
    >
      <Autocomplete
        className="text-xl md:text-2xl"
        PopperComponent={CustomPopper}
        defaultValue="Product Designer"
       
        selectOnFocus
        sx={{
          "& input": {
            width: "90%",
            fontSize: "inherit",
            fontWeight: "500",
            color: "#FFB65E",
            padding: "0px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontWeight: "500",
            fontFamily: "inherit",
          },
        }}
        options={options}
        renderInput={(params) => (
          <div ref={params.InputProps.ref} >
            <OutlinedInput
              className={` w-[200px] `}
              sx={{
               
                "&.MuiOutlinedInput-root": {
                  paddingRight: "10px !important",
                  paddingLeft: "10px !important",
                  fontFamily: "inherit",
                  fontSize:"inherit"
                },
                "& .MuiOutlinedInput-notchedOutline": { display: "none" },
                // "&.MuiInputBase-input": { width: "150px" },
              }}
              endAdornment={
                <InputAdornment position="start">
                  <DropDownArrow />
                </InputAdornment>
              }
              
              type="text"
              inputProps={{ ...params.inputProps }}
            />
          </div>
        )}
      />
    </BoxTheme>
  );
}
