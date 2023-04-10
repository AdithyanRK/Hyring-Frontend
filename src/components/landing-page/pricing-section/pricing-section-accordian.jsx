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
  "& .MuiAccordionSummary-root": {
    // borderBottom: "2px solid #462B34",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
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
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  // padding: theme.spacing(2),
  borderBottom: "2px solid #462B34",
  paddingTop: "0px",
  paddingBottom: "0px",
}));

export default function PricingSectionAccordian({ hoverChange }) {
  const [expanded, setExpanded] = React.useState("panel1");
  const [isExpanded, setIsExpanded] = React.useState({
    A1: "",
    A2: "",
    A3: "",
  });
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      let A1 = document
        .querySelector("#panel1d-header")
        .getAttribute("aria-expanded");
      let A2 = document
        .querySelector("#panel2d-header")
        .getAttribute("aria-expanded");
      let A3 = document
        .querySelector("#panel3d-header")
        .getAttribute("aria-expanded");
      setIsExpanded({ A1: A1, A2: A2, A3: A3 });
    }, 0);
  }, [expanded]);

  return (
    <div>
      {hoverChange ? (
        <>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              "& .MuiAccordionSummary-root": {
                borderBottom: "2px solid #462B34",
              },
            }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              expandIcon={isExpanded.A1 === "true" ? <Minus /> : <Plus />}
            >
              <Typography className="uppercase text-xl lg:text-[28px]   font-primaryMedium py-1">
                Benefits
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AccordianList>100% Remote Work</AccordianList>
              <AccordianList>Attractive Compensation Packages</AccordianList>
              <AccordianList>International Clientele</AccordianList>
              <AccordianList>Commitment to a Single Client Focus</AccordianList>
              <AccordianList>Apple Laptop Included</AccordianList>
              <AccordianList>Substantial Annual Bonuses</AccordianList>
              <AccordianList>
                Extensive Health Insurance for Employee, Spouse, Children, and
                Parents
              </AccordianList>
              <AccordianList>Grand Diwali Presents</AccordianList>
              <AccordianList>Adaptable 5-Day Work Schedule</AccordianList>
              <AccordianList>Cool Offices Located Across India</AccordianList>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              "& .MuiAccordionSummary-root": {
                borderBottom: "2px solid #462B34",
              },
            }}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              expandIcon={isExpanded.A2 === "true" ? <Minus /> : <Plus />}
            >
              <Typography className="uppercase text-xl lg:text-[28px]   font-primaryMedium  py-1">
                Seamless Portal
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AccordianList>Discover HR-matched companies</AccordianList>
              <AccordianList>Participate in Hackathons</AccordianList>
              <AccordianList>Interviews Management</AccordianList>
              <AccordianList>Manage Leaves and Attendance</AccordianList>
              <AccordianList>Oversee Salaries and Payments</AccordianList>
              <AccordianList>Manage Cyber Security</AccordianList>
              <AccordianList>Send Exclusive Hyring Invites</AccordianList>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              expandIcon={isExpanded.A3 === "true" ? <Minus /> : <Plus />}
            >
              <Typography className="uppercase text-xl lg:text-[28px]   font-primaryMedium  py-1">
                Compliance Covered
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AccordianList>Employee Provident Fund (EPF)</AccordianList>
              <AccordianList>Employee State Insurance (ESI)</AccordianList>
              <AccordianList>Professional Tax</AccordianList>
              <AccordianList>Tax Deducted at Source (TDS)</AccordianList>
              <AccordianList>Payroll Compliance</AccordianList>
              <AccordianList>Sexual Harassment Prevention</AccordianList>
              <AccordianList>Contract Labour Regulations</AccordianList>
              <AccordianList>Equal Remuneration</AccordianList>
              <AccordianList>Health Insurance</AccordianList>
            </AccordionDetails>
          </Accordion>
        </>
      ) : (
        <>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              "& .MuiAccordionSummary-root": {
                borderBottom: "2px solid #462B34",
              },
            }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              expandIcon={isExpanded.A1 === "true" ? <Minus /> : <Plus />}
            >
              <Typography className="uppercase text-xl lg:text-[28px]   font-primaryMedium py-1">
                Benefits
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AccordianList>All-inclusive package</AccordianList>
              <AccordianList>Save up to 50% of resource cost</AccordianList>
              <AccordianList>
                Complete transparency on salary to candidates
              </AccordianList>
              <AccordianList>Recruit Top 5% of Indian IT talent</AccordianList>
              <AccordianList>
                Flexibility on contract (Min. 4 months)
              </AccordianList>
              <AccordianList>Save up to 50% of resource cost</AccordianList>
              <AccordianList>Commitment to a Single Client Focus</AccordianList>
              <AccordianList>Cool Offices Located Across India</AccordianList>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              "& .MuiAccordionSummary-root": {
                borderBottom: "2px solid #462B34",
              },
            }}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              expandIcon={isExpanded.A2 === "true" ? <Minus /> : <Plus />}
            >
              <Typography className="uppercase text-xl lg:text-[28px]   font-primaryMedium  py-1">
                Seamless Portal
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AccordianList>Discover HR-vetted candidates</AccordianList>
              <AccordianList>Hire from Hackathons</AccordianList>
              <AccordianList>Recorded Interviews</AccordianList>
              <AccordianList>Manage Employees & Contracts</AccordianList>
              <AccordianList>Manage Leaves and Attendance</AccordianList>
              <AccordianList>Oversee Payments</AccordianList>
              <AccordianList>
                Control Cyber Security & Applications (Min. 5 members)
              </AccordianList>
              <AccordianList>Asset Management</AccordianList>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              expandIcon={isExpanded.A3 === "true" ? <Minus /> : <Plus />}
            >
              <Typography className="uppercase text-xl lg:text-[28px]   font-primaryMedium  py-1">
                Compliance Covered
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AccordianList>Income Tax</AccordianList>
              <AccordianList>Employee Provident Fund (EPF)</AccordianList>
              <AccordianList>Employee State Insurance (ESI)</AccordianList>
              <AccordianList>Goods and Services Tax (GST)</AccordianList>
              <AccordianList>Tax Deducted at Source (TDS)</AccordianList>
              <AccordianList>Payroll Compliance</AccordianList>
              <AccordianList>Sexual Harassment Prevention</AccordianList>
              <AccordianList>Contract Labour Regulations</AccordianList>
              <AccordianList>Equal Remuneration</AccordianList>
            </AccordionDetails>
          </Accordion>
        </>
      )}
    </div>
  );
}
