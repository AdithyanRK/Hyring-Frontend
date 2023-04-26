
const hyring =(val)=>{
    let amt   ;
    amt =((val/2)*0.2).toFixed(1)
    return amt;
};
const competitor =(val)=>{
    let amt   ;
    amt =((val/2)*0.8).toFixed(1)
    return amt;
};
const salary =(val)=>{
  let amt   ;
  amt =(val/2).toFixed(1)
  return amt;
};
const competitorFull =(val)=>{
  let amt   ;
  amt =(val/2).toFixed(1)
  return amt;
};
export const FrontendDeveloperData = [
    {
      name: "lowest",
      salary: salary(153),
      hyring: hyring(153),
      competitor: competitor(153),
      competitorFull: competitorFull(153),
      reported:153,
      salaryRupees:"2.9 Lakh",
      hyringFees:"0.58 Lakh",
      savings:"2.32 Lakh",
      competitorFees:"5.8 Lakh",

    },
    {
      name: "",
      salary: salary(174),
      hyring: hyring(174),
      competitor: competitor(174),
      competitorFull: competitorFull(174),
      reported:174,

    },
    {
      name: "Average",
      salary: salary(120),
      hyring: hyring(120),
      competitorFull: competitorFull(120),
      competitor: competitor(120),
      reported:120,

    },
    {
      name: "",
      salary: salary(62),
      hyring: hyring(62),
      competitorFull: competitorFull(62),
      competitor: competitor(62),
      reported:62,

    },
    {
      name: "",
      salary: salary(62),
      hyring: hyring(62),
      competitor: competitor(62),
      competitorFull: competitorFull(62),
      reported:62,

    },
    {
      name: "",
      salary: salary(31),
      hyring: hyring(31),
      competitor: competitor(31),
      competitorFull: competitorFull(31),
      reported:31,

    },
    {
      name: "",
      salary: salary(36),
      hyring: hyring(36),
      competitor: competitor(36),
      competitorFull: competitorFull(36),
      reported:36,

    },
    {
      name: "highest",
      salary: salary(12),
      hyring: hyring(12),
      competitor: competitor(12),
      competitorFull: competitorFull(12),
      reported:12,

    },
  ];