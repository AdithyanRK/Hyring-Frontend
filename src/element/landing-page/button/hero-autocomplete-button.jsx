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
  const [inputValue, setInputValue] = useState('');
  const [focus,setFocus]= useState(false)
  const [options, setOptions] = useState([]);
  
  const [open, setOpen] = useState(false);
  
  const handleInputChange = (event, newInputValue) => {
      setInputValue(newInputValue);
  
      if (newInputValue.length >= 2) {
          // Fetch suggestions from API or set options 
          setOptions(object);
          if(focus){
            setOpen(true)
          }
          
      } else {
          setOptions([]);
          setOpen(false)
      }
  };
  const object = [
    "System Designer",
    "Full-Stack Engineer",
    "Front-End Engineer",
    "Back-End Engineer",
    "Data Engineers",
    "DevOps",
    "Mobile Engineer",
    "QA Engineer",
    "UX/UI Designer",
    "Project Manager",
    "Business Analyst",
    "Digital Marketing Specialist",
    "Social Media Marketer",
  ];

  const CustomPopper = function (props) {
    return (
      <Popper
        {...props}
        sx={{
          
          borderRadius: "4px",
          "& .MuiPaper-root":{

            "&:empty":{
              border:"none"
            },
            "&:not(:empty)":{
              border: "2px solid #462B34",
            }
          },
           
          margin: "11px 0 !important",
          "& .MuiAutocomplete-listbox": {
            fontSize: "14px",
            color: "#462B34",
            padding: "0",
            
            "& li": {
              padding: "9px 6px ",
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
        "w-fit  h-[45px] md:h-[57px] border bg-white rounded-[8px] border-primary-brown"
      }
      bgBoxStyle={
        "w-full  h-[45px] md:h-[57px]  rounded-[8px]  bg-primary-brown "
      }
    >
      <Autocomplete
      inputValue={inputValue} 
      open={open}
      onFocus={()=>setFocus(!focus)}
      onBlur={()=>setFocus(!focus)}
      onInputChange={handleInputChange}     
      onClose={() => setOpen(false)} 
        freeSolo
        openOnFocus={false}
        className="text-base xl:text-lg w-fit"
        PopperComponent={CustomPopper}
        defaultValue="Full-Stack Engineer"
        selectOnFocus
        sx={{
          "& input": {
            width: "90%",
            fontSize: "inherit",
            fontWeight: "500",
            color: "#FFB65E",
            padding: "10px",
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
              className={` w-[230px] `}
              sx={{
               
                "&.MuiOutlinedInput-root": {
                  paddingRight: "10px !important",
                  paddingLeft: "10px !important",
                  fontFamily: "inherit",
                  fontSize:"inherit",
                  lineHeight:"2rem",

                },
                "& .MuiOutlinedInput-notchedOutline": { display: "none" },
                // "&.MuiInputBase-input": { width: "150px" },
              }}
              endAdornment={""}
              
              type="text"
              inputProps={{ ...params.inputProps }}
            />
          </div>
        )}
      />
    </BoxTheme>
  );
}
