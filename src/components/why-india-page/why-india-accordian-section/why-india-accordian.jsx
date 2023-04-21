import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Plus from "@/assets/icons/landing-page/plus";
import Minus from "@/assets/icons/landing-page/minus";
import Image1 from "@/assets/icons/landing-page/why-india-accordian-image-1";
import Image2 from "@/assets/icons/landing-page/why-india-accordian-image-2";
import Image3 from "@/assets/icons/landing-page/why-india-accordian-image-3";
import Image4 from "@/assets/icons/landing-page/why-india-accordian-image-4";
import Image5 from "@/assets/icons/landing-page/why-india-accordian-image-5";
import Image6 from "@/assets/icons/landing-page/why-india-accordian-image-6";
import AccordianListWhyIndia from "@/element/why-india-page/acoordian-section-why-india/accordian-list";
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
  "&.MuiPaper-root":{
    borderBottom: "1px solid #462B34 ",

  },
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
  borderBottom: "1px solid #462B34",
  paddingTop: "0px",
  paddingBottom: "0px",
}));

export default function WhyIndiaAccordian({ hoverChange }) {
  const [expanded, setExpanded] = React.useState("panel1");
  const [isExpanded, setIsExpanded] = React.useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    A5: "",
    A6: "",
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
      let A4 = document
        .querySelector("#panel4d-header")
        .getAttribute("aria-expanded");
      let A5 = document
        .querySelector("#panel5d-header")
        .getAttribute("aria-expanded");
      let A6 = document
        .querySelector("#panel6d-header")
        .getAttribute("aria-expanded");
      setIsExpanded({ A1: A1, A2: A2, A3: A3, A4: A4, A5: A5, A6: A6 });
    }, 0);
  }, [expanded]);

  return (
    <div className="max-w-[1288px] mx-auto rounded-[7px] md:rounded-[14px] md:px-2 md:py-4 lg:px-[54px] lg:py-[70px] px-AccordianListAccordianList[54px]  bg-[#fdfdfd] border-2 border-primary-brown">
      <>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
         
        >
          <AccordionSummary
          className={"border-b-2 border-b-red-500"}
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={isExpanded.A1 === "true" ?  <Minus  /> : <Plus  />}
          >
            <Typography className=" text-xl md:text-2xl lg:text-3xl xl:text-[36px]   font-primaryBold py-4 md:py-6 lg:py-8">
              1. Large Pool of Skilled Professionals
            </Typography>
          </AccordionSummary>
          <AccordionDetails >
            <div className="grid md:grid-cols-5 md:pb-4 lg:pb-8 ">
              <div className="md:col-span-3" >
                <AccordianListWhyIndia>
                  India is the world’s second-largest English-speaking country,
                  with over 125 million English speakers, which makes
                  communication with global clients and teams much easier.
                </AccordianListWhyIndia>
                <AccordianListWhyIndia>
                  As of 2023, India had over <span className="font-bold">5.4 million</span>  IT professionals, which
                  is projected to grow even further in the coming years.
                </AccordianListWhyIndia>
                <AccordianListWhyIndia>
                  About <span className="font-bold">1.5 million</span>  students graduate from Indian engineering
                  colleges every year, providing a continuous influx of new
                  talent.
                </AccordianListWhyIndia>
              </div>
              <div className="flex justify-center items-center  md:col-span-2 md:col-span-2 ">
                <Image1 />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
         
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            expandIcon={isExpanded.A2 === "true" ? <Minus /> : <Plus />}
          >
            <Typography className=" text-xl md:text-2xl lg:text-3xl xl:text-[36px]   font-primaryBold py-4 md:py-6 lg:py-8">
              2. Cost-effective Solutions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="grid md:grid-cols-5 md:pb-4 lg:pb-8 ">
              <div className="md:col-span-3">
                <AccordianListWhyIndia>
                  Indian IT professionals are known for offering competitive
                  pricing without compromising on quality.
                </AccordianListWhyIndia>
                <AccordianListWhyIndia>
                  The cost of hiring IT talent in India can be up to <span className="font-bold">60-70%</span> less
                  than in developed countries like the United States, the United
                  Kingdom, or Australia.
                </AccordianListWhyIndia>
              </div>
              <div  className="flex justify-center items-center  md:col-span-2">
                <Image2 />
              </div>
            </div>
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
            <Typography className=" text-xl md:text-2xl lg:text-3xl xl:text-[36px]   font-primaryBold py-4 md:py-6 lg:py-8">
              3. Strong Educational Infrastructure
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="grid md:grid-cols-5 md:pb-4 lg:pb-8 ">
              <div className="md:col-span-3">
                <AccordianListWhyIndia>
                  India has a robust educational infrastructure, with
                  prestigious institutions like the Indian Institutes of
                  Technology (IITs), National Institutes of Technology (NITs),
                  and other well-known universities producing top-quality IT
                  professionals.
                </AccordianListWhyIndia>
                <AccordianListWhyIndia>
                  The country has an extensive focus on STEM (Science,
                  Technology, Engineering, and Mathematics) education, which
                  ensures that students are well-equipped to tackle
                  technological challenges.
                </AccordianListWhyIndia>
              </div>
              <div  className="flex justify-center items-center  md:col-span-2">
                <Image3 />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            aria-controls="panel4d-content"
            id="panel4d-header"
            expandIcon={isExpanded.A4 === "true" ? <Minus /> : <Plus />}
          >
            <Typography className=" text-xl md:text-2xl lg:text-3xl xl:text-[36px]   font-primaryBold py-8">
              4. Global Exposure and Adaptability
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="grid md:grid-cols-5 md:pb-4 lg:pb-8 ">
              <div className="md:col-span-3">
                <AccordianListWhyIndia>
                  Indian IT professionals have gained extensive experience
                  working with international clients, making them adept at
                  understanding and adapting to diverse work cultures and
                  requirements.
                </AccordianListWhyIndia>
                <AccordianListWhyIndia>
                  Many Indian IT professionals have also worked onsite in
                  various countries, providing them with valuable global
                  exposure and the ability to navigate different business
                  environments effectively.
                </AccordianListWhyIndia>
              </div>
              <div  className="flex justify-center items-center  md:col-span-2">
                <Image4 />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            aria-controls="panel5d-content"
            id="panel5d-header"
            expandIcon={isExpanded.A5 === "true" ? <Minus /> : <Plus />}
          >
            <Typography className=" text-xl md:text-2xl lg:text-3xl xl:text-[36px]   font-primaryBold py-4 md:py-6 lg:py-8">
              5. Time Zone Advantages
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="grid md:grid-cols-5 md:pb-4 lg:pb-8 ">
              <div className="md:col-span-3">
                <AccordianListWhyIndia>
                  India’s time zone (GMT+5:30) offers a significant advantage
                  for businesses in the United States and Europe, as it allows
                  for a 24-hour work cycle, ensuring faster turnaround times and
                  increased productivity.
                </AccordianListWhyIndia>
              </div>
              <div  className="flex justify-center items-center  md:col-span-2">
                <Image5 />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            aria-controls="panel6d-content"
            id="panel6d-header"
            expandIcon={isExpanded.A6 === "true" ? <Minus /> : <Plus />}
          >
            <Typography className=" text-xl md:text-2xl lg:text-3xl xl:text-[36px]   font-primaryBold py-4 md:py-6 lg:py-8">
              6. Government Support
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="grid md:grid-cols-5 md:pb-4 lg:pb-8 ">
              <div className="md:col-span-3">
                <AccordianListWhyIndia>
                  The Indian government has implemented policies and initiatives
                  to promote the growth of the IT sector, such as the National
                  Policy on Software Products, the National Policy on
                  Electronics, and the establishment of Software Technology
                  Parks of India (STPI).
                </AccordianListWhyIndia>
              </div>
              <div  className="flex justify-center items-center  md:col-span-2">
                <Image6 />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </>
    </div>
  );
}
