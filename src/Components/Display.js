import Data from "./Data";

import {
  deathsAsc,
  deathsDesc,
  casesAsc,
  casesDesc,
  activeCasesAsc,
  activeCasesDesc,
} from "./sorters";

const Display = ({ filtered, inputLength, covid, all, setAll, select }) => {
  let sortedFilt = [];
  let sortedAll = [];

  // When no search entry is present , displays and sorts list
  if (inputLength.length === 0) {
    switch (select) {
      case "deaths-Asc":
        sortedAll = covid.sort(deathsAsc);
        console.log(select);
        return (
          <>
            {sortedAll.map((f, index) => (
              <div
                className="data"
                key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
              >
                <Data f={f} />
              </div>
            ))}
          </>
        );

      case "deaths-Desc":
        sortedAll = covid.sort(deathsDesc);
        return (
          <>
            {sortedAll.map((f, index) => (
              <div
                className="data"
                key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
              >
                <Data f={f} />
              </div>
            ))}
          </>
        );

      case "cases-Asc":
        sortedAll = covid.sort(casesAsc);
        console.log(select);
        return (
          <>
            {sortedAll.map((f, index) => (
              <div
                className="data"
                key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
              >
                <Data f={f} />
              </div>
            ))}
          </>
        );

      case "cases-Desc":
        sortedAll = covid.sort(casesDesc);
        return (
          <>
            {sortedAll.map((f, index) => (
              <div
                className="data"
                key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
              >
                <Data f={f} />
              </div>
            ))}
          </>
        );

      case "active-cases-Desc":
        sortedAll = covid.sort(activeCasesDesc);
        return (
          <>
            {sortedAll.map((f, index) => (
              <div
                className="data"
                key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
              >
                <Data f={f} />
              </div>
            ))}
          </>
        );

      case "active-cases-Asc":
        sortedAll = covid.sort(activeCasesAsc);
        return (
          <>
            {sortedAll.map((f, index) => (
              <div
                className="data"
                key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
              >
                <Data f={f} />
              </div>
            ))}
          </>
        );

      default:
        return (
          <>
            {covid.map((f, index) => (
              <div
                className="data"
                key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
              >
                <Data f={f} />
              </div>
            ))}
          </>
        );
    }
  } else if (filtered.length > 0 && filtered.length <= 10) {
    //When search entry is true and results are bw 1 and 10
    //sorting for search results
    switch (select) {
      case "deaths-Asc":
        sortedFilt = filtered.sort(deathsAsc);
        return (
          <>
            {sortedFilt.map((f, index) => (
              <div
                className="data"
                key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
              >
                <Data f={f} />
              </div>
            ))}
          </>
        );

      case "deaths-Desc":
        sortedFilt = filtered.sort(deathsDesc);
        return (
          <>
            {sortedFilt.map((f, index) => (
              <div
                className="data"
                key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
              >
                <Data f={f} />
              </div>
            ))}
          </>
        );

      case "cases-Asc":
        sortedFilt = filtered.sort(casesAsc);
        return (
          <>
            {sortedFilt.map((f, index) => (
              <div
                className="data"
                key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
              >
                <Data f={f} />
              </div>
            ))}
          </>
        );

      case "cases-Desc":
        sortedFilt = filtered.sort(casesDesc);
        return (
          <>
            {sortedFilt.map((f, index) => (
              <div
                className="data"
                key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
              >
                <Data f={f} />
              </div>
            ))}
          </>
        );

      case "active-cases-Desc":
        sortedFilt = filtered.sort(activeCasesDesc);
        return (
          <>
            {sortedFilt.map((f, index) => (
              <div
                className="data"
                key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
              >
                <Data f={f} />
              </div>
            ))}
          </>
        );

      case "active-cases-Asc":
        sortedFilt = filtered.sort(activeCasesAsc);
        return (
          <>
            {sortedFilt.map((f, index) => (
              <div
                className="data"
                key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
              >
                <Data f={f} />
              </div>
            ))}
          </>
        );

      default:
        return (
          <>
            {filtered.map((f, index) => (
              <div
                className="data"
                key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
              >
                <Data f={f} />
              </div>
            ))}
          </>
        );
    }
  } else if (filtered.length >= 10) {
    return (
      <>
        <h3>Too many matches</h3>
      </>
    );
  } else if (filtered.length === 0) {
    return (
      <>
        {covid.map((f, index) => (
          <div
            className="data"
            key={f.countryInfo._id ? f.countryInfo._id : index + 0.5}
          >
            <Data f={f} />
          </div>
        ))}
      </>
    );
  }
};

export default Display;
