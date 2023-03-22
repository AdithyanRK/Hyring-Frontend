import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Plus from "@/assets/icons/landing-page/plus";
import Minus from "@/assets/icons/landing-page/minus";
import AccordianList from "@/element/landing-page/pricing-section/accordian-list";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  // "&:not(:last-child)": {
  //   borderBottom: 0,
  // },
  // "&:before": {
  //   display: "none",
  // },
  "& .MuiAccordionSummary-root":{
      // borderBottom:"2px solid #462B34"
  }
  
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor:
  //   theme.palette.mode === "dark"
  //     ? "rgba(255, 255, 255, .05)"
  //     : "rgba(0, 0, 0, .03)",
//   flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "none",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  // padding: theme.spacing(2),
  borderBottom: "2px solid #462B34",
  paddingTop: "0px",
  paddingBottom: "0px"
}));



export default function PricingSectionAccordian() {
  const [expanded, setExpanded] = React.useState("panel1");
    const [isExpanded,setIsExpanded] =React.useState({A1:"",A2:"",A3:""});
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      let A1 = document.querySelector("#panel1d-header").getAttribute("aria-expanded");
      let A2 = document.querySelector("#panel2d-header").getAttribute("aria-expanded");
      let A3 = document.querySelector("#panel3d-header").getAttribute("aria-expanded");
        setIsExpanded({A1:A1,A2:A2,A3:A3})
    }, 0);
  }, [expanded]);

 
  
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ "& .MuiAccordionSummary-root":{borderBottom:"2px solid #462B34"}}}
        
      >
        <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header" expandIcon={isExpanded.A1 === "true"?<Minus/> :<Plus/>}>
          <Typography className="uppercase text-xl lg:text-[28px] font-medium font-primaryMedium py-3">Benefits</Typography>
        </AccordionSummary>
        <AccordionDetails>
           <AccordianList>New Mackbook</AccordianList>
           <AccordianList>Monthly Retreat</AccordianList>
           <AccordianList>Annual International Retreat</AccordianList>
           <AccordianList>Monthly Awards</AccordianList>
           <AccordianList>Big Diwali Gifts</AccordianList>
           <AccordianList>Health Insurance for Family Members</AccordianList>
           <AccordianList>Managed Office Space</AccordianList>
           <AccordianList>Branded Merchandise</AccordianList>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ "& .MuiAccordionSummary-root":{borderBottom:"2px solid #462B34"}}}

      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={isExpanded.A2  === "true"?<Minus/> :<Plus/>}>
          <Typography className="uppercase text-xl lg:text-[28px] font-medium font-primaryMedium  py-3">Web portal</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <AccordianList>New Mackbook</AccordianList>
           <AccordianList>Monthly Retreat</AccordianList>
           <AccordianList>Annual International Retreat</AccordianList>
           <AccordianList>Monthly Awards</AccordianList>
           <AccordianList>Big Diwali Gifts</AccordianList>
           <AccordianList>Health Insurance for Family Members</AccordianList>
           <AccordianList>Managed Office Space</AccordianList>
           <AccordianList>Branded Merchandise</AccordianList>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={isExpanded.A3  === "true"?<Minus/> :<Plus/>}>
          <Typography className="uppercase text-xl lg:text-[28px] font-medium font-primaryMedium  py-3">Compliance</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <AccordianList>New Mackbook</AccordianList>
           <AccordianList>Monthly Retreat</AccordianList>
           <AccordianList>Annual International Retreat</AccordianList>
           <AccordianList>Monthly Awards</AccordianList>
           <AccordianList>Big Diwali Gifts</AccordianList>
           <AccordianList>Health Insurance for Family Members</AccordianList>
           <AccordianList>Managed Office Space</AccordianList>
           <AccordianList>Branded Merchandise</AccordianList>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
