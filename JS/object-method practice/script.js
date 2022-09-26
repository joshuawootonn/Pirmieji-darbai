const company = {
  name: "Tesla",
  foundationDate: new Date("2020"),
  workers: 100,
  foundingCapital: 1_000_000,

  showCompanyData: () => {
    console.log(company.name);
    console.log(
      `We are ${company.name}, foundation date: ${company.foundationDate}, workers: ${company.workers}, founding capital: ${company.foundingCapital}`
    );
  },
};
console.log(company);
company.showCompanyData();
