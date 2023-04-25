
const hyring =(val)=>{
    let amt   ;
    amt =(val + (val * (20/100))).toFixed(1)
    return amt;
};
const competitor =(val)=>{
    let amt   ;
    amt =(val*2).toFixed(1)
    return amt;
};

export const FrontendDeveloperData = [
    {
      name: "2.9 Lakhs",
      salary: 2.9,
      hyring: hyring(2.9),
      competitor: competitor(2.9),
      reported:153,
    },
    {
      name: "",
      salary: 4.4,
      hyring: hyring(4.4),
      competitor: competitor(4.4),
      reported:174,

    },
    {
      name: "",
      salary: 5.9,
      hyring: hyring(5.9),
      competitor: competitor(5.9),
      reported:120,

    },
    {
      name: "5.2 Lakhs",
      salary: 7.4,
      hyring: hyring(7.4),
      competitor: competitor(7.4),
      reported:62,

    },
    {
      name: "",
      salary: 8.9,
      hyring: hyring(8.9),
      competitor: competitor(8.9),
      reported:62,

    },
    {
      name: "",
      salary: 10.4,
      hyring: hyring(10.4),
      competitor: competitor(10.4),
      reported:31,

    },
    {
      name: "",
      salary: 11.9,
      hyring: hyring(11.9),
      competitor: competitor(11.9),
      reported:36,

    },
    {
      name: "7.8 Lakhs",
      salary: 13.4,
      hyring: hyring(13.4),
      competitor: competitor(13.4),
      reported:12,

    },
  ];