import BoxTheme from "../box-theme/box-theme";
import Autocomplete from "@mui/material/Autocomplete";
import { InputAdornment, OutlinedInput, TextField } from "@mui/material";
import DropDownArrow from "@/assets/icons/landing-page/drop-doen-arrow";

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
  return (
    <BoxTheme
      className={`h-[60px] ${className} w-fit cursor-pointer   `}
      boxStyle={
        "w-[250px] h-[57px] border bg-white rounded-[8px] border-primary-brown"
      }
      bgBoxStyle={
        "w-[250px] h-[57px]  rounded-[8px]  bg-primary-brown top-[5px] left-[4px]"
      }
    >
      {/* <div className='text-custom-orange pl-[21px] pr-4'>Designing</div> */}
      {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      endAdornment={<InputAdornment position="start">
      <DropDownArrow/>
    </InputAdornment>}
      renderInput={(params) => <TextField   endAdornment={<InputAdornment position="start">
      <DropDownArrow/>
    </InputAdornment>} sx={{"& .MuiOutlinedInput-notchedOutline":{display:"none"} }} {...params}  />}
    /> */}
      <Autocomplete
      defaultValue="Product Designer"
        sx={{
          display: "inline-block",
          "& input": {
            width: "90%",
            // bgcolor: 'background.paper',
            fontSize:"24px",
            fontWeight:"500",
            color: "#FFB65E",
            padding:"0px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",

          },
         
        }}
        options={options}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <OutlinedInput
              sx={{"&.MuiInputBase-root":{
                  width:"250px",
                  height:"57px",
              }, "&.MuiOutlinedInput-root":{
                paddingRight:"10px !important",
                paddingLeft:"10px !important",
              },"& .MuiOutlinedInput-notchedOutline":{display:"none"},"&.MuiInputBase-input":{width:"150px"} }}
              endAdornment={<InputAdornment position="start">
              <DropDownArrow/>
            </InputAdornment>}
              type="text"
              {...params.inputProps}
            />
          </div>
        )}
      />
    </BoxTheme>
  );
}
