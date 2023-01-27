import { AiFillCaretRight } from "react-icons/ai";
import { useLocation, useParams } from "react-router-dom";

export default function CompanyContent({ data }) {
  const { id } = useParams();
  const location = useLocation();

  const company = data.filter((company) => company.id == id);
  return (
    <div>
      {company &&
        company.map((c, idx) => {
          return (
            <div
              className="company-content"
              id={c.id}
              order={c.order}
              key={idx}
            >
              <h2 className="job-title">{c.title}</h2>
              <p className="company-name">{c.company}</p>
              <p className="date">{c.dates}</p>
              {c.duties.map((item, index) => {
                return (
                  <div key={index} className="text">
                    <AiFillCaretRight />
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
