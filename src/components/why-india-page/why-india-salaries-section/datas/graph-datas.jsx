// calculation based on reported values
const hyring = (val) => {
  let amt;
  amt = ((val / 2) * 0.2).toFixed(1);
  return amt;
};
const competitor = (val) => {
  let amt;
  amt = ((val / 2) * 0.8).toFixed(1);
  return amt;
};
const salary = (val) => {
  let amt;
  amt = (val / 2).toFixed(1);
  return amt;
};
const competitorFull = (val) => {
  let amt;
  amt = (val / 2).toFixed(1);
  return amt;
};

// calculation for rupees convertion

const salaryRupees = (val) => {
  let result = "";
  result = "INR " + Math.round((val* 100000 /12)/100)*100 ;
  return result;
};
const hyringRupees = (val) => {
  let result = "";

  result = "INR " + Math.round((val * 0.2 * 100000 /12)/100)*100  ;

  return result;
};
const competitorRupees = (val) => {
  let result = "";
  result = "INR " + Math.round((val  * 100000 /12)/100)*100 ;
  return result;
};
const savingsRupees = (val) => {
  let result = "";
  result = "INR " + Math.round(((val   - val * 0.2)* 100000 /12)/100)*100   ;
  return result;
};

// calculations for usd conversion
const salaryUSD = (val) => {
  let result = "";
  result = "USD " + Math.round((val* 100000 /82/12)/10)*10  ;
  return result;
};
const hyringUSD = (val) => {
  let result = "";

  result = "USD " + Math.round((val * 0.2 * 100000 /82 /12)/10)*10  ;
  return result;
};
const competitorUSD = (val) => {
  let result = "";

  result = "USD " + Math.round((val  * 100000 /82/12)/10)*10 ;
  return result;
};
const savingsUSD = (val) => {
  let result = "";

  result = "USD " +  Math.round(((val   - val * 0.2)* 100000 /82/12)/10)*10 ;
  return result;
};

// calculations for AUSD conversion
const salaryAUSD = (val) => {
  let result = "";
  result = "AUSD " +Math.round((val* 100000 /55.5/12)/10)*10 ;
  return result;
};
const hyringAUSD = (val) => {
  let result = "";
  result = "AUSD " +  Math.round((val * 0.2 * 100000 /55.5 /12)/10)*10 ;
  return result;
};
const competitorAUSD = (val) => {
  let result = "";
  result = "AUSD " + Math.round((val  * 100000 /55.5/12)/10)*10 ;
  return result;
};
const savingsAUSD = (val) => {
  let result = "";
  result = "AUSD " +  Math.round(((val   - val * 0.2)* 100000 /55.5/12)/10)*10 ;
  return result;
};

// calculations for EUR conversion
const salaryEUR = (val) => {
  let result = "";
  result = "EUR " + Math.round((val* 100000 /90/12)/10)*10 ;
  return result;
};
const hyringEUR = (val) => {
  let result = "";
  
  result = "EUR " +  Math.round((val * 0.2 * 100000 /90 /12)/10)*10 ;
  return result;
};
const competitorEUR = (val) => {
  let result = "";
  result = "EUR " + Math.round((val  * 100000 /90/12)/10)*10 ;
  return result;
};
const savingsEUR = (val) => {
  let result = "";
  result = "EUR " +  Math.round(((val   - val * 0.2)* 100000 /90/12)/10)*10 ;
  return result;
};

export let FinalFrontendDeveloperData = [];
export let FinalBackendDeveloperData = [];
export let FinalSystemDesignerData = [];
export let FinalDataEngineerData = [];
export let FinalFullstackDeveloperData = [];
export let FinalDevopsEngineerData = [];
export let FinalMobileApplicationDeveloperData = [];
export let FinalQAEngineerData = [];
export let FinalUIUXDesignerData = [];
export let FinalProjectManagerData = [];
export let FinalBusinessAnalystData = [];
export let FinalDigitalMarketingManagerData = [];
export let FinalSeniorSocialMediaExecutiveData = [];

const FrontendDeveloperSalriesReported = [
  { salary: 2.93 },
  { salary: 4.44 },
  { salary: 5.94 },
  { salary: 7.40 },
  { salary: 9  },
  { salary: 10.5 },
  { salary: 12 },
  { salary: 13.5 },
  { salary: 15 },
];

const BackendDeveloperSalriesReported = [
  { salary: 3 },
  { salary: 5.1 },
  { salary: 7.3 },
  { salary: 9.4 },
  { salary: 11.5 },
  { salary: 13.6 },
  { salary: 15.8 },
  { salary: 17.9},
  { salary: 20},
];

const SystemDesignerSalriesReported = [
  { salary: 3.2 },
  { salary: 7.1 },
  { salary: 10.9 },
  { salary: 14.7 },
  { salary: 18.5 },
  { salary: 22.3 },
  { salary: 26.2 },
  { salary: 30},
  { salary: 33.8},

];

const DataEngineerSalriesReported = [
  { salary: 4.8 },
  { salary: 7.1 },
  { salary: 9.4 },
  { salary: 11.6 },
  { salary: 13.9 },
  { salary: 16.2 },
  { salary: 18.5 },
  { salary: 20.7},
  { salary: 23},
];

