const alphaAsc = (a, b) => {
  return a.country - b.country;
};

const alphaRev = (a, b) => {
  return b.country - a.country;
};

const deathsAsc = (a, b) => {
  return a.deaths - b.deaths;
};

const deathsDesc = (a, b) => {
  return b.deaths - a.deaths;
};

const casesAsc = (a, b) => {
  return a.cases - b.cases;
};

const casesDesc = (a, b) => {
  return b.cases - a.cases;
};

const activeCasesAsc = (a, b) => {
  return a.active - b.active;
};

const activeCasesDesc = (a, b) => {
  return b.active - a.active;
};

export {
  alphaAsc,
  alphaRev,
  deathsAsc,
  deathsDesc,
  casesAsc,
  casesDesc,
  activeCasesAsc,
  activeCasesDesc,
};
