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
  result = "INR " + Math.round((val * 2 * 100000 /12)/100)*100 ;
  return result;
};
const savingsRupees = (val) => {
  let result = "";
  result = "INR " + Math.round(((val * 0.8 - val * 0.2)* 100000 /12)/100)*100   ;
  return result;
};

// calculations for usd conversion
const salaryUSD = (val) => {
  let result = "";
  result = "USD " + ((val * 100000) / 82).toFixed(0);
  return result;
};
const hyringUSD = (val) => {
  let result = "";

  result = "USD " + ((val * 0.2 * 100000) / 82).toFixed(0);
  return result;
};
const competitorUSD = (val) => {
  let result = "";

  result = "USD " + ((val * 0.8 * 100000) / 82).toFixed(0);
  return result;
};
const savingsUSD = (val) => {
  let result = "";

  result = "USD " + (((val * 0.8 - val * 0.2) * 100000) / 82).toFixed(0);
  return result;
};

// calculations for AUSD conversion
const salaryAUSD = (val) => {
  let result = "";
  result = "AUSD " + ((val * 100000) / 54).toFixed(0);
  return result;
};
const hyringAUSD = (val) => {
  let result = "";
  result = "AUSD " + ((val * 0.2 * 100000) / 54).toFixed(0);
  return result;
};
const competitorAUSD = (val) => {
  let result = "";
  result = "AUSD " + ((val * 0.8 * 100000) / 54).toFixed(0);
  return result;
};
const savingsAUSD = (val) => {
  let result = "";
  result = "AUSD " + (((val * 2 - val - val * 0.2) * 100000) / 54).toFixed(0);
  return result;
};

// calculations for EUR conversion
const salaryEUR = (val) => {
  let result = "";
  result = "EUR " + ((val * 100000) / 90).toFixed(0);
  return result;
};
const hyringEUR = (val) => {
  let result = "";
  result = "EUR " + ((val * 0.2 * 100000) / 90).toFixed(0);
  return result;
};
const competitorEUR = (val) => {
  let result = "";
  result = "EUR " + ((val * 0.8 * 100000) / 90).toFixed(0);
  return result;
};
const savingsEUR = (val) => {
  let result = "";
  result = "EUR " + (((val * 2 - val - val * 0.2) * 100000) / 90).toFixed(0);
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
  { salary: 2.9, Reporters: 153 },
  { salary: 4.4, Reporters: 174 },
  { salary: 5.9, Reporters: 174 },
  { salary: 7.4, Reporters: 120 },
  { salary: 9, Reporters: 62  },
  { salary: 10.5, Reporters: 62 },
  { salary: 12, Reporters: 31 },
  { salary: 13.5, Reporters: 36 },
  { salary: 15, Reporters: 12 },
];

const BackendDeveloperSalriesReported = [
  { salary: 3, Reporters: 40 },
  { salary: 5.1, Reporters: 40 },
  { salary: 7.2, Reporters: 39 },
  { salary: 9.3, Reporters: 22 },
  { salary: 11.5, Reporters: 12 },
  { salary: 13.6, Reporters: 12 },
  { salary: 15.7, Reporters: 10 },
  { salary: 17.8, Reporters: 8 },
];

const SystemDesignerSalriesReported = [
  { salary: 3, Reporters: 40 },
  { salary: 5.1, Reporters: 40 },
  { salary: 7.2, Reporters: 39 },
  { salary: 9.3, Reporters: 22 },
  { salary: 11.5, Reporters: 12 },
  { salary: 13.6, Reporters: 12 },
  { salary: 15.7, Reporters: 10 },
  { salary: 17.8, Reporters: 8 },
];

const DataEngineerSalriesReported = [
  { salary: 3, Reporters: 40 },
  { salary: 5.1, Reporters: 40 },
  { salary: 7.2, Reporters: 39 },
  { salary: 9.3, Reporters: 22 },
  { salary: 11.5, Reporters: 12 },
  { salary: 13.6, Reporters: 12 },
  { salary: 15.7, Reporters: 10 },
  { salary: 17.8, Reporters: 8 },
];