const FullstackDeveloperSalriesReported = [
  { salary: 4 },
  { salary: 6 },
  { salary: 8.1 },
  { salary: 10.1 },
  { salary: 12.1 },
  { salary: 14.1 },
  { salary: 16.2 },
  { salary: 18.2},
  { salary: 20.2},
];

const DevopsEngineerSalriesReported = [
  { salary: 4.8 },
  { salary: 6.1 },
  { salary: 7.4 },
  { salary: 8.8 },
  { salary: 10.1 },
  { salary: 11.4 },
  { salary: 12.7 },
  { salary: 14.1},
  { salary: 15.4},
];

const MobileApplicationDeveloperSalriesReported = [
  { salary: 3 },
  { salary: 4.4 },
  { salary: 5.9 },
  { salary: 7.3 },
  { salary: 8.7 },
  { salary: 10.1 },
  { salary: 11.6 },
  { salary: 13},
  { salary: 14.4},
];

const QAEngineerSalriesReported = [
  { salary: 2.4 },
  { salary: 3.6 },
  { salary: 4.8 },
  { salary: 6 },
  { salary: 7.2 },
  { salary: 8.4 },
  { salary: 9.6 },
  { salary: 10.8},
  { salary: 12},
];

const UIUXDesignerSalriesReported = [
  { salary: 3.4},
  { salary: 4.8 },
  { salary: 6.3 },
  { salary: 7.7 },
  { salary: 9.2 },
  { salary: 10.6 },
  { salary: 12.1 },
  { salary: 13.5},
  { salary: 15},
];

const ProjectManagerSalriesReported = [
  { salary: 4.5 },
  { salary: 7 },
  { salary: 9.5 },
  { salary: 12 },
  { salary: 14.5 },
  { salary: 17 },
  { salary: 19.5 },
  { salary: 22},
  { salary: 24.5},
];

const BusinessAnalystSalriesReported = [
  { salary: 4 },
  { salary: 5.5 },
  { salary: 7.1 },
  { salary: 8.6 },
  { salary: 10.1 },
  { salary: 11.7 },
  { salary: 13.2 },
  { salary: 14.7},
  { salary: 16.3},
];

const DigitalMarketingManagerSalriesReported = [
  { salary: 3.4 },
  { salary: 5 },
  { salary: 6.5 },
  { salary: 8.1 },
  { salary: 9.7 },
  { salary: 11.3 },
  { salary: 12.8 },
  { salary: 14.4},
  { salary: 16},
];

const SeniorSocialMediaExecutiveSalriesReported = [
  { salary: 2.9},
  { salary: 3.5 },
  { salary: 4.1 },
  { salary: 4.6 },
  { salary: 5.2 },
  { salary: 5.8 },
  { salary: 6.3 },
  { salary: 6.9},
  { salary: 7.5},
];
let data = [
  { data: FrontendDeveloperSalriesReported, final: FinalFrontendDeveloperData },
  { data: BackendDeveloperSalriesReported, final: FinalBackendDeveloperData },
  { data: SystemDesignerSalriesReported, final: FinalSystemDesignerData },
  { data: DataEngineerSalriesReported, final: FinalDataEngineerData },
  { data: FullstackDeveloperSalriesReported, final: FinalFullstackDeveloperData },
  { data: DevopsEngineerSalriesReported, final: FinalDevopsEngineerData },
  { data: MobileApplicationDeveloperSalriesReported, final: FinalMobileApplicationDeveloperData },
  { data: QAEngineerSalriesReported, final: FinalQAEngineerData },
  { data: UIUXDesignerSalriesReported, final: FinalUIUXDesignerData },
  { data: ProjectManagerSalriesReported, final: FinalProjectManagerData },
  { data: BusinessAnalystSalriesReported, final: FinalBusinessAnalystData },
  { data: DigitalMarketingManagerSalriesReported, final: FinalDigitalMarketingManagerData },
  { data: SeniorSocialMediaExecutiveSalriesReported, final: FinalSeniorSocialMediaExecutiveData },
];

data.map((mainitem) => {
  mainitem.data.forEach((item, index) => {
    mainitem.final.push({
      name: index == 0 ? "Junior": index == 8 ?" Expert" : index == 4 ? "Senior" : "",
      salary: salary(item.salary),
      hyring: hyring(item.salary),
      competitor: competitor(item.salary),
      competitorFull: competitorFull(item.salary),

      salaryRupees: salaryRupees(item.salary),
      hyringRupees: hyringRupees(item.salary),
      savingsRupees: savingsRupees(item.salary),
      competitorRupees: competitorRupees(item.salary),

      salaryUSD: salaryUSD(item.salary),
      hyringUSD: hyringUSD(item.salary),
      savingsUSD: savingsUSD(item.salary),
      competitorUSD: competitorUSD(item.salary),

      salaryAUSD: salaryAUSD(item.salary),
      hyringAUSD: hyringAUSD(item.salary),
      savingsAUSD: savingsAUSD(item.salary),
      competitorAUSD: competitorAUSD(item.salary),

      salaryEUR: salaryEUR(item.salary),
      hyringEUR: hyringEUR(item.salary),
      savingsEUR: savingsEUR(item.salary),
      competitorEUR: competitorEUR(item.salary),
    });
  });
});
