import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import CompanyContent from "./components/CompanyContent";

function App() {
  const [data, setData] = useState([]);
  const url = "https://course-api.com/react-tabs-project";

  useEffect(() => {
    dataContent();
  }, []);

  async function dataContent() {
    const fetchedData = await fetch(url);
    const fetchedJSON = await fetchedData.json();
    setData(fetchedJSON);
  }
  console.log(data);

  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          {data.map((company, index) => {
            return (
              <Link to={`${company.id}`} state={company}>
                <h4 key={index}>{company.company}</h4>
              </Link>
            );
          })}
        </div>
        <div>
          <Routes>
            <Route path={"/:id"} element={<CompanyContent data={data} />} />
          </Routes>
        </div>
      </div>
    </section>
  );
}

export default App;