const FullstackDeveloperSalriesReported = [
  { salary: 3, Reporters: 40 },
  { salary: 5.1, Reporters: 40 },
  { salary: 7.2, Reporters: 39 },
  { salary: 9.3, Reporters: 22 },
  { salary: 11.5, Reporters: 12 },
  { salary: 13.6, Reporters: 12 },
  { salary: 15.7, Reporters: 10 },
  { salary: 17.8, Reporters: 8 },
];

const DevopsEngineerSalriesReported = [
  { salary: 3, Reporters: 40 },
  { salary: 5.1, Reporters: 40 },
  { salary: 7.2, Reporters: 39 },
  { salary: 9.3, Reporters: 22 },
  { salary: 11.5, Reporters: 12 },
  { salary: 13.6, Reporters: 12 },
  { salary: 15.7, Reporters: 10 },
  { salary: 17.8, Reporters: 8 },
];

const MobileApplicationDeveloperSalriesReported = [
  { salary: 3, Reporters: 40 },
  { salary: 5.1, Reporters: 40 },
  { salary: 7.2, Reporters: 39 },
  { salary: 9.3, Reporters: 22 },
  { salary: 11.5, Reporters: 12 },
  { salary: 13.6, Reporters: 12 },
  { salary: 15.7, Reporters: 10 },
  { salary: 17.8, Reporters: 8 },
];

const QAEngineerSalriesReported = [
  { salary: 3, Reporters: 40 },
  { salary: 5.1, Reporters: 40 },
  { salary: 7.2, Reporters: 39 },
  { salary: 9.3, Reporters: 22 },
  { salary: 11.5, Reporters: 12 },
  { salary: 13.6, Reporters: 12 },
  { salary: 15.7, Reporters: 10 },
  { salary: 17.8, Reporters: 8 },
];

const UIUXDesignerSalriesReported = [
  { salary: 3, Reporters: 40 },
  { salary: 5.1, Reporters: 40 },
  { salary: 7.2, Reporters: 39 },
  { salary: 9.3, Reporters: 22 },
  { salary: 11.5, Reporters: 12 },
  { salary: 13.6, Reporters: 12 },
  { salary: 15.7, Reporters: 10 },
  { salary: 17.8, Reporters: 8 },
];

const ProjectManagerSalriesReported = [
  { salary: 3, Reporters: 40 },
  { salary: 5.1, Reporters: 40 },
  { salary: 7.2, Reporters: 39 },
  { salary: 9.3, Reporters: 22 },
  { salary: 11.5, Reporters: 12 },
  { salary: 13.6, Reporters: 12 },
  { salary: 15.7, Reporters: 10 },
  { salary: 17.8, Reporters: 8 },
];

const BusinessAnalystSalriesReported = [
  { salary: 3, Reporters: 40 },
  { salary: 5.1, Reporters: 40 },
  { salary: 7.2, Reporters: 39 },
  { salary: 9.3, Reporters: 22 },
  { salary: 11.5, Reporters: 12 },
  { salary: 13.6, Reporters: 12 },
  { salary: 15.7, Reporters: 10 },
  { salary: 17.8, Reporters: 8 },
];

const DigitalMarketingManagerSalriesReported = [
  { salary: 3, Reporters: 40 },
  { salary: 5.1, Reporters: 40 },
  { salary: 7.2, Reporters: 39 },
  { salary: 9.3, Reporters: 22 },
  { salary: 11.5, Reporters: 12 },
  { salary: 13.6, Reporters: 12 },
  { salary: 15.7, Reporters: 10 },
  { salary: 17.8, Reporters: 8 },
];

const SeniorSocialMediaExecutiveSalriesReported = [
  { salary: 3, Reporters: 40 },
  { salary: 5.1, Reporters: 40 },
  { salary: 7.2, Reporters: 39 },
  { salary: 9.3, Reporters: 22 },
  { salary: 11.5, Reporters: 12 },
  { salary: 13.6, Reporters: 12 },
  { salary: 15.7, Reporters: 10 },
  { salary: 17.8, Reporters: 8 },
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
      reported: item.Reporters,

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
